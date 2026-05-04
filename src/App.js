export function runApp(wrapEl) {
    const pEl = document.createElement("p");
    pEl.textContent = "Hello from App.js";
    wrapEl.appendChild(pEl);
}