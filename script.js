//your JS code here. If required.
const imageUrls = [
            'url_to_image_1',
            'url_to_image_2',
            // Add more image URLs as needed
        ];

        const outputDiv = document.getElementById('output');
        const downloadButton = document.getElementById('download-images-button');

        function loadImage(url) {
            return new Promise((resolve, reject) => {
                const img = new Image();
                img.src = url;
                img.addEventListener('load', () => resolve(img));
                img.addEventListener('error', () => reject(new Error(`Failed to load image's URL: ${url}`)));
            });
        }

        downloadButton.addEventListener('click', async () => {
            outputDiv.innerHTML = ''; // Clear existing content

            for (const imageUrl of imageUrls) {
                try {
                    const imgElement = await loadImage(imageUrl);
                    outputDiv.appendChild(imgElement);
                } catch (error) {
                    console.error(error.message);
                }
            }
        });