const obj = {
  aa: "111111111111111111111111",
  bb: {
    b1: "22222222222222222222222222222",
    b2: "333333333333333333333333333333"
  }
}

const json = JSON.stringify(obj, (key, value) => {
  if (typeof value === 'string') {
    return value.slice(0, 5)
  } else {
    return value
  }
}, 4)

console.log(json);
