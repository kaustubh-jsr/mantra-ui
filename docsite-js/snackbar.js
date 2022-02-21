let toggleBaselineBtn = document.getElementById("toggle-baseline-snackbar");
let toggleLeadingBtn = document.getElementById("toggle-leading-snackbar");
let baselineSnackbar = document.querySelector(".baseline");
let leadingSnackbar = document.querySelector(".leading");
let closeBaselineSnackbar = document.getElementById("demo-baseline-snackbar-close");
let closeLeadingSnackbar = document.getElementById("demo-leading-snackbar-close");

toggleBaselineBtn.addEventListener("click",()=>{
    baselineSnackbar.classList.toggle("show");
    setTimeout(function(){ leadingSnackbar.classList.remove("show");}, 3000);
})
toggleLeadingBtn.addEventListener("click",()=>{
    leadingSnackbar.classList.toggle("show");
    setTimeout(function(){ baselineSnackbar.classList.remove("show");}, 3000);
})


closeBaselineSnackbar.addEventListener("click",()=>{
    baselineSnackbar.classList.remove("show");
}
)
closeLeadingSnackbar.addEventListener("click",()=>{
    leadingSnackbar.classList.remove("show");
}
)