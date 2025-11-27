// Read query params
const params = new URLSearchParams(window.location.search);
const summaryList = document.getElementById("summary");

// Convert all form data into a summary list
params.forEach((value, key) => {
  const li = document.createElement("li");
  li.textContent = `${key}: ${value}`;
  summaryList.appendChild(li);
});

// Handle review counter
let count = Number(localStorage.getItem("reviewCount")) || 0;
count++;
localStorage.setItem("reviewCount", count);

document.getElementById("counter").textContent =
  `You have submitted ${count} review(s).`;
