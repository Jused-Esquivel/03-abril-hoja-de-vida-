// ================================================================
// HOJA DE VIDA — index.js
// Funciones: modo oscuro, habilidades, impresión, contador, email
// ================================================================

// ----------------------------------------------------------------
// 1. MODO OSCURO
//    Alterna la clase "dark-mode" en el body y guarda la preferencia
// ----------------------------------------------------------------
const btnDark = document.getElementById("btn-dark");

function activarModoOscuro() {
  document.body.classList.add("dark-mode");
  btnDark.textContent = "☀️ Modo claro";
  localStorage.setItem("modoOscuro", "true");
}

function desactivarModoOscuro() {
  document.body.classList.remove("dark-mode");
  btnDark.textContent = "🌙 Modo oscuro";
  localStorage.setItem("modoOscuro", "false");
}

// Al cargar la página, revisamos si el usuario ya eligió modo oscuro antes
if (localStorage.getItem("modoOscuro") === "true") {
  activarModoOscuro();
}

btnDark.addEventListener("click", function () {
  if (document.body.classList.contains("dark-mode")) {
    desactivarModoOscuro();
  } else {
    activarModoOscuro();
  }
});


// ----------------------------------------------------------------
// 2. FILTRO DE HABILIDADES
//    Al hacer clic en una skill, se resalta o se desactiva
// ----------------------------------------------------------------
const habilidades = document.querySelectorAll(".skills li");

habilidades.forEach(function (item) {
  item.style.cursor = "pointer";

  item.addEventListener("click", function () {
    // Si ya está activa, la desactivamos; si no, la activamos
    if (item.classList.contains("skill-activa")) {
      item.classList.remove("skill-activa");
      item.style.fontWeight = "normal";
      item.style.color = "";
    } else {
      item.classList.add("skill-activa");
      item.style.fontWeight = "600";
      item.style.color = "var(--primary)";
    }
  });
});


// ----------------------------------------------------------------
// 3. BOTÓN DE IMPRESIÓN
//    Abre el diálogo de impresión del navegador
// ----------------------------------------------------------------
const btnPrint = document.getElementById("btn-print");

btnPrint.addEventListener("click", function () {
  window.print();
});


// ----------------------------------------------------------------
// 4. CONTADOR DE TIEMPO CURSANDO
//    Calcula dinámicamente cuánto tiempo llevas en la carrera
// ----------------------------------------------------------------
const spanTiempo = document.getElementById("tiempo-cursando");

if (spanTiempo) {
  const fechaInicio = new Date(2023, 0, 1); // Cambia al mes/año real de inicio (0 = enero)
  const ahora = new Date();

  const mesesTotales =
    (ahora.getFullYear() - fechaInicio.getFullYear()) * 12 +
    (ahora.getMonth() - fechaInicio.getMonth());

  const anios = Math.floor(mesesTotales / 12);
  const meses = mesesTotales % 12;

  let texto = "";
  if (anios > 0) texto += anios + " año" + (anios > 1 ? "s" : "");
  if (meses > 0) texto += (anios > 0 ? " y " : "") + meses + " mes" + (meses > 1 ? "es" : "");

  spanTiempo.textContent = texto;
}


// ----------------------------------------------------------------
// 5. COPIAR EMAIL AL PORTAPAPELES
//    Clic en el email → copia la dirección y muestra confirmación
// ----------------------------------------------------------------
const emailLink = document.getElementById("email-link");

if (emailLink) {
  emailLink.addEventListener("click", function (evento) {
    evento.preventDefault(); // Evita que abra el cliente de correo

    const correo = "jaesquivel@ucundinamarca.edu.co";

    navigator.clipboard.writeText(correo).then(function () {
      const textoOriginal = emailLink.textContent;
      emailLink.textContent = "✓ ¡Copiado!";
      emailLink.style.opacity = "0.7";

      // Después de 2 segundos, vuelve al texto original
      setTimeout(function () {
        emailLink.textContent = textoOriginal;
        emailLink.style.opacity = "1";
      }, 2000);
    });
  });
}