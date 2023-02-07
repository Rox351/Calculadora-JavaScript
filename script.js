const display = document.querySelector("#display");
const buttons = document.querySelectorAll(".number, .operator");

// Adiciona event listener para cliques em botões
buttons.forEach(button => {
  button.addEventListener("click", e => {
    let value = e.target.innerText;
    if (value === "C") {
      display.value = "";
    } else if (value === "=") {
      try {
        display.value = eval(display.value);
      } catch (e) {
        display.value = "Error";
      }
    } else {
      display.value += value;
    }
  });
});

// Adiciona event listener para pressionamento de teclas
document.addEventListener("keydown", e => {
  if (document.activeElement !== display) {
    return;
  }

  if (e.key >= "0" && e.key <= "9") {
    display.value += e.key;
  } else if (e.key === "+" || e.key === "-" || e.key === "*" || e.key === "/") {
    display.value += e.key;
  } else if (e.key === "Enter" || e.key === "=") {
    try {
      display.value = eval(display.value);
    } catch (e) {
      display.value = "Error";
    }
  } else if (e.key === "c" || e.key === "C") {
    display.value = "";
  }
});
