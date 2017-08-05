import namor from "namor"

const range = len => {
  const arr = [];
  for (let i = 0; i < len; i++) {
    arr.push(i);
  }
  return arr;
};

const newPerson = () => {
  return {
    date: Math.floor(Math.random() * 30),
    category: namor.generate({ words: 1, numbers: 0 }),
    value: Math.floor(Math.random() * 30),
    comments: namor.generate({ words: 3, numbers: 0 })
  }
}

export const makeData = (len = 5553) => {
  return range(len).map(d => {
    return {
      ...newPerson(),
      children: range(10).map(newPerson)
    };
  });
}
