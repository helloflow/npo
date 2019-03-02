const heroSlider = new Flickity(".hero", {
  wrapAround: true,
  arrowShape: {
    x0: 10,
    x1: 60,
    y1: 50,
    x2: 63,
    y2: 47,
    x3: 17
  }
});

const laneLists = document.querySelectorAll(".lane-list");
const laneSliders = [];
laneLists.forEach((laneList, index) => {
  laneSliders[index] = new Flickity(laneList, {
    groupCells: true,
    pageDots: false,
    cellAlign: "left",
    contain: true,
    arrowShape: {
      x0: 10,
      x1: 60,
      y1: 50,
      x2: 63,
      y2: 47,
      x3: 17
    }
  });
});
