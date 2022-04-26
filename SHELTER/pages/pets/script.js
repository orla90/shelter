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

const data2 = [
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
];

const data3 = [
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
];

const petsArray = [];
const petsArrayReverse = [];

let tempArr = [];
for (let i = 0; i < data.length; i++) {
  tempArr.push(data[i]);
}
petsArray.push(tempArr);

tempArr = [];
for (let i = data.length - 1; i >= 0; i--) {
  tempArr.push(data[i]);
}
petsArrayReverse.push(tempArr);

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
  let cardsFirstWrapper = getCardsFirstWrapper();
  let cardsSecondWrapper = getCardsSecondWrapper();
  let cardsThirdWrapper = getCardsThirdWrapper();
  let cardsFourthWrapper = getCardsFourthWrapper();
  let cardsFifthWrapper = getCardsFifthWrapper();
  let cardsSixthWrapper = getCardsSixthWrapper();
  let cardsSeventhWrapper = getCardsSeventhWrapper();
  let cardsEighthWrapper = getCardsEighthWrapper();
  let cardsNinethWrapper = getCardsNinethWrapper();
  let cardsTenthWrapper = getCardsTenthWrapper();
  let cardsEleventhWrapper = getCardsEleventhWrapper();
  let cardsTwelvethWrapper = getCardsTwelvethWrapper();
  let cardsThirteenthWrapper = getCardsThirteenthWrapper();
  let cardsFourteenthWrapper = getCardsFourteenthWrapper();
  let cardsFifteenthWrapper = getCardsFifteenthWrapper();
  let cardsSixteenthWrapper = getCardsSixteenthWrapper();

  generateCard(data).forEach((card) => {
    cardsFirstWrapper.append(card.generateCard());
  });

  generateCard(data2).forEach((card) => {
    cardsSecondWrapper.append(card.generateCard());
  });

  generateCard(data3).forEach((card) => {
    cardsThirdWrapper.append(card.generateCard());
  });

  generateCard(data).forEach((card) => {
    cardsFourthWrapper.append(card.generateCard());
  });

  generateCard(data2).forEach((card) => {
    cardsFifthWrapper.append(card.generateCard());
  });

  generateCard(data3).forEach((card) => {
    cardsSixthWrapper.append(card.generateCard());
  });

  generateCard(data).forEach((card) => {
    cardsSeventhWrapper.append(card.generateCard());
  });

  generateCard(data3).forEach((card) => {
    cardsEighthWrapper.append(card.generateCard());
  });

  generateCard(data3).forEach((card) => {
    cardsNinethWrapper.append(card.generateCard());
  });

  generateCard(data).forEach((card) => {
    cardsTenthWrapper.append(card.generateCard());
  });

  generateCard(data2).forEach((card) => {
    cardsEleventhWrapper.append(card.generateCard());
  });

  generateCard(data3).forEach((card) => {
    cardsTwelvethWrapper.append(card.generateCard());
  });

  generateCard(data).forEach((card) => {
    cardsThirteenthWrapper.append(card.generateCard());
  });

  generateCard(data2).forEach((card) => {
    cardsFourteenthWrapper.append(card.generateCard());
  });

  generateCard(data3).forEach((card) => {
    cardsFifteenthWrapper.append(card.generateCard());
  });

  generateCard(data).forEach((card) => {
    cardsSixteenthWrapper.append(card.generateCard());
  });

  addCardClickHandler();
};

const getCardsWrapper = () => {
  const cardsContainer = document.querySelector(".our-friends__layout");
  cardsContainer.innerHTML = "";
  return cardsContainer;
};

const getCardsFirstWrapper = () => {
  const cardsContainerFirst = document.querySelector(".carousel-item_first");
  cardsContainerFirst.innerHTML = "";
  return cardsContainerFirst;
};

const getCardsSecondWrapper = () => {
  const cardsContainerSecond = document.querySelector(".carousel-item_second");
  cardsContainerSecond.innerHTML = "";
  return cardsContainerSecond;
};

const getCardsThirdWrapper = () => {
  const cardsContainerThird = document.querySelector(".carousel-item_third");
  cardsContainerThird.innerHTML = "";
  return cardsContainerThird;
};

const getCardsFourthWrapper = () => {
  const cardsContainerFourth = document.querySelector(".carousel-item_fourth");
  cardsContainerFourth.innerHTML = "";
  return cardsContainerFourth;
};

const getCardsFifthWrapper = () => {
  const cardsContainerFifth = document.querySelector(".carousel-item_fifth");
  cardsContainerFifth.innerHTML = "";
  return cardsContainerFifth;
};

const getCardsSixthWrapper = () => {
  const cardsContainerSixth = document.querySelector(".carousel-item_sixth");
  cardsContainerSixth.innerHTML = "";
  return cardsContainerSixth;
};

const getCardsSeventhWrapper = () => {
  const cardsContainerSeventh = document.querySelector(
    ".carousel-item_seventh"
  );
  cardsContainerSeventh.innerHTML = "";
  return cardsContainerSeventh;
};

const getCardsEighthWrapper = () => {
  const cardsContainerEighth = document.querySelector(".carousel-item_eighth");
  cardsContainerEighth.innerHTML = "";
  return cardsContainerEighth;
};

const getCardsNinethWrapper = () => {
  const cardsContainerNineth = document.querySelector(".carousel-item_nineth");
  cardsContainerNineth.innerHTML = "";
  return cardsContainerNineth;
};

const getCardsTenthWrapper = () => {
  const cardsContainerTenth = document.querySelector(".carousel-item_tenth");
  cardsContainerTenth.innerHTML = "";
  return cardsContainerTenth;
};

const getCardsEleventhWrapper = () => {
  const cardsContainerEleventh = document.querySelector(
    ".carousel-item_eleventh"
  );
  cardsContainerEleventh.innerHTML = "";
  return cardsContainerEleventh;
};

const getCardsTwelvethWrapper = () => {
  const cardsContainerTwelves = document.querySelector(
    ".carousel-item_twelves"
  );
  cardsContainerTwelves.innerHTML = "";
  return cardsContainerTwelves;
};

const getCardsThirteenthWrapper = () => {
  const cardsContainerThirteenth = document.querySelector(
    ".carousel-item_thirteenth"
  );
  cardsContainerThirteenth.innerHTML = "";
  return cardsContainerThirteenth;
};

const getCardsFourteenthWrapper = () => {
  const cardsContainerFourteenth = document.querySelector(
    ".carousel-item_fourteenth"
  );
  cardsContainerFourteenth.innerHTML = "";
  return cardsContainerFourteenth;
};

const getCardsFifteenthWrapper = () => {
  const cardsContainerFifteenth = document.querySelector(
    ".carousel-item_fifteenth"
  );
  cardsContainerFifteenth.innerHTML = "";
  return cardsContainerFifteenth;
};

const getCardsSixteenthWrapper = () => {
  const cardsContainerSixteenth = document.querySelector(
    ".carousel-item_sixteenth"
  );
  cardsContainerSixteenth.innerHTML = "";
  return cardsContainerSixteenth;
};

console.log(petsArray[0]);

const generateCard = (petsArray) => {
  let cards = [];

  petsArray.forEach((card) => {
    cards.push(new Card(card));
  });
  return cards;
};

const generateCardReverse = (petsArrayReverse) => {
  let cards = [];

  petsArrayReverse.forEach((card) => {
    cards.push(new Card(card));
  });

  return cards;
};

const generateCard1 = (data) => {
  let cards = [];

  data.forEach((card) => {
    cards.push(new Card(card));
  });
  return cards;
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

const container = document.querySelector(".carousel-container");
const track = document.querySelector(".our-friends__layout");
const items = document.querySelectorAll(".card");
const btnPrev = document.querySelector(".our-friends__slider_2");
const btnNext = document.querySelector(".our-friends__slider_4");
const btnPrevAll = document.querySelector(".our-friends__slider_1");
const btnNextAll = document.querySelector(".our-friends__slider_5");
const btnCenter = document.querySelector(".our-friends__slider_3");

let petsArr = [];
let position = 0;
let slidesToShow = 4;
let slidesToScroll = 4;
let itemWidth;
let movePosition;
let itemsCount = 6;

if (window.matchMedia("(min-width: 1280px)").matches) {
  itemWidth = 1200;
  movePosition = 1200;
  itemGap = 90;
} else if (window.matchMedia("(min-width: 768px)").matches) {
  itemsCount = 8;
  itemWidth = 580;
  movePosition = 580;
  itemGap = 40;
} else if (window.matchMedia("(min-width: 320px)").matches) {
  itemsCount = 16;
  itemWidth = 270;
  movePosition = 270;
  itemGap = 0;
}

btnNext.addEventListener("click", () => {
  let itemsLeft = itemsCount - (Math.abs(position) + itemWidth) / itemWidth;
  if (itemsLeft >= 1) pageNumber = itemsCount - itemsLeft + 1;

  if (itemsLeft <= itemsCount && itemsLeft > 0) {
    position -= movePosition;
  } else if (itemsLeft === 0) {
    position -= 0;
  }

  setPosition();
  changePaginationBtn(pageNumber);
  checkBtns();
});

btnNextAll.addEventListener("click", () => {
  position = -itemWidth * (itemsCount - 1);
  let pageNumber = itemsCount;
  setPosition();
  changePaginationBtn(pageNumber);
  checkBtns();
});

btnPrev.addEventListener("click", () => {
  const itemsLeft = Math.abs(position) / itemWidth;
  let pageNumber = itemsLeft > 0 ? itemsLeft : 1;

  if (itemsLeft <= itemsCount && itemsLeft > 0) {
    position += movePosition;
  } else if (itemsLeft === 0) {
    position += 0;
  }

  setPosition();
  changePaginationBtn(pageNumber);
  checkBtns();
});

btnPrevAll.addEventListener("click", () => {
  position = 0;
  let pageNumber = position + 1;
  setPosition();
  changePaginationBtn(pageNumber);
  checkBtns();
});

const setPosition = () => {
  track.style.transform = `translateX(${position}px)`;
};

const checkBtns = () => {
  btnPrevAll.disabled = position === 0;
  if (btnPrevAll.disabled) {
    btnPrevAll.classList.add("btn-disabled");
  } else {
    btnPrevAll.classList.remove("btn-disabled");
  }
  btnPrev.disabled = position === 0;
  if (btnPrev.disabled) {
    btnPrev.classList.add("btn-disabled");
  } else {
    btnPrev.classList.remove("btn-disabled");
  }
  btnNext.disabled = position === -itemWidth * (itemsCount - 1);
  if (btnNext.disabled) {
    btnNext.classList.add("btn-disabled");
  } else {
    btnNext.classList.remove("btn-disabled");
  }
  btnNextAll.disabled = position === -itemWidth * (itemsCount - 1);
  if (btnNextAll.disabled) {
    btnNextAll.classList.add("btn-disabled");
  } else {
    btnNextAll.classList.remove("btn-disabled");
  }
};

const changePaginationBtn = (pageNumber) => {
  btnCenter.innerText = "";
  btnCenter.innerText = `${pageNumber}`;
};

checkBtns();