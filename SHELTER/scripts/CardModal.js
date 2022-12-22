import { Modal } from './Modal.js';

export class CardModal extends Modal {
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
    let template = '';
    let card = document.createElement('div');
    card.className = 'card-content';

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
