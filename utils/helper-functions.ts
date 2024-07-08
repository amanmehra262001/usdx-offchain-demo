export const handleUSDXGeneration = (
  usdxAmount: number,
  collatoralRatio: number
) => {
  return [
    usdxAmount * (collatoralRatio / 100),
    usdxAmount * (1 - collatoralRatio / 100),
  ];
};
