console.log("url to image QR genrator")

// const urlex = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=example` 

const screen = document.getElementById('screen')
const btn = document.getElementById('btn')
btn.addEventListener('click',()=>{
    const qrImage = document.getElementById('qrImage')
    const text = document.getElementById('text')
    qrImage.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=` + screen.value; 
    text.innerText = screen.value
})
