export default function initAccordion() {
    const accordion = document.querySelectorAll(".faq dd");
  
    function abrePergunta(item) {
      item.target.nextElementSibling.classList.toggle("ativo");
      item.target.classList.toggle("ativo");
    }
  
    accordion.forEach((item) => {
      item.addEventListener("click", abrePergunta);
    });
  }