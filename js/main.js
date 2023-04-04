//cambiar el color de los botones calculadora
const btn_months_1 = document.querySelector("#btn_months_1");
const btn_months_2 = document.querySelector("#btn_months_2");

const btn_arren_1 = document.querySelector("#btn_arrendamiento-1");
const btn_arren_2 = document.querySelector("#btn_arrendamiento-2");

const btn_domi_1 = document.querySelector("#btn_domi_1");
const btn_domi_2 = document.querySelector("#btn_domi_2");

const btn_clausula_1 = document.querySelector("#btn_clausula-1");
const btn_clausula_2 = document.querySelector("#btn_clausula-2");

const btn_danios_1 = document.querySelector("#btn_danios_1");
const btn_danios_2 = document.querySelector("#btn_danios_2");




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

btn_months_1.addEventListener("click", () => {
  change_color(btn_months_1, btn_months_2);

  if (btn_calcular.disabled == true) {
    btn_calcular.disabled = false;
    btn_continue.disabled = true;
  } else {
    return;
  }
});

btn_months_2.addEventListener("click", () => {
  change_color(btn_months_1, btn_months_2);

  if (btn_calcular.disabled == true) {
    btn_calcular.disabled = false;
    btn_continue.disabled = true;
  } else {
    return;
  }
});

btn_domi_1.addEventListener("click", () => {
  change_color(btn_domi_1, btn_domi_2);

  if (btn_calcular.disabled == true) {
    btn_calcular.disabled = false;
    btn_continue.disabled = true;
  } else {
    return;
  }
});

btn_domi_2.addEventListener("click", () => {
  change_color(btn_domi_1, btn_domi_2);

  if (btn_calcular.disabled == true) {
    btn_calcular.disabled = false;
    btn_continue.disabled = true;
  } else {
    return;
  }
});



//Mostrar total(Calculadora)
const text = document.querySelector("#total");
const text_1 = document.querySelector("#total-mobile");
const btn_calcular = document.querySelector("#btn_calcular");
const btn_continue = document.querySelector("#btn_continue");

btn_calcular.addEventListener("click", () => {
  text.innerHTML = "450.000";
  text_1.innerHTML = "450.000";
  btn_calcular.disabled = true;
  btn_continue.disabled = false;
});


        btn_continue.addEventListener('click', () =>{
            window.location.href = "./datos_propiedad.html";
        });



//cambiar el color de los botones preguntas seguridad
