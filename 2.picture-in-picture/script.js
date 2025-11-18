const videoElement = document.getElementById("video");
const button = document.querySelector(".button");

async function selectMediaStream() {
  try {
    const MediaStream = await navigator.mediaDevices.getDisplayMedia();
    videoElement.srcObject = MediaStream;

    videoElement.onloadedmetadata = () => {
      videoElement.play();
    };
  } catch (error) {
    console.log(error.message);
  }
}

button.addEventListener("click", async () => {
  try {
    button.disabled = true;
    await videoElement.requestPictureInPicture();
  } catch (err) {
    console.log(err);
  }
  button.disabled = false;
});

selectMediaStream();
