
function getImages(url) {
    return [
        {
            "annotation": "https://source.roboflow.com/arRagmpkRzqLfrKDYQ18/KGkTKFT1XQHSKSpA9UxG/annotation-faces.png?v=2022-10-13T18:48:35.237Z",
            "img": "https://source.roboflow.com/arRagmpkRzqLfrKDYQ18/KGkTKFT1XQHSKSpA9UxG/thumb.jpg"
        },
        {
            "annotation": "https://source.roboflow.com/arRagmpkRzqLfrKDYQ18/HqcuA2gqP5WhWi4Bqx1A/annotation-faces.png?v=2022-10-13T18:48:34.546Z",
            "img": "https://source.roboflow.com/arRagmpkRzqLfrKDYQ18/HqcuA2gqP5WhWi4Bqx1A/thumb.jpg"
        }
    ];
}

function setupHoverActions(thumbnail) {
    const originalThumbnail = thumbnail.cloneNode(true);

    const url = "https://universe.roboflow.com/" + thumbnail.parentNode.parentNode.getAttribute('data-href');
    const images = getImages(url);

    const previewContainer = document.createElement('div');
    previewContainer.className = 'relative mx-auto h-24 w-24 cursor-pointer rounded preview-container';
    previewContainer.style.width = '326px';
    previewContainer.style.height = '128px';

    const imageElement = document.createElement('img');
    imageElement.className = 'absolute h-full w-full rounded object-cover preview-image';
    imageElement.src = images[0].img;

    const overlayElement = document.createElement('img');
    overlayElement.className = 'absolute h-full w-full rounded object-cover preview-image overlay-image';
    overlayElement.src = images[0].annotation;

    previewContainer.appendChild(imageElement);
    previewContainer.appendChild(overlayElement);

    let imageIndex = 0;
    let intervalId;

    function changeImage() {
        imageIndex = (imageIndex + 1) % images.length;
        imageElement.src = images[imageIndex].img;
        overlayElement.src = images[imageIndex].annotation;
    }

    thumbnail.addEventListener('mouseenter', function () {
        imageIndex = 0;
        imageElement.src = images[imageIndex].img;
        overlayElement.src = images[imageIndex].annotation;
        thumbnail.parentNode.replaceChild(previewContainer, thumbnail);
        intervalId = setInterval(changeImage, 1000);
    });

    previewContainer.addEventListener('mouseleave', function () {
        clearInterval(intervalId);
        previewContainer.parentNode.replaceChild(originalThumbnail, previewContainer);
        setupHoverActions(originalThumbnail);
    });
}

function injectAnimatedThumbnail() {
    const thumbnailDivs = document.querySelectorAll('.thumbnail');
    thumbnailDivs.forEach(thumbnail => {
        setupHoverActions(thumbnail);
    });
}

const styles = `
.preview-container {
  position: relative;
  width: 326px;
  height: 128px;
  cursor: pointer;
  border-radius: 8px;
  overflow: hidden;
}

.preview-image {
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: opacity 0.5s ease-in-out;
}

.overlay-image {
  opacity: 0.5;
}
`;

const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = styles;
document.head.appendChild(styleSheet);

injectAnimatedThumbnail();
