function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({behavior: "smooth"});
    }
}

  const linha1Texto = "Técnico em Informática: a base";
  const linha2Texto = "sólida para a profissão do futuro!";
  const velocidade = 60;
  const delayEntre = 600;
  const delayFinal = 1500;

  const l1 = document.getElementById("linha1");
  const l2 = document.getElementById("linha2");
  const c1 = document.getElementById("cursor1");
  const c2 = document.getElementById("cursor2");

  function digitar(texto, span, cursor, i = 0, callback) {
    cursor.style.display = "inline-block";
    if (i <= texto.length) {
      span.textContent = texto.substring(0, i);
      setTimeout(() => digitar(texto, span, cursor, i + 1, callback), velocidade);
    } else {
      cursor.style.display = "none";
      callback();
    }
  }

  function apagar(texto, span, cursor, i, callback) {
    cursor.style.display = "inline-block";
    if (i >= 0) {
      span.textContent = texto.substring(0, i);
      setTimeout(() => apagar(texto, span, cursor, i - 1, callback), velocidade);
    } else {
      cursor.style.display = "none";
      callback();
    }
  }

  function animar() {
    digitar(linha1Texto, l1, c1, 0, () => {
      setTimeout(() => {
        digitar(linha2Texto, l2, c2, 0, () => {
          setTimeout(() => {
            apagar(linha2Texto, l2, c2, linha2Texto.length, () => {
              setTimeout(() => {
                apagar(linha1Texto, l1, c1, linha1Texto.length, () => {
                  setTimeout(animar, delayEntre);
                });
              }, delayEntre);
            });
          }, delayFinal);
        });
      }, delayEntre);
    });
  }

  animar();