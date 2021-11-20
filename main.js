var imageUrls = ['https://i.kym-cdn.com/entries/icons/original/000/013/564/doge.jpg',
  'https://etcanada.com/wp-content/uploads/2016/06/58c0500b2ac4c342c6fc4ab096ada150.jpg?quality=80&strip=all&crop=0px%2C21px%2C500px%2C333px&resize=720%2C480',
  'https://wiki.godvillegame.com/images/thumb/7/76/Prap.jpg/298px-Prap.jpg',
  'https://media-cldnry.s-nbcnews.com/image/upload/t_focal-760x428,f_auto,q_auto:best/mpx/2704722219/2021_10/Image_from_iOS_(4)2-lw4e0c.jpg'];
var  gallery = document.querySelector("main");
var imageUrlInput = document.querySelector("input");
var addImageButton = document.querySelector("button");

addImageButton.addEventListener('click', function () {
  if (imageUrlInput.value !== '') {
    console.log(imageUrlInput.value);
    imageUrls.push(imageUrlInput.value);
  }
  imageUrlInput.value = '';
  updateGallery();
});

function updateGallery () {
  gallery.innerHTML = '';
  for (var i = 0; i<imageUrls.length; i++) {
    var imageElement = document.createElement("img");
    imageElement.className = "gallery-image";
    imageElement.src = imageUrls[i];
    gallery.appendChild(imageElement);
  }
}

updateGallery()
