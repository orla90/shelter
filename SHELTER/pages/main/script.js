import data from '../../scripts/pets.js';
import { CardModal } from '../../scripts/CardModal.js';

const PETS_NAMES = [
  'jennifer',
  'woody',
  'sophia',
  'katrine',
  'timmy',
  'freddie',
  'charly',
  'scarlett',
];

const randomInteger = (min, max) => {
  const rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
};

const randomIntegerArr = (countNum) => {
  let outArray = [];
  while (outArray.length < countNum) {
    var rand = randomInteger(0, PETS_NAMES.length - 1);
    if (outArray.indexOf(rand) === -1) outArray.push(rand);
  }
  return outArray;
};

let randomNumbersArray = randomIntegerArr(PETS_NAMES.length);

window.onload = function () {
  if (data) {
    renderPopupsToDom();
  }
};

const renderPopupsToDom = () => {
  let cardsCount;

  if (window.matchMedia('(min-width: 1280px)').matches) {
    cardsCount = 3;
  } else if (window.matchMedia('(min-width: 768px)').matches) {
    cardsCount = 2;
  } else if (window.matchMedia('(min-width: 320px)').matches) {
    cardsCount = 1;
  }

  ITEM_ACTIVE.innerHTML = '';
  for (let i = 0; i < cardsCount; i++) {
    const card = makeCardTemplate(randomNumbersArray[i]);
    ITEM_ACTIVE.appendChild(card);
  }

  cardListGenerate();

  ITEM_LEFT.innerHTML = '';
  for (let i = 0; i < cardsCount; i++) {
    const card = makeCardTemplate(randomNumbersArray[i]);
    ITEM_LEFT.appendChild(card);
  }

  ITEM_RIGHT.innerHTML = '';
  for (let i = 0; i < cardsCount; i++) {
    const card = makeCardTemplate(randomNumbersArray[i]);
    ITEM_RIGHT.appendChild(card);
  }

  addCardClickHandler();
};

const cardListGenerate = () => {
  if (window.matchMedia('(min-width: 1280px)').matches) {
    let randomNum0 = randomNumbersArray[0];
    let randomNum1 = randomNumbersArray[1];
    let randomNum2 = randomNumbersArray[2];

    if (randomNumbersArray.length < 6) {
      randomNumbersArray = randomIntegerArr(PETS_NAMES.length);
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
  } else if (window.matchMedia('(min-width: 768px)').matches) {
    let randomNum0 = randomNumbersArray[0];
    let randomNum1 = randomNumbersArray[1];

    if (randomNumbersArray.length < 6) {
      randomNumbersArray = randomIntegerArr(PETS_NAMES.length);
      if (randomNumbersArray.includes(randomNum0)) {
        randomNumbersArray.splice(randomNumbersArray.indexOf(randomNum0), 1);
      }
      if (randomNumbersArray.includes(randomNum1)) {
        randomNumbersArray.splice(randomNumbersArray.indexOf(randomNum1), 1);
      }
    } else {
      randomNumbersArray = randomNumbersArray.slice(2);
    }
  } else if (window.matchMedia('(min-width: 320px)').matches) {
    let randomNum0 = randomNumbersArray[0];

    if (randomNumbersArray.length < 6) {
      randomNumbersArray = randomIntegerArr(PETS_NAMES.length);
      if (randomNumbersArray.includes(randomNum0)) {
        randomNumbersArray.splice(randomNumbersArray.indexOf(randomNum0), 1);
      }
    } else {
      randomNumbersArray = randomNumbersArray.slice(1);
    }
  }
  return randomNumbersArray;
};

const addCardClickHandler = () => {
  document
    .querySelector('.our-friends__layout')
    .addEventListener('click', (e) => {
      if (e.target.closest('.card')) {
        let clickedCardName = e.target
          .closest('.card')
          .getAttribute('data-name');
        let clickedCardData = getClickedData(clickedCardName);

        renderCardModalWindow(clickedCardData);
      }
    });
};

const getClickedData = (name) => {
  return data.find((card) => card.name == name);
};

const renderCardModalWindow = (card) => {
  let modal = new CardModal('cards-modal', card);
  modal.renderModal();
};

/* Handle Hamburger */
const hamburger = document.querySelectorAll('.hamburger');
const navLinks = document.querySelectorAll('.navigation__link');
const hamburgerMenu = document.querySelector('.hamburger-menu');
const header = document.querySelector('.header__wrapper');
const bodyOverlay = document.querySelector('.body-overlay');
const htmlNode = document.querySelector('html');

const toggleMenu = () => {
  hamburger.forEach((el) => el.classList.toggle('open'));
  hamburgerMenu.classList.toggle('open');
  bodyOverlay.classList.toggle('overlay-grey');
  htmlNode.classList.toggle('vertical-scroll-hidden');
};

hamburger.forEach((el) => el.addEventListener('click', toggleMenu));

const closeMenu = (event) => {
  if (
    event.target.classList.contains('navigation__link') ||
    event.target.classList.contains('body-overlay')
  ) {
    hamburgerMenu.classList.remove('open');
    hamburger.forEach((el) => el.classList.remove('open'));
    header.classList.remove('open');
    bodyOverlay.classList.remove('overlay-grey');
    htmlNode.classList.remove('vertical-scroll-hidden');
  }
};

navLinks.forEach((el) => el.addEventListener('click', closeMenu));
bodyOverlay.addEventListener('click', closeMenu);

/* Handle Slider */
const BTN_PREV = document.querySelector('.our-friends__arrow_left');
const BTN_NEXT = document.querySelector('.our-friends__arrow_right');
const TRACK = document.querySelector('.our-friends__layout');
const ITEM_LEFT = document.querySelector('.carousel-item_left');
const ITEM_RIGHT = document.querySelector('.carousel-item_right');
const ITEM_ACTIVE = document.querySelector('.carousel-item_active');

const moveLeft = () => {
  TRACK.classList.add('transition-left');
  BTN_PREV.removeEventListener('click', moveLeft);
  BTN_NEXT.removeEventListener('click', moveRight);
};

const moveRight = () => {
  TRACK.classList.add('transition-right');
  BTN_NEXT.removeEventListener('click', moveRight);
  BTN_PREV.removeEventListener('click', moveLeft);
};

BTN_PREV.addEventListener('click', moveLeft);
BTN_NEXT.addEventListener('click', moveRight);

const makeCardTemplate = (index) => {
  let petsNameArray = PETS_NAMES[index];

  const card = document.createElement('div');
  card.className = 'card';
  card.setAttribute(
    'data-name',
    `${petsNameArray[0].toUpperCase() + petsNameArray.slice(1)}`
  );
  const img = document.createElement('img');
  img.classList.add('card__image');
  img.src = `../../assets/images/pets-${petsNameArray}.png`;
  img.alt = `pet ${petsNameArray[0].toUpperCase() + petsNameArray.slice(1)}`;
  card.append(img);

  const petName = document.createElement('div');
  petName.classList.add('card__name');
  petName.innerHTML = `${
    petsNameArray[0].toUpperCase() + petsNameArray.slice(1)
  }`;
  card.append(petName);

  const cardBtn = document.createElement('div');
  cardBtn.className = 'card__button';
  const btnContent = document.createElement('button');
  btnContent.classList.add('button', 'button_bordered');
  btnContent.innerHTML = 'Learn more';
  cardBtn.append(btnContent);
  card.append(cardBtn);
  return card;
};

TRACK.addEventListener('animationend', (animationEvent) => {
  if (animationEvent.animationName === 'move-left') {
    TRACK.classList.remove('transition-left');
    let leftItems = ITEM_LEFT.innerHTML;
    ITEM_ACTIVE.innerHTML = leftItems;
    ITEM_LEFT.innerHTML = '';
    for (let i = 0; i < 3; i++) {
      const card = makeCardTemplate(randomNumbersArray[i]);
      ITEM_LEFT.appendChild(card);
    }
  } else {
    TRACK.classList.remove('transition-right');
    const rightItems = ITEM_RIGHT.innerHTML;
    ITEM_ACTIVE.innerHTML = rightItems;

    ITEM_RIGHT.innerHTML = '';
    for (let i = 0; i < 3; i++) {
      const card = makeCardTemplate(randomNumbersArray[i]);
      ITEM_RIGHT.appendChild(card);
    }
  }

  let cardsCount;

  if (window.matchMedia('(min-width: 1280px)').matches) {
    let randomNum0 = randomNumbersArray[0];
    let randomNum1 = randomNumbersArray[1];
    let randomNum2 = randomNumbersArray[2];
    cardsCount = 3;
    if (randomNumbersArray.length < 6) {
      randomNumbersArray = randomIntegerArr(PETS_NAMES.length);
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
  } else if (window.matchMedia('(min-width: 768px)').matches) {
    let randomNum0 = randomNumbersArray[0];
    let randomNum1 = randomNumbersArray[1];
    cardsCount = 2;
    if (randomNumbersArray.length < 6) {
      randomNumbersArray = randomIntegerArr(PETS_NAMES.length);
      if (randomNumbersArray.includes(randomNum0)) {
        randomNumbersArray.splice(randomNumbersArray.indexOf(randomNum0), 1);
      }
      if (randomNumbersArray.includes(randomNum1)) {
        randomNumbersArray.splice(randomNumbersArray.indexOf(randomNum1), 1);
      }
    } else {
      randomNumbersArray = randomNumbersArray.slice(2);
    }
  } else if (window.matchMedia('(min-width: 320px)').matches) {
    let randomNum0 = randomNumbersArray[0];
    cardsCount = 1;
    if (randomNumbersArray.length < 6) {
      randomNumbersArray = randomIntegerArr(PETS_NAMES.length);
      if (randomNumbersArray.includes(randomNum0)) {
        randomNumbersArray.splice(randomNumbersArray.indexOf(randomNum0), 1);
      }
    } else {
      randomNumbersArray = randomNumbersArray.slice(1);
    }
  }

  ITEM_LEFT.innerHTML = '';
  for (let i = 0; i < cardsCount; i++) {
    const card = makeCardTemplate(randomNumbersArray[i]);
    ITEM_LEFT.appendChild(card);
  }

  ITEM_RIGHT.innerHTML = '';
  for (let i = 0; i < cardsCount; i++) {
    const card = makeCardTemplate(randomNumbersArray[i]);
    ITEM_RIGHT.appendChild(card);
  }

  BTN_PREV.addEventListener('click', moveLeft);
  BTN_NEXT.addEventListener('click', moveRight);
});
