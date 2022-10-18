import {Scanner} from "./Scanner.js";

const ua = navigator.userAgent;
const isMobile = /Android|webOS|iPhone|iPad|iPod/i.test(ua);

const video = document.querySelector("#video");
const cameraButton = $('#open-camera');

// check if browser / device supports Navigator API
if ('mediaDevices' in navigator && 'getUserMedia' in navigator.mediaDevices) {
    console.log("Device/Browser supports navigator");

    // contraints (config) for opening camera
    const constraints = {
        video: isMobile ? {
            facingMode: {
                exact: 'environment'
            }
        } : true,
        audio: false
    }

    const scanner = new Scanner();

    // start / stop scanning (+recording)
    cameraButton.on("click", () => {
        if (scanner.isScanning) {
            cameraButton.html("Open Camera");
            scanner.stopScanning();
            stopVideo();
        } else {
            cameraButton.html("Close Camera");
            navigator.mediaDevices.getUserMedia(constraints).then((stream) => {
                video.srcObject = stream;
                scanner.startScanning();
            })
        }
    })
}

function stopVideo(){
    video.srcObject.getTracks().forEach((track) => {
        track.stop();
    })
}