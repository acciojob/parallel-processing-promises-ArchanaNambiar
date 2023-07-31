//your JS code here. If required.
const output = document.getElementById("output");
const btn = document.getElementById("download-images-button");

const images = [
  { url: "https://picsum.photos/id/237/200/300" },
  { url: "https://picsum.photos/id/238/200/300" },
  { url: "https://picsum.photos/id/239/200/300" },
];
// Function to download an image using Fetch API
function downloadImage(image) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = () => reject(new Error(`Failed to load image's URL: ${image.url}`));
    img.src = image.url;
  });
}

// Function to display the images on the webpage
function displayImages(imagesArray) {
  output.innerHTML = "";
  imagesArray.forEach(image => {
    output.appendChild(image);
  });
}

// Function to download and display images on button click
btn.addEventListener("click", () => {
  const imagePromises = images.map(image => downloadImage(image));

  Promise.all(imagePromises)
    .then(imagesArray => {
      displayImages(imagesArray);
    })
    .catch(error => {
      console.error("An error occurred:", error);
    });
});