export default function initNumeros() {
  function animacaoNumeros() {
    const numeros = document.querySelectorAll("[data-numero]");
    const numeroServico = document.querySelectorAll("[data-numeroservico]");

    numeros.forEach((numero) => {
      const total = +numero.innerText;
      const incremento = Math.floor(total / 100);

      let start = 0;
      const timer = setInterval(() => {
        start = start + incremento;
        numero.innerText = start;
        if (start > total) {
          numero.innerText = total;
          clearInterval(timer);
        }
      }, 25 * Math.random());
    });

    numeroServico.forEach((numero) => {
      const total = +numero.innerText;
      // const incremento = Math.floor(total / 1000);

      let start = 0;
      const timer = setInterval(() => {
        start++;
        numero.innerText = start;
        if (start > total) {
          numero.innerText = total;
          clearInterval(timer);
        }
      }, 200);
    });
  }

  const observeTarget = document.querySelector(".numeros");
  function handleMutation(mutation) {
    if (mutation[0].target.classList.contains("ativo")) {
      observer.disconnect();
      animacaoNumeros();
    }
  }

  const observer = new MutationObserver(handleMutation);

  observer.observe(observeTarget, { attributes: true });
}
