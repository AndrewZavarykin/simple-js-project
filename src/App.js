export function runApp(wrapEl) {
  const pEl = document.createElement("p");
  pEl.textContent = "Hello from JavaScript";
  wrapEl.appendChild(pEl);
}
