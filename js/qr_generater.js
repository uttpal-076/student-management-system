
// function htmlEncode(value) 
// {
//     return $('<div/>').text(value).html();
// }

// function getParameter_ByName(name, url) {
//     if (!url) url = window.location.href;
//     name = name.replace(/[\[\]]/g, '\\$&');
//     var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
//         results = regex.exec(url);
//     if (!results) return null;
//     if (!results[2]) return '';
//     return decodeURIComponent(results[2].replace(/\+/g, ' '));
// }

function generate(){
    var u_name = getParameterByName('log_name');
    var url_address = 'https://admission-info-c1981.web.app/index.html?log_name=' + u_name;

    let qrcode = new QRCode(document.getElementById("qrcode"),
        {
        text: url_address,
        width: 150,
        height: 150,
        colorDark : "#000000",
        colorLight : "#ffffff",
        correctLevel : QRCode.CorrectLevel.H
        });
    
    document.getElementById("download").style.display = "block";
}

function download_qrcode(){
    let dataUrl = document.querySelector('#qrcode').querySelector('img').src;
    downloadURI(dataUrl, 'qrcode.png');
}

function downloadURI(uri, name) {
    var link = document.createElement("a");
    link.download = name;
    link.href = uri;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    delete link;
  };
