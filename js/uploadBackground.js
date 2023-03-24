const uploadImg = document.getElementById("imageUpload");
const imageBG = document.querySelector(".background");

//
uploadImg.addEventListener("change", async (e) => {
  let img = e.target.files[0];

  let imgCompressed = await compressImage(img, 50); // set to 5%
  let compSize = atob(imgCompressed.split(",")[1]).length;
console.log(imgCompressed)
  let reader = new FileReader();

  reader.onloadend = function () {
    imageBG.style.backgroundImage = "url(" + imgCompressed + ")";
    localStorage.setItem("bgImage", JSON.stringify(imgCompressed));
  };

  if (img) reader.readAsDataURL(img);
  else imageBG.style.backgroundImage = "";

});


//
async function compressImage(blobImg, percent) {
  let bitmap = await createImageBitmap(blobImg);
  let canvas = document.createElement("canvas");
  let ctx = canvas.getContext("2d");
  canvas.width = bitmap.width;
  canvas.height = bitmap.height;

  ctx.drawImage(bitmap, 0, 0);
  let dataUrl = canvas.toDataURL("image/jpeg", percent / 100);
  return dataUrl;
}

//
const bgImage = JSON.parse(localStorage.getItem("bgImage"));

if (bgImage) {
  imageBG.style.backgroundImage = "url(" + bgImage + ")";
}
