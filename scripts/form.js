// Populate product select options
const products = [
  {id: "fc-1888", name: "flux capacitor"},
  {id: "fc-2050", name: "power laces"},
  {id: "fs-1987", name: "time circuits"},
  {id: "ac-2000", name: "low voltage reactor"},
  {id: "jj-1969", name: "warp equalizer"}
];

const productSelect = document.getElementById("product");
products.forEach(p => {
  const option = document.createElement("option");
  option.value = p.id;
  option.textContent = p.name;
  productSelect.appendChild(option);
});
