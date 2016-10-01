/* v3.0 */

function setCountDown(id, seconds) {
    var millis = (seconds * 60) * 1000;
    var interval;
    var timer = document.getElementById(id);
    function displaytimer(){
        var mins = Math.floor((millis % 36e5) / 6e4),
            secs = Math.floor((millis % 6e4) / 1000);
        if ( secs < 10 ) {
            secs = '0' + secs;
        };
        if ( mins < 10 ) {
            mins = '0' + mins;
        };
        timer.innerHTML = '00:'+mins+':'+secs;
    };

    interval = setInterval(function(){
        millis -= 1000;
        if ( millis < 1000 ) {
            clearInterval(interval);
        };
        displaytimer();
    }, 10);
};

function getDevice() {
    var device = "Android";
    if ( /Windows Phone/.test(navigator.userAgent) ) {
        device = 'Windows Phone';
    } else if ( /iPad/.test(navigator.userAgent) ) {
        device = 'iPad';
    } else if ( /iPhone/.test(navigator.userAgent) ) {
        device = 'iPhone';
    } else if ( /iPod/.test(navigator.userAgent) ) {
        device = 'iPod';
    };
    return device;
};

function setDevice(cls) {
    if ( !cls ) {
        cls = "device";
    };
    var devices = document.getElementsByClassName(cls);
    for ( var x in devices ) {
        devices[x].innerHTML = getDevice();
    };
};

function parseText(text, variable, str) {
    var reg = new RegExp('__' + variable + '__', "g");
    return text.replace(reg, str);
};

function fade(element) {
    var op = 1;  // initial opacity
    var timer = setInterval(function () {
        if (op <= 0.1){
            clearInterval(timer);
            element.style.display = 'none';
        }
        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op -= op * 0.2;
    }, 20);
};

function closeOverlay() {
    var overlay = document.getElementById("overlay-backdrop");
    if ( overlay ) {
        var overlayClose = document.getElementById("overlay-close");
        if ( overlayClose ) {
            overlayClose.onclick = function() {
                fade(overlay);
            };
        };
        var btns = document.getElementsByClassName("overlay-btn");
        if ( btns.length ) {
            for ( b in btns ) {
                btns[b].onclick = function() {
                    fade(overlay);
                };
            };
        };
    };
};

window.addEventListener("load", function() {
    closeOverlay();
}, false);
