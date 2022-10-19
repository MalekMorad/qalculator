//import jsQR from "./libraries/jsQR-master";

export class Scanner{
    interval;
    canvas;
    video;
    isScanning;
    result;

    constructor() {
        this.video = document.getElementById('video');
        const canvas = document.createElement('canvas');
        canvas.width = this.video.width;
        canvas.height = this.video.height;
        canvas.hidden = true;
        this.canvas = canvas;
        this.isScanning = false;
    }

    startScanning(interval = 500){
        this.isScanning = true;
        this.interval = setInterval(() => {
            this.#scan();
        }, interval)
    }

    stopScanning(){
        this.isScanning = false;
        clearInterval(this.interval);
    }

    #scan(){
        // draw frame temporarily into canvas
        const ctx = this.canvas.getContext('2d');
        ctx.drawImage(video, 0, 0, this.canvas.width, this.canvas.height);

        // canvas frame to Clamped array
        const imageData = ctx.getImageData(0, 0, 500, 500);

        const result = jsQR(imageData.data, this.canvas.width, this.canvas.height);

        if(result){
            if(result != this.result){
                $('#link-container');
                $('#link').attr('href',result.data);
                $('#link').html(result.data)
                $('#link-container').css('visibility', 'visible');
            }
            console.log(result);
            this.result = result;
        }
    }
}