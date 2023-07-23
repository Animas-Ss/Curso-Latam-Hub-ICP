import React from "react";
import ReactDOM from 'react-dom/client';
import { App } from "./App";
import './index.css'


//ReactDOM.render(<App/>, document.getElementById('root'));

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

/* import { animas_dream_backend } from "../../declarations/animas_dream_backend";
console.log("control")

document.querySelector("form").addEventListener("submit", async (e) => {
  e.preventDefault();
  const button = e.target.querySelector("button");

  const name = document.getElementById("name").value.toString();

  button.setAttribute("disabled", true);

  // Interact with foo actor, calling the greet method
  const greeting = await animas_dream_backend.greet(name);

  button.removeAttribute("disabled");

  document.getElementById("greeting").innerText = greeting;

  return false;
}); */
