$(document).ready(function () {
  $(".banner-slick").slick({
    dots: false,
    arrows: false,
  });
});

document
  .querySelector(".button-download-psd")
  .addEventListener("click", function () {
    var url = "../img/file.png";
    var filename = "file.png";
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);
    xhr.responseType = "blob";
    xhr.onload = function () {
      var blob = xhr.response;
      var a = document.createElement("a");
      var url = window.URL.createObjectURL(blob);
      a.href = url;
      a.download = filename;
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
    };
    xhr.send();
  });
