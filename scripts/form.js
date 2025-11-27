// Populate dropdown
const products = [
  "Solar Panel X200",
  "Water Pump Pro",
  "Battery Pack Lite",
  "Wind Turbine Mini"
];

const productSelect = document.getElementById("product");
products.forEach(item => {
  const opt = document.createElement("option");
  opt.value = item;
  opt.textContent = item;
  productSelect.appendChild(opt);
});
