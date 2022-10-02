class MobileMenu {
  constructor() {
    this.DOM = {};
    this.DOM.btn = document.querySelector(".mobile-menu__btn");
    this.DOM.menu = document.querySelectorAll(".menu__item > a ");

    this.DOM.header = document.querySelector(".header");
    this.eventType = this._getEventType();
    this._addEvent();
  }

  _getEventType() {
    const isTouchCapable =
      "ontouchstart" in window ||
      (window.DocumentTouch && document instanceof DocumentTouch);

    return isTouchCapable ? "touchstart" : "click";
  }

  _toggle() {
    this.DOM.header.classList.toggle("menu-open");
  }

  _addEvent() {
    this.DOM.btn.addEventListener(this.eventType, this._toggle.bind(this));

    //モバイルメニューのリストがクリックされたときメニューが開く
    this.DOM.menu.forEach((element) => {
      element.addEventListener(this.eventType, this._toggle.bind(this));
    });
  }
}
