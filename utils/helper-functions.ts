export const handleUSDXGeneration = (
  usdxAmount: number,
  collatoralRatio: number,
  arPrice: number,
  arxPrice: number
) => {
  return [
    (usdxAmount * (collatoralRatio / 100)) / arPrice,
    (usdxAmount * ((100 - collatoralRatio) / 100)) / arxPrice,
  ];
};

export const handleCollatoralRatio = (
  arPrice: number,
  arTotalSupply: number,
  arxPrice: number,
  arxTotalPrice: number,
  usdxAmount: number
) => {
  const targetPrice = 1;
  const arValue = arPrice * arTotalSupply;
  const arxValue = arxPrice * arxTotalPrice;
  const totalValue = arValue + arxValue;
  const currentUSDXPrice = totalValue / usdxAmount;

  const difference = targetPrice - currentUSDXPrice;

  // for each 0.1 step we deduce 0.2% from the collatoral ratio
  return difference * 10 * 0.2;
};
