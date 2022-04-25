const data = [
  {
    name: "Jennifer",
    img: "../../assets/images/pets-jennifer.png",
    type: "Dog",
    breed: "Labrador",
    description:
      "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",
    age: "2 months",
    inoculations: ["none"],
    diseases: ["none"],
    parasites: ["none"],
  },
  {
    name: "Sophia",
    img: "../../assets/images/pets-sophia.jpg",
    type: "Dog",
    breed: "Shih tzu",
    description:
      "Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",
    age: "1 month",
    inoculations: ["parvovirus"],
    diseases: ["none"],
    parasites: ["none"],
  },
  {
    name: "Woody",
    img: "../../assets/images/pets-woody.png",
    type: "Dog",
    breed: "Golden Retriever",
    description:
      "Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.",
    age: "3 years 6 months",
    inoculations: ["adenovirus", "distemper"],
    diseases: ["right back leg mobility reduced"],
    parasites: ["none"],
  },
  {
    name: "Scarlett",
    img: "../../assets/images/pets-scarlett.png",
    type: "Dog",
    breed: "Jack Russell Terrier",
    description:
      "Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.",
    age: "3 months",
    inoculations: ["parainfluenza"],
    diseases: ["none"],
    parasites: ["none"],
  },
  {
    name: "Katrine",
    img: "../../assets/images/pets-katrine.png",
    type: "Cat",
    breed: "British Shorthair",
    description:
      "Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.",
    age: "6 months",
    inoculations: ["panleukopenia"],
    diseases: ["none"],
    parasites: ["none"],
  },
  {
    name: "Timmy",
    img: "../../assets/images/pets-timmy.png",
    type: "Cat",
    breed: "British Shorthair",
    description:
      "Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.",
    age: "2 years 3 months",
    inoculations: ["calicivirus", "viral rhinotracheitis"],
    diseases: ["kidney stones"],
    parasites: ["none"],
  },
  {
    name: "Freddie",
    img: "../../assets/images/pets-freddie.png",
    type: "Cat",
    breed: "British Shorthair",
    description:
      "Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.",
    age: "2 months",
    inoculations: ["rabies"],
    diseases: ["none"],
    parasites: ["none"],
  },
  {
    name: "Charly",
    img: "../../assets/images/pets-charly.jpg",
    type: "Dog",
    breed: "Jack Russell Terrier",
    description:
      "This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",
    age: "8 years",
    inoculations: ["bordetella bronchiseptica", "leptospirosis"],
    diseases: ["deafness", "blindness"],
    parasites: ["lice", "fleas"],
  },
];

let petsNames = [
  "jennifer",
  "woody",
  "sophia",
  "katrine",
  "timmy",
  "freddie",
  "charly",
  "scarlett",
];

// Make random number

function randomInteger(min, max) {
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}

function randomIntegerArr(countNum) {
  let outArray = [];
  while (outArray.length < countNum) {
    var rand = randomInteger(0, petsNames.length - 1);
    if (outArray.indexOf(rand) === -1) outArray.push(rand);
  }
  return outArray;
}

let randomNumbersArray = randomIntegerArr(petsNames.length);

// Card and Modal classes

class Card {
  constructor({ name, img, ...rest }) {
    this.name = name;
    this.img = img;
  }

  //Cards generator
  generateCard() {
    let template = "";
    let card = document.createElement("div");
    card.className = "card";
    card.setAttribute("data-name", this.name);

    this.img &&
      (template += `<img class="card__image" src=${this.img} alt="pet ${this.name}" >`);

    if (this.name) {
      template += `<p class="card__name">${this.name}</p>`;
    }

    if (this.name) {
      template += `<div class="card__button">`;

      template += `<button class="button button_bordered">Learn more</button>`;

      template += `</div>`;
    }

    card.innerHTML = template;
    return card;
  }
}

class Modal {
  constructor(classes) {
    this.classes = classes;
    this.modal = "";
    this.modalContent = "";
    this.modalCloseBtn = "";
    this.overlay = "";
    this.parent = "";
  }

  buildModal(content) {
    //Parent
    this.parent = this.createDomNode(
      this.parent,
      "div",
      "parent",
      "parent_modal"
    );

    //Overlay
    this.overlay = this.createDomNode(
      this.overlay,
      "div",
      "overlay",
      "overlay_modal"
    );

    //Modal
    this.modal = this.createDomNode(this.modal, "div", "modal", this.classes);

    //Modal content
    this.modalContent = this.createDomNode(
      this.modalContent,
      "div",
      "modal__content"
    );

    //Close button
    this.modalCloseBtn = this.createDomNode(
      this.modalCloseBtn,
      "span",
      "modal__close-icon"
    );

    this.setContent(content);

    this.appendModalElements();

    // Bind Events
    this.bindEvents();

    //Open Modal
    this.openModal();
  }

  createDomNode(node, element, ...classes) {
    node = document.createElement(element);
    node.classList.add(...classes);
    return node;
  }

  setContent(content) {
    if (typeof content === "string") {
      this.modalContent.innerHTML = content;
    } else {
      this.modalContent.innerHTML = "";
      this.modalContent.appendChild(content);
    }
  }

  appendModalElements() {
    this.modal.append(this.modalCloseBtn);
    this.modal.append(this.modalContent);
    this.parent.append(this.overlay);
    this.parent.append(this.modal);
  }

  bindEvents() {
    this.modalCloseBtn.addEventListener("click", this.closeModal);
    this.overlay.addEventListener("click", this.closeModal);
  }

  openModal() {
    document.body.append(this.parent);
    htmlNode.classList.toggle("vertical-scroll-hidden");
  }

  closeModal(e) {
    let classes = e.target.classList;
    if (classes.contains("overlay") || classes.contains("modal__close-icon")) {
      document.querySelector(".parent").remove();
      htmlNode.classList.remove("vertical-scroll-hidden");
    }
  }
}

class CardModal extends Modal {
  constructor(
    classes,
    {
      name,
      img,
      type,
      breed,
      description,
      age,
      inoculations,
      diseases,
      parasites,
    }
  ) {
    super(classes);
    this.name = name;
    this.img = img;
    this.type = type;
    this.breed = breed;
    this.description = description;
    this.age = age;
    this.inoculations = inoculations;
    this.diseases = diseases;
    this.parasites = parasites;
  }

  //Cards content generator
  generateContent() {
    let template = "";
    let card = document.createElement("div");
    card.className = "card-content";

    this.img &&
      (template += `<img class="modal__image" src=${this.img} alt="pet ${this.name}" >`);

    if (
      this.name ||
      this.type ||
      this.breed ||
      this.age ||
      this.inoculations ||
      this.diseases ||
      this.parasites
    ) {
      template += `<div class="card__content">`;

      if (this.name) {
        template += `<h3 class="content__title">${this.name}</h3>`;
      }

      if (this.type || this.breed) {
        template += `<h4 class="content__subtitle">${this.type} - ${this.breed}</h4>`;
      }

      if (this.description) {
        template += `<p class="content__description">${this.description}</p>`;
      }

      if (this.age || this.inoculations || this.diseases || this.parasites) {
        template += `<ul class="content__pets-list">`;

        this.age &&
          (template += `<li class="pets-list_age"><span class="bold-styled">Age: </span>${this.age}</li>`);

        this.inoculations &&
          (template += `<li class="class="pets-list_inoculations""><span class="bold-styled">Inoculations: </span>${this.inoculations}</li>`);

        this.diseases &&
          (template += `<li class="pets-list_deseases"><span class="bold-styled">Diseases: </span>${this.diseases}</li>`);

        this.parasites &&
          (template += `<li class="pets-list_parasites"><span class="bold-styled">Parasites: </span>${this.parasites}</li>`);

        template += `</ul>`;
      }
      template += `</div>`;
    }

    card.innerHTML = template;
    return card;
  }

  renderModal() {
    let content = this.generateContent();
    super.buildModal(content);
  }
}

window.onload = function () {
  // Render Popups
  if (data) {
    renderPopupsToDom();
  }
};

const renderPopupsToDom = () => {
  let cardsCount;

  if (window.matchMedia("(min-width: 1280px)").matches) {
    cardsCount = 3;
  } else if (window.matchMedia("(min-width: 768px)").matches) {
    cardsCount = 2;
  } else if (window.matchMedia("(min-width: 320px)").matches) {
    cardsCount = 1;
  }

  ITEM_ACTIVE.innerHTML = "";
  for (let i = 0; i < cardsCount; i++) {
    const card = makeCardTemplate(randomNumbersArray[i]);
    ITEM_ACTIVE.appendChild(card);
  }

  cardListGenerate();

  ITEM_LEFT.innerHTML = "";
  for (let i = 0; i < cardsCount; i++) {
    const card = makeCardTemplate(randomNumbersArray[i]);
    ITEM_LEFT.appendChild(card);
  }

  ITEM_RIGHT.innerHTML = "";
  for (let i = 0; i < cardsCount; i++) {
    const card = makeCardTemplate(randomNumbersArray[i]);
    ITEM_RIGHT.appendChild(card);
  }

  addCardClickHandler();
};

const cardListGenerate = () => {
  if (window.matchMedia("(min-width: 1280px)").matches) {
    let randomNum0 = randomNumbersArray[0];
    let randomNum1 = randomNumbersArray[1];
    let randomNum2 = randomNumbersArray[2];

    if (randomNumbersArray.length < 6) {
      randomNumbersArray = randomIntegerArr(petsNames.length);
      if (randomNumbersArray.includes(randomNum0)) {
        randomNumbersArray.splice(randomNumbersArray.indexOf(randomNum0), 1);
      }
      if (randomNumbersArray.includes(randomNum1)) {
        randomNumbersArray.splice(randomNumbersArray.indexOf(randomNum1), 1);
      }
      if (randomNumbersArray.includes(randomNum2)) {
        randomNumbersArray.splice(randomNumbersArray.indexOf(randomNum2), 1);
      }
    } else {
      randomNumbersArray = randomNumbersArray.slice(3);
    }
  } else if (window.matchMedia("(min-width: 768px)").matches) {
    let randomNum0 = randomNumbersArray[0];
    let randomNum1 = randomNumbersArray[1];

    if (randomNumbersArray.length < 6) {
      randomNumbersArray = randomIntegerArr(petsNames.length);
      if (randomNumbersArray.includes(randomNum0)) {
        randomNumbersArray.splice(randomNumbersArray.indexOf(randomNum0), 1);
      }
      if (randomNumbersArray.includes(randomNum1)) {
        randomNumbersArray.splice(randomNumbersArray.indexOf(randomNum1), 1);
      }
    } else {
      randomNumbersArray = randomNumbersArray.slice(2);
    }
  } else if (window.matchMedia("(min-width: 320px)").matches) {
    let randomNum0 = randomNumbersArray[0];

    if (randomNumbersArray.length < 6) {
      randomNumbersArray = randomIntegerArr(petsNames.length);
      if (randomNumbersArray.includes(randomNum0)) {
        randomNumbersArray.splice(randomNumbersArray.indexOf(randomNum0), 1);
      }
    } else {
      randomNumbersArray = randomNumbersArray.slice(1);
    }
  }
  return randomNumbersArray;
};

const renderModalWindow = (content) => {
  let modal = new Modal("cards-modal");
  modal.buildModal(content);
};

const addCardClickHandler = () => {
  document
    .querySelector(".our-friends__layout")
    .addEventListener("click", (e) => {
      if (e.target.closest(".card")) {
        let clickedCardName = e.target
          .closest(".card")
          .getAttribute("data-name");
        let clickedCardData = getClickedData(clickedCardName);

        renderCardModalWindow(clickedCardData);
      }
    });
};

const getClickedData = (name) => {
  return data.find((card) => card.name == name);
};

const renderCardModalWindow = (card) => {
  let modal = new CardModal("cards-modal", card);
  modal.renderModal();
};

//Hamburger
const hamburger = document.querySelectorAll(".hamburger");
const navigation = document.querySelector(".navigation");
const navLinks = document.querySelectorAll(".navigation__link");
const hamburgerMenu = document.querySelector(".hamburger-menu");
const mainHeader = document.querySelector(".header");
const header = document.querySelector(".header__wrapper");
const main = document.querySelector("main");
const footer = document.querySelector(".footer");
const bodyOverlay = document.querySelector(".body-overlay");
const htmlNode = document.querySelector("html");

function toggleMenu() {
  hamburger.forEach((el) => el.classList.toggle("open"));
  hamburgerMenu.classList.toggle("open");
  bodyOverlay.classList.toggle("overlay-grey");
  htmlNode.classList.toggle("vertical-scroll-hidden");
}

hamburger.forEach((el) => el.addEventListener("click", toggleMenu));

function closeMenu(event) {
  if (
    event.target.classList.contains("navigation__link") ||
    event.target.classList.contains("body-overlay")
  ) {
    hamburgerMenu.classList.remove("open");
    hamburger.forEach((el) => el.classList.remove("open"));
    header.classList.remove("open");
    bodyOverlay.classList.remove("overlay-grey");
    htmlNode.classList.remove("vertical-scroll-hidden");
  }
}

navLinks.forEach((el) => el.addEventListener("click", closeMenu));
bodyOverlay.addEventListener("click", closeMenu);

function createMenuOverlay() {
  let menuOverlay = document.createElement("div");
  menuOverlay.classList.add("overlay");
  document.body.append(menuOverlay);
}

//Slider
const BTN_PREV = document.querySelector(".our-friends__arrow_left");
const BTN_NEXT = document.querySelector(".our-friends__arrow_right");
const TRACK = document.querySelector(".our-friends__layout");
const ITEM_LEFT = document.querySelector(".carousel-item_left");
const ITEM_RIGHT = document.querySelector(".carousel-item_right");
const ITEM_ACTIVE = document.querySelector(".carousel-item_active");

const moveLeft = () => {
  TRACK.classList.add("transition-left");
  BTN_PREV.removeEventListener("click", moveLeft);
  BTN_NEXT.removeEventListener("click", moveRight);
};

const moveRight = () => {
  TRACK.classList.add("transition-right");
  BTN_NEXT.removeEventListener("click", moveRight);
  BTN_PREV.removeEventListener("click", moveLeft);
};

BTN_PREV.addEventListener("click", moveLeft);
BTN_NEXT.addEventListener("click", moveRight);

const makeCardTemplate = (index) => {
  let petsNameArray = petsNames[index];

  const card = document.createElement("div");
  card.className = "card";
  card.setAttribute(
    "data-name",
    `${petsNameArray[0].toUpperCase() + petsNameArray.slice(1)}`
  );
  const img = document.createElement("img");
  img.classList.add("card__image");
  img.src = `../../assets/images/pets-${petsNameArray}.png`;
  img.alt = `pet ${petsNameArray[0].toUpperCase() + petsNameArray.slice(1)}`;
  card.append(img);

  const petName = document.createElement("div");
  petName.classList.add("card__name");
  petName.innerHTML = `${
    petsNameArray[0].toUpperCase() + petsNameArray.slice(1)
  }`;
  card.append(petName);

  const cardBtn = document.createElement("div");
  cardBtn.className = "card__button";
  const btnContent = document.createElement("button");
  btnContent.classList.add("button", "button_bordered");
  btnContent.innerHTML = "Learn more";
  cardBtn.append(btnContent);
  card.append(cardBtn);
  return card;
};

TRACK.addEventListener("animationend", (animationEvent) => {
  if (animationEvent.animationName === "move-left") {
    TRACK.classList.remove("transition-left");
    let leftItems = ITEM_LEFT.innerHTML;
    ITEM_ACTIVE.innerHTML = leftItems;
    ITEM_LEFT.innerHTML = "";
    for (let i = 0; i < 3; i++) {
      const card = makeCardTemplate(randomNumbersArray[i]);
      ITEM_LEFT.appendChild(card);
    }
  } else {
    TRACK.classList.remove("transition-right");
    const rightItems = ITEM_RIGHT.innerHTML;
    ITEM_ACTIVE.innerHTML = rightItems;

    ITEM_RIGHT.innerHTML = "";
    for (let i = 0; i < 3; i++) {
      const card = makeCardTemplate(randomNumbersArray[i]);
      ITEM_RIGHT.appendChild(card);
    }
  }

  let cardsCount;

  if (window.matchMedia("(min-width: 1280px)").matches) {
    let randomNum0 = randomNumbersArray[0];
    let randomNum1 = randomNumbersArray[1];
    let randomNum2 = randomNumbersArray[2];
    cardsCount = 3;
    if (randomNumbersArray.length < 6) {
      randomNumbersArray = randomIntegerArr(petsNames.length);
      if (randomNumbersArray.includes(randomNum0)) {
        randomNumbersArray.splice(randomNumbersArray.indexOf(randomNum0), 1);
      }
      if (randomNumbersArray.includes(randomNum1)) {
        randomNumbersArray.splice(randomNumbersArray.indexOf(randomNum1), 1);
      }
      if (randomNumbersArray.includes(randomNum2)) {
        randomNumbersArray.splice(randomNumbersArray.indexOf(randomNum2), 1);
      }
    } else {
      randomNumbersArray = randomNumbersArray.slice(3);
    }
  } else if (window.matchMedia("(min-width: 768px)").matches) {
    let randomNum0 = randomNumbersArray[0];
    let randomNum1 = randomNumbersArray[1];
    cardsCount = 2;
    if (randomNumbersArray.length < 6) {
      randomNumbersArray = randomIntegerArr(petsNames.length);
      if (randomNumbersArray.includes(randomNum0)) {
        randomNumbersArray.splice(randomNumbersArray.indexOf(randomNum0), 1);
      }
      if (randomNumbersArray.includes(randomNum1)) {
        randomNumbersArray.splice(randomNumbersArray.indexOf(randomNum1), 1);
      }
    } else {
      randomNumbersArray = randomNumbersArray.slice(2);
    }
  } else if (window.matchMedia("(min-width: 320px)").matches) {
    let randomNum0 = randomNumbersArray[0];
    cardsCount = 1;
    if (randomNumbersArray.length < 6) {
      randomNumbersArray = randomIntegerArr(petsNames.length);
      if (randomNumbersArray.includes(randomNum0)) {
        randomNumbersArray.splice(randomNumbersArray.indexOf(randomNum0), 1);
      }
    } else {
      randomNumbersArray = randomNumbersArray.slice(1);
    }
  }

  ITEM_LEFT.innerHTML = "";
  for (let i = 0; i < cardsCount; i++) {
    const card = makeCardTemplate(randomNumbersArray[i]);
    ITEM_LEFT.appendChild(card);
  }

  ITEM_RIGHT.innerHTML = "";
  for (let i = 0; i < cardsCount; i++) {
    const card = makeCardTemplate(randomNumbersArray[i]);
    ITEM_RIGHT.appendChild(card);
  }

  BTN_PREV.addEventListener("click", moveLeft);
  BTN_NEXT.addEventListener("click", moveRight);
});
