// api

const imageContainer = document.getElementById('image-container');
const loader = document.getElementById('loader');

let photosArray = [];

const count = 10;
const apiKey = 'CaB8J8ztIVTz0KszuFqaz-XlBA1IWugadLWRMjjflTE';
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

let ready = true;
let imagesLoaded = 0;
let totalImages = 0;

function imageLoaded() {
  imagesLoaded++;
  if (magesLoaded === totalImages) {
    ready = true;
  }
  console.log('image');
}

// helper
function setAttributes(element, attributes) {
  for (const key in attributes) {
    element.setAttribute(key, attributes[key]);
  }
}
// end helper

// creaste elements
function displayPhotos() {
  totalImages = photosArray.length;
  photosArray.forEach((photo) => {
    const item = document.createElement('a');
    setAttributes(item, { href: photo.link.html, target: '_blank' });
    const img = document.createElement('img');
    setAttributes(img, {
      src: photo.url.regular,
      title: photo.alt_description,
      alt: photo.alt_description,
    });

    img.addEventListener('load', imageLoaded);
    item.appendChild(img);
    imageContainer.appendChild(item);
  });
}

// get pgotos from unsplash api
async function getPhotos() {
  try {
    const response = await fetch(apiUrl);
    photosArray = await response.json();
    displayPhotos();
  } catch (error) {
    console.log(error);
  }
}

//getPhotos();
window.addEventListener('scroll', (item) => {
  if (
    window.innerHeight + window.scrollY >= document.body.offsetHeight - 1000 &&
    ready
  ) {
    ready = false;
    imagesLoaded = 0;
    getPhotos();
    console.log('triggerd 1');
  }
});
