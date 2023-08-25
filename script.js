//your JS code here. If required.
// Array of image URLs to download
const imageUrls = [
  'url_of_image_1',
  'url_of_image_2',
  'url_of_image_3'
  // ... add more image URLs as needed
];

// Function to download an image
function downloadImage(imageUrl) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = () => reject(`Failed to load image's URL: ${imageUrl}`);
    img.src = imageUrl;
  });
}

// Function to display images in the output div
function displayImages(images) {
  const outputDiv = document.getElementById('output');
  outputDiv.innerHTML = '';

  images.forEach((image) => {
    outputDiv.appendChild(image);
  });
}

// Button click event handler
document.getElementById('download-images-button').addEventListener('click', () => {
  const downloadPromises = imageUrls.map(downloadImage);

  Promise.all(downloadPromises)
    .then((downloadedImages) => {
      displayImages(downloadedImages);
    })
    .catch((error) => {
      console.error(error);
    });
});
