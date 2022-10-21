import {Scanner} from "./Scanner.js";
import Calculator from "./Calculator.js";

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
    const calculator = new Calculator();

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

    $("#link").on('click', () => {
        openLink();
    })

    function stopVideo() {
        video.srcObject.getTracks().forEach((track) => {
            track.stop();
        })
    }

    async function openLink() {
        const width = 250;
        const height = 250;
        const left = screen.width / 2 - width / 2;
        const top = screen.height / 2 - height / 2;

        const link = scanner.result.data;

        const win = window.open(
            link,
            'Calculating',
            `width=${width}, height=${height}, top=${top}, left=${left}`,
        );
        const timer = setInterval(() => {
            if (win.closed) {
                clearInterval(timer);
                alert('"Secure Payment" window closed!');
            }
        }, 500);
    }
}

