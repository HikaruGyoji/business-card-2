console.clear();

const CARD = document.querySelector(".card-wrapper");
const CARD_URA = document.querySelector(".card-wrapper-ura");

// CARDの初期位置
const INITIAL_CARD_POSITION = {
  "--ratiox": 0.5,
  "--ratioy": 0.5,
  "--mx": "50%",
  "--my": "50%",
  "--rx": "0deg",
  "--ry": "0deg",
  "--pos": "50% 50%",
  "--posx": "50%",
  "--posy": "50%",
  "--hyp": 0,
};

// CARD_URAの初期位置
const INITIAL_CARD_URA_POSITION = {
  "--ratiox": 0.5,
  "--ratioy": 0.5,
  "--mux": "50%",
  "--muy": "50%",
  "--rux": "0deg",
  "--ruy": "0deg",
  "--posu": "55% 50%",
  "--posux": "50%",
  "--posuy": "50%",
  "--huyp": 0,
};

// CARDとCARD_URAの位置をリセットする関数
function resetCardPositions() {
  setCardPosition(CARD, INITIAL_CARD_POSITION);
  setCardPosition(CARD_URA, INITIAL_CARD_URA_POSITION);
}

// カード要素の位置をセットする関数
function setCardPosition(cardElement, positions) {
  Object.entries(positions).forEach(([property, value]) => {
    cardElement.style.setProperty(property, value);
  });
}

const UPDATE = ({ x, y }) => {
  const BOUNDS = CARD.getBoundingClientRect();
  const pointerX = x - BOUNDS.x;
  const pointerY = y - BOUNDS.y;
  const ratioX = pointerX / BOUNDS.width;
  const ratioY = pointerY / BOUNDS.height;
  CARD.style.setProperty("--ratiox", ratioX);
  CARD.style.setProperty("--ratioy", ratioY);

  const mX = ratioX * 100;
  const mY = ratioY * 100;
  CARD.style.setProperty("--mx", `${mX}%`);
  CARD.style.setProperty("--my", `${mY}%`);

  const rX = (ratioX - 0.5) * -30;
  const rY = (ratioY - 0.5) * 50;
  CARD.style.setProperty("--rx", `${rX}deg`);
  CARD.style.setProperty("--ry", `${rY}deg`);

  const posX = 50 + (ratioX - 0.5) * 28;
  const posY = 50 + (ratioY - 0.5) * 28;
  CARD.style.setProperty("--pos", `${posX}% ${posY}%`);
  CARD.style.setProperty("--posx", `${posX}%`);
  CARD.style.setProperty("--posy", `${posY}%`);

  const hyp =
    (Math.sqrt(Math.pow(ratioX - 0.5, 2) + Math.pow(ratioY - 0.5, 2)) * 10) / 7;
  CARD.style.setProperty("--hyp", hyp);
};

document.body.addEventListener("pointermove", UPDATE);

const UPDATE_URA = ({ x, y }) => {
  const BOUNDS = CARD_URA.getBoundingClientRect();
  const pointerX = x - BOUNDS.x;
  const pointerY = y - BOUNDS.y;
  const ratioX = pointerX / BOUNDS.width;
  const ratioY = pointerY / BOUNDS.height;
  CARD_URA.style.setProperty("--ratiox", ratioX);
  CARD_URA.style.setProperty("--ratioy", ratioY);

  const mX = ratioX * 100;
  const mY = ratioY * 100;
  CARD_URA.style.setProperty("--mux", `${mX}%`);
  CARD_URA.style.setProperty("--muy", `${mY}%`);

  const rX = (ratioX - 0.5) * -30;
  const rY = (ratioY - 0.5) * 50;
  CARD_URA.style.setProperty("--rux", `${rX}deg`);
  CARD_URA.style.setProperty("--ruy", `${rY}deg`);

  const posX = 550 + (ratioX - 0.5) * 28;
  const posY = 50 + (ratioY - 0.5) * 28;
  CARD_URA.style.setProperty("--posu", `${posX}% ${posY}%`);
  CARD_URA.style.setProperty("--posux", `${posX}%`);
  CARD_URA.style.setProperty("--posuy", `${posY}%`);

  const hyp =
    (Math.sqrt(Math.pow(ratioX - 0.5, 2) + Math.pow(ratioY - 0.5, 2)) * 10) / 7;
  CARD_URA.style.setProperty("--huyp", hyp);
};

document.body.addEventListener("pointermove", UPDATE_URA);

function toggleCard() {
  const cardWrapper = document.getElementById("cardWrapper");
  const cardWrapperUra = document.getElementById("cardWrapperUra");

  if (cardWrapper.style.display !== "none") {
    cardWrapper.style.display = "none";
    cardWrapperUra.style.display = "block";
  } else {
    cardWrapper.style.display = "block";
    cardWrapperUra.style.display = "none";
  }
  resetCardPositions();
}
