let i = 1;

  function girar() {
    i++;
    if (i > 4) i = 1;
    document.getElementById("banner").src = "img/banner" + i + ".jpg";
    setTimeout(girar, 2000); // Llamada recursiva para repetir el cambio
  }