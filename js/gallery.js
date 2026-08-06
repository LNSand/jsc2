/* Name this external file gallery.js */

function upDate(previewPic) {
    console.log('upDate triggered');
    console.log('previewPic alt:', previewPic.alt);
    console.log('previewPic src:', previewPic.src);

    var imageDiv = document.getElementById('image');
    imageDiv.style.backgroundImage = "url('" + previewPic.src + "')";
    imageDiv.textContent = previewPic.alt;
}

function unDo() {
    console.log('unDo triggered');

    var imageDiv = document.getElementById('image');
    imageDiv.style.backgroundImage = "url('')";
    imageDiv.textContent = "Hover or focus over an image below to display here.";
}

// Function called on page load to set tabindex attributes for keyboard access
function addTabFocus() {
    console.log('addTabFocus loaded');

    // Get all images with class 'preview'
    var images = document.querySelectorAll('.preview');

    // For loop to add tabindex="0" to each image
    for (var i = 0; i < images.length; i++) {
        images[i].setAttribute('tabindex', '0');
    }
}