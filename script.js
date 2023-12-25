let x = [1, 2, 3, 4, 5, 78, 95, 1255, 78, 95, 125];

let low = 0,
  high = x.length - 1;

let key = 1;
let mid;

let bSearch = (key, high, low) => {
  while (low <= high) {
    mid = Math.floor((low + high) / 2);

    if (x[mid] === key) {
      console.log("yes");
      return mid;
    }

    if (x[mid] > key) {
      high = mid - 1;
    }

    if (x[mid] < key) {
      low = mid + 1;
    }
  }
  return -1;
};
let bSort = (high, arr) => {
  let temp;

  for (let i = 0; i < high; i++) {
    for (let j = 0; j < high - i; j++) {
      if (arr[j] < arr[j + 1]) {
        temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
};

bSort(high, x);
x.forEach((element) => {
  console.log(element);
});
