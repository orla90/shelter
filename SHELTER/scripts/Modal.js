export class Modal {
  constructor(classes) {
    this.classes = classes;
    this.modal = '';
    this.modalContent = '';
    this.modalCloseBtn = '';
    this.overlay = '';
    this.parent = '';
  }

  buildModal(content) {
    //Parent
    this.parent = this.createDomNode(
      this.parent,
      'div',
      'parent',
      'parent_modal'
    );

    //Overlay
    this.overlay = this.createDomNode(
      this.overlay,
      'div',
      'overlay',
      'overlay_modal'
    );

    //Modal
    this.modal = this.createDomNode(this.modal, 'div', 'modal', this.classes);

    //Modal content
    this.modalContent = this.createDomNode(
      this.modalContent,
      'div',
      'modal__content'
    );

    //Close button
    this.modalCloseBtn = this.createDomNode(
      this.modalCloseBtn,
      'span',
      'modal__close-icon'
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
    if (typeof content === 'string') {
      this.modalContent.innerHTML = content;
    } else {
      this.modalContent.innerHTML = '';
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
    this.modalCloseBtn.addEventListener('click', this.closeModal);
    this.overlay.addEventListener('click', this.closeModal);
  }

  openModal() {
    document.body.append(this.parent);
    document.querySelector('html').classList.toggle('vertical-scroll-hidden');
  }

  closeModal(e) {
    let classes = e.target.classList;
    if (classes.contains('overlay') || classes.contains('modal__close-icon')) {
      document.querySelector('.parent').remove();
      document.querySelector('html').classList.remove('vertical-scroll-hidden');
    }
  }
}
