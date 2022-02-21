const jpeg = [
  "001.jpeg",
  "002.jpeg",
  "003.jpeg",
  "004.jpeg",
  "005.jpeg",
  "006.jpeg",
  "007.jpeg",
  "008.jpeg",
];
const chosenImg = jpeg[parseInt(Math.random() * jpeg.length)]; //이미지랜덤고르기
const imgUrl = `url(../img/${chosenImg}) no-repeat`;
document.body.style.background = imgUrl;
