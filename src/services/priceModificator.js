export const modifyPrice = (price) => {
  if (price < 1000) return price.toString();

  const numberStr = price.toString();
  let result = "";
  let count = 0;

  for (let i = numberStr.length - 1; i >= 0; i--) {
    result = numberStr[i] + result;
    count++;

    if (count === 3 && i !== 0) {
      result = "." + result;
      count = 0;
    }
  }

  return result;
};
