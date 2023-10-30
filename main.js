const textButton = document.getElementById("text-btn");
const imgButton = document.getElementById("img-btn");
const panelImg = document.getElementById("panel-img");
const panelTexto = document.getElementById("panel-texto");
const panelAside = document.getElementById("panel-aside");
const bothAsides = document.getElementsByClassName("aside");

//mostrar panel texto o imagen
textButton.addEventListener("click", () => togglePanel("text"));
imgButton.addEventListener("click", () => togglePanel("img"));
const togglePanel = (panelType) => {
  panelAside.classList.remove("hidden");
  panelTexto.classList.toggle("hidden", panelType !== "text");
  panelImg.classList.toggle("hidden", panelType !== "img");
};

//cerrar aside
const cerrarButtons = document.querySelectorAll(".cerrar-button");
const asides = document.querySelectorAll(".aside");
cerrarButtons.forEach((button) => {
  button.addEventListener("click", () => {
    asides.forEach((aside) => {
      aside.classList.add("hidden");
    });
  });
});

//url imagen
const imputUrlImg = document.getElementById("url-img");
const miMeme = document.getElementById("mi-meme");

// Función que se ejecutará cuando cambie el valor del campo URL
const updateImage = () => {
  const imageUrl = imputUrlImg.value;
  miMeme.style.backgroundImage = `url("${imageUrl}")`;
  miMeme.style.backgroundSize = "contain";
  miMeme.style.backgroundRepeat = "no-repeat";
  miMeme.style.backgroundPosition = "center";
};

// Evento 'input' para cambios en el campo URL
imputUrlImg.addEventListener("input", updateImage);

// Evento táctil (touchend) para dispositivos móviles
imputUrlImg.addEventListener("touchend", updateImage);

/*const imputUrlImg = document.getElementById("url-img");
const miMeme = document.getElementById("mi-meme");
imputUrlImg.addEventListener("input", function () {
  const imageUrl = imputUrlImg.value;
  miMeme.style.backgroundImage = `url("${imageUrl}")`;
  miMeme.style.backgroundSize = "contain";
  miMeme.style.backgroundRepeat = "no-repeat";
  miMeme.style.backgroundPosition = "center";
});
// Evento 'input' para cambios en el campo URL

imputUrlImg.addEventListener("touchend", function (event) {
  // Lógica para manejar el evento táctil
});*/

//><<<<<<<<<<<<<<<<<<<FONDO>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//colorpicker
const colorBtn = document.getElementById("btn-bgimagen");
colorBtn.addEventListener("input", () => {
  const selectedColor = colorBtn.value;
  miMeme.style.backgroundColor = selectedColor;
});

// Actualizar bgimagen__span con el color seleccionado
const bgimagenSpan = document.getElementById("bgimagen-span");
const btnBgimagen = document.getElementById("btn-bgimagen");
btnBgimagen.addEventListener("input", () => {
  const selectedColor = btnBgimagen.value;
  bgimagenSpan.textContent = selectedColor;
});

//<<<<<<<<<<<<<<<<<<<<<filtros a seleccionar>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
const selectBMS = document.getElementById("select-bms");
selectBMS.addEventListener("change", () => {
  const selectedBMS = selectBMS.value;
  miMeme.style.backgroundBlendMode = selectedBMS;
});

// <<<<<<<<<<<<<<<<<<<<<<<<<<filtros varios>>>>>>>>>>>>>>>>>>>>>>>>>>>
const brightnessInput = document.getElementById("brightness");
const opacityInput = document.getElementById("opacity");
const contrastInput = document.getElementById("contrast");
const blurInput = document.getElementById("blur");
const grayscaleInput = document.getElementById("grayscale");
const sepiaInput = document.getElementById("sepia");
const hueInput = document.getElementById("hue");
const saturateInput = document.getElementById("saturate");
const negativeInput = document.getElementById("negative");
// BRILLO
brightnessInput.addEventListener("input", () => {
  const brightnessValue = brightnessInput.value;
  miMeme.style.filter = `brightness(${brightnessValue})`;
});
//OPACIDAD
opacityInput.addEventListener("input", () => {
  const opacityValue = opacityInput.value;
  miMeme.style.opacity = `opacity(${opacityValue})`;
});
//CONTRASTE
contrastInput.addEventListener("input", () => {
  const contrastValue = contrastInput.value;
  miMeme.style.filter = `contrast(${contrastValue}%)`;
});
//DESENFOQUE
blurInput.addEventListener("input", () => {
  const blurValue = blurInput.value;
  miMeme.style.filter = `blur(${blurValue}px)`;
});
//ESCALA DE GRISES
grayscaleInput.addEventListener("input", () => {
  const grayscaleValue = grayscaleInput.value;
  miMeme.style.filter = `grayscale(${grayscaleValue}%)`;
});
//SEPIA
sepiaInput.addEventListener("input", () => {
  const sepiaValue = sepiaInput.value;
  miMeme.style.filter = `sepia(${sepiaValue}%)`;
});
//HUE
hueInput.addEventListener("input", () => {
  const hueValue = hueInput.value;
  miMeme.style.filter = `hue-rotate(${hueValue}deg)`;
});
//SATURACION
saturateInput.addEventListener("input", () => {
  const saturateValue = saturateInput.value;
  miMeme.style.filter = `saturate(${saturateValue}%)`;
});
//NEGATIVO
negativeInput.addEventListener("input", () => {
  const negativeValue = negativeInput.value;
  miMeme.style.filter = `invert(${negativeValue}%)`;
});

//<<<<<<<<<<<<<<<<<<< boton de reset>>>>>>>>>>>>>>>>>
const resetButton = document.getElementById("reset");
resetButton.addEventListener("click", () => {
  negativeInput.value = 0;
  saturateInput.value = 100;
  hueInput.value = 0;
  sepiaInput.value = 0;
  grayscaleInput.value = 0;
  blurInput.value = 0;
  contrastInput.value = 100;
  opacityInput.value = 1;
  brightnessInput.value = 1;
  applyFilters(miMeme);
});
function applyFilters() {
  miMeme.style.filter = `
      invert(${negativeInput.value}%)
      saturate(${saturateInput.value}%)
      hue-rotate(${hueInput.value}deg)
      sepia(${sepiaInput.value}%)
      grayscale(${grayscaleInput.value}%)
      blur(${blurInput.value}px)
      contrast(${contrastInput.value}%)
      opacity(${opacityInput.value})
      brightness(${brightnessInput.value})
    `;
}
negativeInput.addEventListener("input", applyFilters);
saturateInput.addEventListener("input", applyFilters);
hueInput.addEventListener("input", applyFilters);
sepiaInput.addEventListener("input", applyFilters);
grayscaleInput.addEventListener("input", applyFilters);
blurInput.addEventListener("input", applyFilters);
contrastInput.addEventListener("input", applyFilters);
opacityInput.addEventListener("input", applyFilters);
brightnessInput.addEventListener("input", applyFilters);

//<<<<<<<<<<<<<<<<<<TEXTO>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//para escribir el texto superior, top text
const inputTextTop = document.getElementById("input-text-top");
const topText = document.getElementById("top-text");
inputTextTop.addEventListener("input", () => {
  topText.innerText = inputTextTop.value;
});
const checkTextTop = document.getElementById("check-text-top");
checkTextTop.addEventListener("click", () => {
  if (checkTextTop.checked) {
    topText.style.display = "none";
  } else {
    topText.style.display = "block";
  }
});
//texto inferior
const inputTextBtn = document.getElementById("input-text-btn");
const btnText = document.getElementById("btn-text");
inputTextBtn.addEventListener("input", () => {
  btnText.innerText = inputTextBtn.value;
});
const checkTextBtn = document.getElementById("check-text-btn");
checkTextBtn.addEventListener("click", () => {
  if (checkTextBtn.checked) {
    btnText.style.display = "none";
  } else {
    btnText.style.display = "block";
  }
});
//fuentes
const textSelect = document.getElementById("text-select");
const selectOptions = textSelect.options;
textSelect.addEventListener("change", () => {
  const selectedFont = textSelect.value;
  topText.style.fontFamily = selectedFont;
  btnText.style.fontFamily = selectedFont;
});
//  tamaño de letra seleccionado
const size = document.getElementById("size");
function applyFontSize() {
  const selectedFontSize = size.value + "px";
  topText.style.fontSize = selectedFontSize;
  btnText.style.fontSize = selectedFontSize;
}
size.addEventListener("input", applyFontSize);
//alineacion texto
const btnIzq = document.getElementById("izq");
btnIzq.addEventListener("click", () => {
  topText.style.textAlign = "left";
  btnText.style.textAlign = "left";
});
const btnDer = document.getElementById("der");
btnDer.addEventListener("click", () => {
  topText.style.textAlign = "right";
  btnText.style.textAlign = "right";
});
const btnCentral = document.getElementById("central");
btnCentral.addEventListener("click", () => {
  topText.style.textAlign = "center";
  btnText.style.textAlign = "center";
});
//color texto
const colorText = document.getElementById("color-text");
const colorTextSpan = document.getElementById("color-text-span");
colorText.addEventListener("input", () => {
  const selectedColor = colorText.value;
  topText.style.color = selectedColor;
  btnText.style.color = selectedColor;
  colorTextSpan.textContent = selectedColor;
});
//<<<<<<<<<<<<<<<cambia de color el fondo de los textos>>>>>>>>>>>>>
const fondoText = document.getElementById("fondo-text");
const fondoTextSpan = document.getElementById("fondo-text-span");
fondoText.addEventListener("input", () => {
  const selectedColor = fondoText.value;
  topText.style.backgroundColor = selectedColor;
  btnText.style.backgroundColor = selectedColor;
  fondoTextSpan.textContent = selectedColor;
});
//<<<<<<<<<<<poner fondo transparente>>>>>>>>>>>>
const checkTransparente = document.getElementById("check-transparente");
checkTransparente.addEventListener("change", () => {
  if (checkTransparente.checked) {
    topText.style.backgroundColor = "transparent";
    btnText.style.backgroundColor = "transparent";
  } else {
    topText.style.backgroundColor = "";
    btnText.style.backgroundColor = "";
  }
});
//<<<<<<<<<<<contorno textos>>>>>>>>>>>>
const btnNinguno = document.getElementById("btn-ninguno");
btnNinguno.addEventListener("click", () => {
  topText.classList.remove("contorno-claro");
  topText.classList.remove("contorno-oscuro");
  btnText.classList.remove("contorno-claro");
  btnText.classList.remove("contorno-oscuro");
  btnText.classList.add("contorno-ninguno");
  topText.classList.add("contorno-ninguno");
});
const btnClaro = document.getElementById("btn-claro");
btnClaro.addEventListener("click", () => {
  topText.classList.remove("contorno-ninguno");
  topText.classList.remove("contorno-oscuro");
  btnText.classList.remove("contorno-ninguno");
  btnText.classList.remove("contorno-oscuro");
  btnText.classList.add("contorno-claro");
  topText.classList.add("contorno-claro");
});
const btnOscuro = document.getElementById("btn-oscuro");
btnOscuro.addEventListener("click", () => {
  topText.classList.remove("contorno-claro");
  topText.classList.remove("contorno-ninguno");
  btnText.classList.remove("contorno-claro");
  btnText.classList.remove("contorno-ninguno");
  btnText.classList.add("contorno-oscuro");
  topText.classList.add("contorno-oscuro");
});
///>>>>>>>>>espaciado>>>>>>>>>>>>>>>>>>
const inputEspaciado = document.getElementById("input-espaciado");
inputEspaciado.addEventListener("input", () => {
  const spacingValue = inputEspaciado.value;
  topText.style.letterSpacing = spacingValue + "px";
  btnText.style.letterSpacing = spacingValue + "px";
});
//>>>>>>>>>>>interlineado>>>>>>>>>>>>>>
const interlineadoSelect = document.getElementById("interlineado");
interlineadoSelect.addEventListener("change", () => {
  const selectedInterlineado = interlineadoSelect.value;
  topText.style.lineHeight = selectedInterlineado;
  btnText.style.lineHeight = selectedInterlineado;
});
//<<<<<<<<<< descargar meme>>>>>>>>>>>>>>>>
const btnDownload = document.getElementById("btn-download");
const meme = document.getElementById("meme");
btnDownload.addEventListener("click", () => downloadMeme());
const downloadMeme = () => {
  domtoimage.toBlob(meme).then(function (blob) {
    window.saveAs(blob, "mi-meme.png");
  });
};

//modo claro, modo oscuro
const preferedColorScheme = window.matchMedia(" (prefers-color-scheme : dark)")
  .matches
  ? "dark"
  : "light";
const slider = document.getElementById("slider");
const setTheme = (theme) => {
  document.documentElement.setAttribute("data-theme", theme);
  localStorage.setItem("theme", theme);
};
slider.addEventListener("click", () => {
  let switchToTheme =
    localStorage.getItem("theme") === "dark" ? "light" : "dark";
  setTheme(switchToTheme);
});
setTheme(localStorage.getItem("theme") || preferedColorScheme);

//cors
const myApi = () => {
  fetch("https://magalila.github.io/generadorDeMemes/")
    .then((res) => res.json())
    .then((imputUrlImg) => {});
};
myApi();
