// create new detector
/*
const barcodeDetector = new BarcodeDetector({
    formats: ["qr_code"],
});
*/

var constraints = {
    video: true,
    audio: false
}

const video = document.querySelector("#video");

setInterval(() => {
    qrScan();
}, 1000)

// DO WORK
$("#open-camera").on("click", () => {
    navigator.mediaDevices.getUserMedia(constraints).then((stream) => {
        video.srcObject = stream;
        console.log(stream);
    })
})

function qrScan(data){
    let canvas = document.createElement('canvas');
    let video = document.getElementById('video');

    canvas.width = 500;
    canvas.height = 500;

    let ctx = canvas.getContext('2d');
    ctx.drawImage( video, 0, 0, canvas.width, canvas.height );

    //let image = canvas.toDataURL('image/jpeg');

    // to Clamped array process
    const imageData = ctx.getImageData(0,0,500, 500);

    const result = jsQR(imageData.data, 500, 500);
    console.log(result);
}