# Dynamic Image Carousel on Hover - Chrome Extension

This Chrome extension dynamically fetches and displays images in a carousel when hovering over thumbnails on [universe.roboflow.com](https://universe.roboflow.com). The extension enhances the user experience by providing a preview of images linked from the thumbnails.

## Features

- Fetches images dynamically from linked pages.
- Displays images in a carousel on hover.
- Easy to install and use.

## Installation

1. **Clone or Download the Repository**

   Clone the repository to your local machine or download the ZIP file and extract it.

   ```bash
   git clone https://github.com/your-username/your-repo-name.git

	2.	Open Chrome and Go to Extensions
Open Chrome and navigate to chrome://extensions/.
	3.	Enable Developer Mode
Enable “Developer mode” by toggling the switch in the top right corner.
	4.	Load Unpacked Extension
Click “Load unpacked” and select the directory where you cloned or extracted the repository.
	5.	Extension Installed
The extension should now be installed and active in your browser.

Usage

	1.	Navigate to Roboflow Universe
Open Chrome and navigate to universe.roboflow.com.
	2.	Hover Over Thumbnails
Hover over the thumbnails on the webpage. The extension will dynamically fetch and display images in a carousel, providing an animated preview of the linked images.

Development

Files

	•	manifest.json: Defines the extension’s metadata and permissions.
	•	content.js: Contains the JavaScript code that fetches and displays the images.
	•	styles.css: Contains the CSS styles for the image preview container.
	•	background.js: (Optional) Contains background scripts if needed.

Key Functions

	•	getImages(url): Fetches images dynamically from the provided URL.
	•	setupHoverActions(thumbnail): Sets up the hover actions for each thumbnail.
	•	injectAnimatedThumbnail(): Injects the hover functionality into the webpage.
