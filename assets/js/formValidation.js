document.addEventListener("DOMContentLoaded", function () {
  const emailInput = document.getElementById("email-input");
  const errorMessage = document.getElementById("email-error");
  const subscribeBtn = document.getElementById("subscribe-button");

  emailInput.addEventListener("input", function () {
    const emailValue = emailInput.value.trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailValue === "") {
      errorMessage.style.display = "none";
      subscribeBtn.disabled = true;
    } else if (!emailPattern.test(emailValue)) {
      errorMessage.textContent = "Inserisci un'email valida!";
      errorMessage.style.display = "block";
      subscribeBtn.disabled = true;
    } else {
      errorMessage.style.display = "none";
      subscribeBtn.disabled = false;
    }
  });
});
