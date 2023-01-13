const switchButton = document.querySelector('.switcher-btn').onclick = () => {
    document.querySelector('.color-switcher').classList.toggle('active');
}

let themeButtons = document.querySelectorAll('.theme-buttons');

themeButtons.forEach((color) => {
    color.addEventListener('click', () => {
        let dataColor = color.getAttribute('data-color');
        document.querySelector(':root').style.setProperty('--main-color', dataColor)
    })
})


let imgBox = document.getElementById("imgBox")

let loadFile = function (event) {
    imgBox.style.backgroundImage = "url(" +URL.createObjectURL(event.target.files[0]) + ")";
}


// var logo = document.getElementById("logo");
// var logoUpload = document.getElementById("logo-upload");

// logoUpload.addEventListener("change", function() {
//   var file = this.files[0];
  
//   var reader = new FileReader();
//   reader.onload = function(event) {
//     logo.src = event.target.result;
//   }
  
//   reader.readAsDataURL(file);
// });

// function changeColor(color) {
//   logo.style.filter = "hue-rotate(" + color + "deg)";
// }
