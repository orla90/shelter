export class Card {
  constructor({ name, img }) {
    this.name = name;
    this.img = img;
  }

  generateCard() {
    let template = '';
    let card = document.createElement('div');
    card.className = 'card';
    card.setAttribute('data-name', this.name);

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
