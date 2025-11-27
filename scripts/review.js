const params = new URLSearchParams(window.location.search);

const list = document.getElementById("summary");

params.forEach((value, key) => {
  const li = document.createElement("li");
  li.textContent = `${key}: ${value}`;
  list.appendChild(li);
});

// Review count tracker
let count = Number(localStorage.getItem("reviewCount")) || 0;
count++;
localStorage.setItem("reviewCount", count);

document.getElementById("counter").textContent =
  `Total reviews submitted: ${count}`;
