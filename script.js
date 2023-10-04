
const imageElement = document.getElementById("image");

document.getElementById("imageSelect").addEventListener("change", function () {
    const selectedImage = this.value;
    const imageWrapper = document.getElementById("imageWrapper");

switch (selectedImage) {
    
    case "image1":
        imageElement.src = "https://wallpapercave.com/wp/wp11271728.jpg";
    break;
    
    case "image2":
        imageElement.src = "https://cdn.donmai.us/original/9d/57/9d571ea360a98bb38c4569d5425bc5b9.jpg";
    break;
    
    case "image3":
        imageElement.src = "https://images8.alphacoders.com/114/1141373.jpg";
    break;
    
    case "image4":
        imageElement.src = "https://wallpapers.com/images/hd/artorias-the-abysswalker-1920-x-1040-wallpaper-25il5hsv2j8mfxqx.jpg";
    break;
    
    case "image5":
        imageElement.src = "https://images2.alphacoders.com/663/663017.jpg";
    break;
    }
});