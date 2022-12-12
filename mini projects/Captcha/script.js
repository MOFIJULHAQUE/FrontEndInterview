var captcha;
function generateCaptcha() {
  captcha = Math.round(Math.random() * 1000000);
  document.getElementById("captcha").value = captcha;
}
