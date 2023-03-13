const change_color = (btn_1, btn_2) => {
    if (btn_1.classList.contains("button-primary")) {
      btn_1.classList.remove("button-primary");
      btn_1.classList.add("button-secondary");
    } else {
      btn_1.classList.remove("button-secondary");
      btn_1.classList.add("button-primary");
    }
  
    if (btn_2.classList.contains("button-secondary")) {
      btn_2.classList.remove("button-secondary");
      btn_2.classList.add("button-primary");
    } else {
      btn_2.classList.remove("button-primary");
      btn_2.classList.add("button-secondary");
    }
  };

const btn_transacciones_1 = document.querySelector("#btn_transacciones_1");
const btn_transacciones_2 = document.querySelector("#btn_transacciones_2");

const btn_influencia_1 = document.querySelector("#btn_influencia_1");
const btn_influencia_2 = document.querySelector("#btn_influencia_2");

const btn_representante_1 = document.querySelector("#btn_representante_1");
const btn_representante_2 = document.querySelector("#btn_representante_2");


const btn_recursos_1 = document.querySelector("#btn_recursos_1");
const btn_recursos_2 = document.querySelector("#btn_recursos_2");

btn_transacciones_1.addEventListener("click", ()=>{
    change_color(btn_transacciones_1, btn_transacciones_2);
});

btn_transacciones_2.addEventListener("click", ()=>{
    change_color(btn_transacciones_1, btn_transacciones_2);
});




btn_influencia_1.addEventListener("click", ()=>{
    change_color(btn_influencia_1, btn_influencia_2);
});

btn_influencia_2.addEventListener("click", ()=>{
    change_color(btn_influencia_1, btn_influencia_2);
});


btn_representante_1.addEventListener("click", ()=>{
    change_color(btn_representante_1, btn_representante_2);
});

btn_representante_2.addEventListener("click", ()=>{
    change_color(btn_representante_1, btn_representante_2);
});


btn_recursos_1.addEventListener("click", ()=>{
    change_color(btn_recursos_1, btn_recursos_2);
});


btn_recursos_2.addEventListener("click", ()=>{
    change_color(btn_recursos_1, btn_recursos_2);
});




