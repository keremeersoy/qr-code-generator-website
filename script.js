const home = document.querySelector(".home")
const generateBtn = document.querySelector(".link-input button")
const urlInput = document.querySelector(".link-input input")
const qrImage = document.querySelector(".generated-qr img")

generateBtn.addEventListener("click", () => {
    home.classList.add("active")
    let urlValue = urlInput.value;
    if(!urlValue) return;
    qrImage.src = `https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${urlValue}`;
})

urlInput.addEventListener("keypress", function(event){
    if(event.key === "Enter"){
        event.preventDefault();
        generateBtn.click();
    }
})
