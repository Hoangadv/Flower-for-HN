function showMessage() {
  const flower = document.getElementById("flower");
  const message = document.getElementById("message");

  flower.style.display = "block";

  setTimeout(() => {
    message.style.display = "block";
  }, 2000);
}
