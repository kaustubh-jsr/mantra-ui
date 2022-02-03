const closeAlertBtn = document.querySelector("#example-alert-close");
const alertExample = document.querySelector("#alert-to-close");

const closeExampleAlert = () => {
    alertExample.style.display = "none";
}
closeAlertBtn.addEventListener("click",closeExampleAlert)