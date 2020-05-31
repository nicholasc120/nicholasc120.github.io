// Get the modal
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("hackathon"),
  img1 = document.getElementById("ignitespeech"),
  img2 = document.getElementById("solarcar"),
  img3 = document.getElementById("me");

var captionText = document.getElementById("caption");
var modalImg = document.getElementById("img01");

img.onclick = function () {
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
};

img1.onclick = img.onclick;
img2.onclick = img.onclick;
img3.onclick = img.onclick;

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};
