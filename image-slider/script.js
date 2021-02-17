let data = [
  {
    photo: "images/1.jpg",
    title: "Első kép",
    description: "Ez egy szém leírása az 1-es képnek",
  },
  {
    photo: "images/2.jpg",
    title: "Második kép",
    description: "Ez egy szém leírása az 2-es képnek",
  },
  {
    photo: "images/3.jpg",
    title: "Harmadik kép",
    description: "Ez egy szém leírása az 3-es képnek",
  },
  {
    photo: "images/4.jpg",
    title: "Negyedik kép",
    description: "Ez egy szém leírása az 4-es képnek",
  },
];

let currentPhoto = 0;

const loadPhoto = (photoNumber = 0) => {
  if (photoNumber > data.length) {
    photoNumber = 0;
  } else if (photoNumber < data.length) {
    photoNumber = data.length;
  }

  $("#image").attr("src", data[photoNumber].photo);
  $("#image-title").text(data[photoNumber].title);
  $("#image-desc").text(data[photoNumber].description);
};

loadPhoto(currentPhoto);

/* Events */
$(".slide-left-button").click((event) => {
  currentPhoto--;
  loadPhoto(currentPhoto);
});

$(".slide-right-button").click((event) => {
  currentPhoto--;
  loadPhoto(currentPhoto);
});
