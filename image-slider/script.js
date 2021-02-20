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

function loadPhoto(photoNumber = 0) {
  if (photoNumber > data.length - 1) {
    currentPhoto = 0;
  } else if (photoNumber < 0) {
    currentPhoto = data.length - 1;
  } else {
    currentPhoto = photoNumber;
  }

  $("#image")
    .attr("src", data[currentPhoto].photo)
    .attr("alt", data[currentPhoto].title);
  $("#image-title").text(data[currentPhoto].title);
  $("#image-desc").text(data[currentPhoto].description);
  $(".thumbnails li[data-id]").removeClass("active");
  $(".thumbnails li[data-id='" + currentPhoto + "']").addClass("active");
}

function loadThumbnails() {
  const $thumbnails = $(".thumbnails");

  for (let i = 0; i < data.length; i++) {
    $thumbnails.append(
      `<li data-id="${i}"><img class="thumbnail-img" src="${data[i].photo}" alt="${data[i].title}"></li>`
    );
  }
}

loadThumbnails();
loadPhoto(currentPhoto);

/* Events */
$(".slide-left-button").click((event) => {
  event.preventDefault();
  loadPhoto(currentPhoto + 1);
});

$(".slide-right-button").click((event) => {
  event.preventDefault();
  loadPhoto(currentPhoto + 1);
});

$(".thumbnail-img").on("click", (event) => {
  let id = $(event.target).parent("li").data("id");
  loadPhoto(id);
});
