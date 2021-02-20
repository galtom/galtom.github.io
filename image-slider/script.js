let data = [
  {
    photo: "images/1.jpg",
    title: "Első kép",
    description: "Ez egy szép leírása az 1-es képnek",
  },
  {
    photo: "images/2.jpg",
    title: "Második kép",
    description: "Ez egy szép leírása az 2-es képnek",
  },
  {
    photo: "images/3.jpg",
    title: "Harmadik kép",
    description: "Ez egy szép leírása az 3-es képnek",
  },
  {
    photo: "images/4.jpg",
    title: "Negyedik kép",
    description: "Ez egy szép leírása az 4-es képnek",
  },
];

let currentPhoto = 0;

const loadPhoto = (photoNumber = 0) => {
  if (photoNumber > data.length - 1) {
    currentPhoto = 0;
  } else if (photoNumber < 0) {
    currentPhoto = data.length - 1;
  }

  $("#image").attr("src", data[currentPhoto].photo);
  $("#image-title").text(data[currentPhoto].title);
  $("#image-desc").text(data[currentPhoto].description);
};

loadPhoto(currentPhoto);

/* Events */
$(".slide-left-button").click((event) => {
  event.preventDefault();
  currentPhoto--;
  loadPhoto(currentPhoto);
});

$(".slide-right-button").click((event) => {
  event.preventDefault();
  currentPhoto++;
  loadPhoto(currentPhoto);
});
