class wallPaper {
  constructor(message, color, url, vPos, hPos) {
    this.message = message;
    this.color = color;
    this.url = url;
    this.vPos = vPos;
    this.hPos = hPos;
  }
}

function hPos(wallPaper) {
  if (wallPaper.hPos === "left") {
    return "justify-content-start";
  } else if (wallPaper.hPos === "center") {
    return "justify-content-center";
  } else if (wallPaper.hPos === "right") {
    return "justify-content-end";
  }
}

function vPos(wallPaper) {
  if (wallPaper.vPos === "top") {
    return "align-items-start";
  } else if (wallPaper.vPos === "center") {
    return "align-items-center";
  } else if (wallPaper.vPos === "bottom") {
    return "align-items-end";
  }
}

function createWallPaper(wallPaper) {
  let container = document.createElement("div");
  container.classList.add("container", "d-flex", "justify-content-center");

  let img_container = document.createElement("div");
  img_container.classList.add(
    "vh-75",
    "p-md-5",
    "p-3",
    "my-5",
    "col-md-8",
    "col-12",
    "d-flex",
    "img",
    hPos(wallPaper),
    vPos(wallPaper)
  );

  let url = "url(" + wallPaper.url + ")"

  img_container.style.backgroundImage = url

  let text_container = document.createElement("div");
  text_container.classList.add("col-8");

  let message = document.createElement("h4");
  message.style.color = "#" + wallPaper.color
  message.classList.add("message");

  message.innerHTML = wallPaper.message;

  text_container.append(message);
  img_container.append(text_container);

  container.append(img_container);

  return container;
}

let img1 = new wallPaper(
  "Perfection is achieved, not when there is nothing more to add, but when there is nothing left to take away. - Antoine de Saint",
  "1B4F72",
  "https://cdn.pixabay.com/photo/2020/06/12/03/06/magnifying-glass-5288877__340.jpg",
  "top",
  "right"
);

let img2 = new wallPaper(
  "The scientist discovers a new type of material or energy and the engineer discovers a new use for it. - Gordon Lindsay Glegg",
  "007bff",
  "https://cdn.pixabay.com/photo/2018/02/23/04/38/laptop-3174729_1280.jpg",
  "center",
  "left"
);

let img3 = new wallPaper(
  "Scientists study the world as it is, engineers create the world that never has been. - Theodore von Karman",
  "ecf0f1",
  "https://cdn.pixabay.com/photo/2017/05/10/19/29/robot-2301646_1280.jpg",
  "center",
  "center"
);


document.getElementById("bg").append(createWallPaper(img1));
document.getElementById("bg").append(createWallPaper(img2));
document.getElementById("bg").append(createWallPaper(img3));
