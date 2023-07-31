//your JS code here. If required.
const output = document.getElementById("output");
const btn = document.getElementById("download-images-button");

const images = [
  { url: "https://picsum.photos/id/237/200/300" },
  { url: "https://picsum.photos/id/238/200/300" },
  { url: "https://picsum.photos/id/239/200/300" },
];
// Function to download an image
    function downloadImage(image) {
      return new Promise((resolve, reject) => {
        const imgElement = new Image();
        imgElement.onload = () => resolve(imgElement);
        imgElement.onerror = () => reject(new Error(`Failed to load image's URL: ${image.url}`));
        imgElement.src = image.url;
        imgElement.alt = image.alt;
      });
    }

    // Function to display images on the webpage
    function displayImages(images) {
      const outputDiv = document.getElementById("output");
      for (const image of images) {
        outputDiv.appendChild(image);
      }
    }

    // Function to handle image download
    async function downloadAndDisplayImages() {
      try {
        // Download all images in parallel using Promise.all
        const imagePromises = imageUrls.map(downloadImage);
        const images = await Promise.all(imagePromises);

        // Display the downloaded images on the webpage
        displayImages(images);
      } catch (error) {
        console.error("An error occurred while downloading images:", error);
      }
    }

    // Attach click event to the download button
    const downloadButton = document.getElementById("download-images-button");
    downloadButton.addEventListener("click", downloadAndDisplayImages);
