export const formatNumberToCurrencyString = (number: number,_toFixed=2): string => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits:_toFixed,
    }).format(number);
  };