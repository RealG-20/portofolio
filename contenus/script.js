emailjs.init("daBr7X0e7h1yutWxP");

document.querySelector("form").addEventListener("submit", function (e) {
  e.preventDefault();

  emailjs.sendForm("service_ri74bwt", "template_ecc573j", this).then(
    //emailjs.sendForm("service_ri74bwt", "template_ecc573j", this).then(
    function () {
      let span = document.querySelector("form span");
      span.textContent = "Message envoyé avec succès !";
      span.style.color = "green";
      let inputName = document.getElementById("name");
      inputName.value = "";
      let inputEmail = document.getElementById("email");
      inputEmail.value = "";
      let inputMessage = document.getElementById("message");
      inputMessage.value = "";
    },
    function (error) {
      let span = document.querySelector("form span");
      span.textContent = "Erreur " + error.text;
      span.style.color = "red";
      let inputName = document.getElementById("name");
      inputName.value = "";
      let inputEmail = document.getElementById("email");
      inputEmail.value = "";
      let inputMessage = document.getElementById("message");
      inputMessage.value = "";
    },
  );
});
