let myImage = document.querySelector('img');
myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/nerv.jpg') {
      myImage.setAttribute('src', 'images/nerv2.jpg');
    } else {
      myImage.setAttribute('src', 'images/nerv.jpg');
    }
}
