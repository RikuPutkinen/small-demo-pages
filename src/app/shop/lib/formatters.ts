const euroFormat = new Intl.NumberFormat("fi-FI", {
  style: "currency",
  currency: "EUR",
  minimumFractionDigits: 2
});

export {euroFormat}