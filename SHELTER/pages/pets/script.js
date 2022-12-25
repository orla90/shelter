import petsData from '../../scripts/pets.js';
import { CardModal } from '../../scripts/CardModal.js';
import { Card } from '../../scripts/Card.js';

let PAGE_AMOUNT = 6;
let PETS_PER_PAGE = 8;
const PETS_ARRAY_LENGTH = 48;

window.onload = function () {
  checkWindowSize();
  if (petsData) {
    renderPopupsToDom();
  }
  checkBtns();
};

const randomizeArray = (max) => {
  const numberSet = new Set();
  while (numberSet.size < max) {
    let rand = Math.floor(Math.random() * max);
    numberSet.add(rand);
  }
  return Array.from(numberSet);
};

const multiplyArray = () => {
  const numbersArray = [];
  while (numbersArray.length < PETS_ARRAY_LENGTH) {
    let numberSet = randomizeArray(petsData.length);
    if (numbersArray.length === 0) {
      numberSet.forEach((number) => numbersArray.push(number));
    }
    for (let i = 0; i < numberSet.length; i += 1) {
      const numbersArrayLast = numbersArray[numbersArray.length - 1];
      const numbersArraySecondLast = numbersArray[numbersArray.length - 2];
      if (
        numberSet[0] === numbersArrayLast ||
        numberSet[0] === numbersArraySecondLast
      ) {
        const [first, ...rest] = numberSet;
        numberSet = [...rest, first];
      }
      if (
        numberSet[1] === numbersArrayLast ||
        numberSet[1] === numbersArraySecondLast
      ) {
        const [first, second, ...rest] = numberSet;
        numberSet = [first, ...rest, second];
      }
      if (
        numberSet[2] === numbersArrayLast ||
        numberSet[2] === numbersArraySecondLast
      ) {
        const [first, second, third, ...rest] = numberSet;
        numberSet = [first, second, ...rest, third];
      }
      if (
        numberSet[3] === numbersArrayLast ||
        numberSet[3] === numbersArraySecondLast
      ) {
        const [first, second, third, fourth, ...rest] = numberSet;
        numberSet = [first, second, third, ...rest, fourth];
      }
    }
    numberSet.forEach((number) => numbersArray.push(number));
  }
  return numbersArray;
};

const getPetsArray = () => {
  const numbersArray = multiplyArray();
  const petsArray = [];
  numbersArray.forEach((number) => {
    petsArray.push(petsData[number]);
  });
  return petsArray;
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

const renderPopupsToDom = () => {
  getCardsWrapper();
  addCardClickHandler();
};

const generateCard = (petsArray) => {
  let cards = [];
  petsArray.forEach((card) => {
    cards.push(new Card(card));
  });
  return cards;
};

const generateCardWrapper = () => {
  let template = '';
  const wrapperArr = [];
  for (let i = 0; i < PAGE_AMOUNT; i += 1) {
    const cardWrapper = document.createElement('div');
    cardWrapper.classList.add(`carousel-item`);
    cardWrapper.classList.add(`carousel-item_pets`);
    cardWrapper.innerHTML = template;
    wrapperArr.push(cardWrapper);
  }
  return wrapperArr;
};

const getCardsWrapper = () => {
  const cardsContainer = document.querySelector('.our-friends__layout');
  cardsContainer.innerHTML = '';
  const wrapperArr = generateCardWrapper();
  const petsArray = getPetsArray();
  let petsIndexArr = [];

  for (let i = 0; i < PETS_ARRAY_LENGTH; i += PETS_PER_PAGE) {
    petsIndexArr.push(i);
  }

  for (let i = 0; i < petsIndexArr.length; i += 1) {
    const tempArr = petsArray.slice(petsIndexArr[i], petsIndexArr[i + 1]);
    generateCard(tempArr).forEach((card) => {
      wrapperArr[i].append(card.generateCard());
    });
    cardsContainer.append(wrapperArr[i]);
  }
};

const getClickedData = (name) => {
  return petsData.find((card) => card.name == name);
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

function toggleMenu() {
  hamburger.forEach((el) => el.classList.toggle('open'));
  hamburgerMenu.classList.toggle('open');
  bodyOverlay.classList.toggle('overlay-grey');
  htmlNode.classList.toggle('vertical-scroll-hidden');
}

hamburger.forEach((el) => el.addEventListener('click', toggleMenu));

function closeMenu(event) {
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
}

navLinks.forEach((el) => el.addEventListener('click', closeMenu));
bodyOverlay.addEventListener('click', closeMenu);

/* Handle Slider */
const track = document.querySelector('.our-friends__layout');
const btnPrev = document.querySelector('.our-friends__slider_2');
const btnNext = document.querySelector('.our-friends__slider_4');
const btnPrevAll = document.querySelector('.our-friends__slider_1');
const btnNextAll = document.querySelector('.our-friends__slider_5');
const btnCenter = document.querySelector('.our-friends__slider_3');

let position = 0;
let itemWidth;
let movePosition;
let itemsCount = 6;

const checkWindowSize = () => {
  if (window.matchMedia('(min-width: 1280px)').matches) {
    itemWidth = 1200;
    movePosition = 1200;
    PAGE_AMOUNT = 6;
  } else if (window.matchMedia('(min-width: 768px)').matches) {
    itemsCount = 8;
    itemWidth = 580;
    movePosition = 580;
    PAGE_AMOUNT = 8;
  } else if (window.matchMedia('(min-width: 320px)').matches) {
    itemsCount = 16;
    itemWidth = 270;
    movePosition = 270;
    PAGE_AMOUNT = 16;
  }

  PETS_PER_PAGE = PETS_ARRAY_LENGTH / PAGE_AMOUNT;
};

window.addEventListener('resize', () => {
  checkWindowSize();
  getCardsWrapper();
});

const handlePagination = (pageNumber) => {
  setPosition();
  if (pageNumber) {
    changePaginationBtn(pageNumber);
  }
  checkBtns();
};

btnNext.addEventListener('click', () => {
  let pageNumber;
  let itemsLeft = itemsCount - (Math.abs(position) + itemWidth) / itemWidth;
  if (itemsLeft >= 1) pageNumber = itemsCount - itemsLeft + 1;
  if (itemsLeft <= itemsCount && itemsLeft > 0) {
    position -= movePosition;
  } else if (itemsLeft === 0) {
    position -= 0;
  }
  handlePagination(pageNumber);
});

btnNextAll.addEventListener('click', () => {
  position = -itemWidth * (itemsCount - 1);
  let pageNumber = itemsCount;
  handlePagination(pageNumber);
});

btnPrev.addEventListener('click', () => {
  const itemsLeft = Math.abs(position) / itemWidth;
  let pageNumber = itemsLeft > 0 ? itemsLeft : 1;

  if (itemsLeft <= itemsCount && itemsLeft > 0) {
    position += movePosition;
  } else if (itemsLeft === 0) {
    position += 0;
  }
  handlePagination(pageNumber);
});

btnPrevAll.addEventListener('click', () => {
  position = 0;
  let pageNumber = position + 1;
  handlePagination(pageNumber);
});

const setPosition = () => {
  track.style.transform = `translateX(${position}px)`;
};

const checkBtns = () => {
  btnPrevAll.disabled = position === 0;
  if (btnPrevAll.disabled) {
    btnPrevAll.classList.add('btn-disabled');
  } else {
    btnPrevAll.classList.remove('btn-disabled');
  }
  btnPrev.disabled = position === 0;
  if (btnPrev.disabled) {
    btnPrev.classList.add('btn-disabled');
  } else {
    btnPrev.classList.remove('btn-disabled');
  }
  btnNext.disabled = position === -itemWidth * (itemsCount - 1);
  if (btnNext.disabled) {
    btnNext.classList.add('btn-disabled');
  } else {
    btnNext.classList.remove('btn-disabled');
  }
  btnNextAll.disabled = position === -itemWidth * (itemsCount - 1);
  if (btnNextAll.disabled) {
    btnNextAll.classList.add('btn-disabled');
  } else {
    btnNextAll.classList.remove('btn-disabled');
  }
};

const changePaginationBtn = (pageNumber) => {
  btnCenter.innerText = '';
  btnCenter.innerText = `${pageNumber}`;
};
