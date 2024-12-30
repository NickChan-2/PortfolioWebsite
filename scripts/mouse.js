const glow = document.querySelector("#cursor-glow");

document.addEventListener("mousemove", (e) => {
  glow.style.left = `${e.pageX}px`;
  glow.style.top = `${e.pageY}px`;
});

// Hover Effect
document.querySelectorAll("a, button").forEach((el) => {
  el.addEventListener("mouseover", () => {
    glow.style.transform = "translate(-50%, -50%) scale(1.5)"; // Keeps transform origin centered
  });
  el.addEventListener("mouseleave", () => {
    glow.style.transform = "translate(-50%, -50%) scale(1)";
  });
});
