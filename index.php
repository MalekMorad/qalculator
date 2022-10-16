<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="style.css" type="text/css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.1/jquery.min.js"></script>
    <script src="libraries/jsQR-master/dist/jsQR.js"></script>
    <script defer rel="script" src="script.js"></script>
    <title>QR - Calculator</title>
</head>
<body>
    <div class="main-container">
        <h1>QR Calculator!</h1>

        <div class="result-container">
            <div id="result"></div>
        </div>

        <button id="open-camera">Open Camera</button>

        <video id="video" autoplay src="" width="500" height="500" onchange="qrScan(this.data)"></video>
    </div>
</body>
</html>