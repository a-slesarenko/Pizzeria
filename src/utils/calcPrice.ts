const calcPrice = (type: number, size: number, basePrice: number) => {

  if (type === 0 && size === 26) {
    return basePrice;
  } else if (type === 0 && size === 30) {
    return Math.ceil(basePrice * 1.15);
  } else if (type === 0 && size === 40) {
    return Math.ceil(basePrice * 1.5);
  } else if (type === 1 && size === 26) {
    return Math.ceil(basePrice * 1.1);
  } else if (type === 1 && size === 30) {
    return Math.ceil(basePrice * 1.2);
  } else if (type === 1 && size === 40) {
    return Math.ceil(basePrice * 1.55);
  }
};

export default calcPrice;
