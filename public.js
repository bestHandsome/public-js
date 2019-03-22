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

// 深拷贝数组

copyArray = (obj) => {
  if (typeof obj !== 'object') {return;}
  const newObj = obj instanceof Array ? [] : {};
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      console.log(obj[key]);
      newObj[key] = typeof obj[key] === 'object' ? copyArray(obj[key]) : obj[key];
      console.log(newObj[key]);
    }
  }
  return newObj;
};

removeAttrRepeat = (arr, attr) => {
};