const openRad = document.querySelector("#open");
const closeRad = document.querySelector("#close")
const radial = document.querySelector(".radial");


function open() {
    radial.style.display = "flex";
    openRad.style.display = "none";
    closeRad.style.display = "block";
}

function close(){
    radial.style.display = "none";
    openRad.style.display = "block";
    closeRad.style.display = "none";

}


openRad.addEventListener("click", () => {
    open();
})

closeRad.addEventListener("click", () => {
    close();
})