// Utility function to get today's date in YYYY-MM-DD format
function getTodayDate() {
  return new Date().toISOString().split("T")[0];
}

// IndexedDB Setup
const dbName = "ExerciseAppDB";
const dbVersion = 1;
let db;

function initDB() {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(dbName, dbVersion);

    request.onerror = () => reject("DB failed to open");
    request.onsuccess = () => {
      db = request.result;
      resolve(db);
    };

    request.onupgradeneeded = (e) => {
      db = e.target.result;
      if (!db.objectStoreNames.contains("reps")) {
        const store = db.createObjectStore("reps", {
          keyPath: "id",
          autoIncrement: true,
        });
        store.createIndex("date", "date", { unique: false });
      }
    };
  });
}

// Save reps for exercise today
function saveReps(exercise, count) {
  const transaction = db.transaction(["reps"], "readwrite");
  const store = transaction.objectStore("reps");
  const data = {
    exercise,
    count,
    date: getTodayDate(),
  };
  store.add(data);
}

// Get reps by day or week filter
function getRepsBy(filter = "day") {
  return new Promise((resolve) => {
    const transaction = db.transaction(["reps"], "readonly");
    const store = transaction.objectStore("reps");
    const index = store.index("date");
    const results = [];

    index.openCursor().onsuccess = (e) => {
      const cursor = e.target.result;
      if (cursor) {
        const today = getTodayDate();
        const thisWeek = getCurrentWeek();
        if (
          (filter === "day" && cursor.value.date === today) ||
          (filter === "week" && thisWeek.includes(cursor.value.date))
        ) {
          results.push(cursor.value);
        }
        cursor.continue();
      } else {
        resolve(results);
      }
    };
  });
}

// Helper: get current week dates (Sunday to Saturday)
function getCurrentWeek() {
  const dates = [];
  const today = new Date();
  const first = today.getDate() - today.getDay(); // Sunday
  for (let i = 0; i < 7; i++) {
    const d = new Date(today.getFullYear(), today.getMonth(), first + i);
    dates.push(d.toISOString().split("T")[0]);
  }
  return dates;
}

// Calculate and show streak
function calculateStreak() {
  return new Promise((resolve) => {
    const transaction = db.transaction(["reps"], "readonly");
    const store = transaction.objectStore("reps");
    const index = store.index("date");

    const dates = new Set();
    index.openCursor(null, "prev").onsuccess = (e) => {
      const cursor = e.target.result;
      if (cursor) {
        dates.add(cursor.value.date);
        cursor.continue();
      } else {
        // Calculate streak of consecutive days with entries
        let streak = 0;
        let current = new Date();
        while (dates.has(current.toISOString().split("T")[0])) {
          streak++;
          current.setDate(current.getDate() - 1);
        }
        document.getElementById("streak").textContent = `🔥 Streak: ${streak} days`;
        resolve(streak);
      }
    };
  });
}

// Timer function
function startTimer(duration, display) {
  let timer = duration,
    minutes,
    seconds;
  const interval = setInterval(() => {
    minutes = String(Math.floor(timer / 60)).padStart(2, "0");
    seconds = String(timer % 60).padStart(2, "0");
    display.textContent = `${minutes}:${seconds}`;
    if (--timer < 0) {
      clearInterval(interval);
      display.textContent = "⏱ Done!";
    }
  }, 1000);
}

// Update stats on screen
async function updateStats() {
  const todayStats = await getRepsBy("day");
  const weekStats = await getRepsBy("week");

  const todayTotal = todayStats.reduce((acc, cur) => acc + cur.count, 0);
  const weekTotal = weekStats.reduce((acc, cur) => acc + cur.count, 0);

  document.getElementById("todayStats").textContent = `Today: ${todayTotal} reps`;
  document.getElementById("weekStats").textContent = `Week: ${weekTotal} reps`;

  await calculateStreak();
}

// DOM ready
window.addEventListener("DOMContentLoaded", async () => {
  await initDB();
  await updateStats();

  document.getElementById("saveBtn").addEventListener("click", async () => {
    const ex = document.getElementById("exerciseDropdown").value;
    const reps = Number(document.getElementById("repInput").value);
    if (ex && reps > 0) {
      saveReps(ex, reps);
      document.getElementById("repInput").value = "";
      await updateStats();
    }
  });

  document.getElementById("startTimerBtn").addEventListener("click", () => {
    const display = document.getElementById("timerDisplay");
    startTimer(60, display); // 1 minute timer
  });
});
