// 从给定数组中取出给定长度的随机数组；
getRandomNumberList = (arr, count) => {
  const newArr = [];
  arr.forEach(i => newArr.push(i));
  const target = [];
  for(let i = 0; i < count; i++) {
    if (newArr.length > 0) {
      const randomIndex = Math.floor(Math.random() * newArr.length);
      target[i] = newArr[randomIndex];
      newArr.splice(randomIndex, 1);
    } else {
      break;
    }
  }
  return target;
};