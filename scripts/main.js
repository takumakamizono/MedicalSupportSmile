document.addEventListener("DOMContentLoaded", function () {
  new Main();
});

class Main {
  constructor() {
    this.header = document.querySelector(".header");
    this.hero = new HeroSlider(".swiper");
    this._observers = [];
    this._init();
  }

  _toggleSlideAnimation(el, inview) {
    if (inview) {
      this.hero.start();
    } else {
      this.hero.stop();
    }
  }
  _navAnimation(el, inview) {
    if (inview) {
      this.header.classList.remove("triggered");
    } else {
      this.header.classList.add("triggered");
    }
  }
  _init() {
    new MobileMenu();
    this._scrollIint();
  }

  //pushでオブジェクトに格納する。
  _scrollIint() {
    this._observers.push(
      new ScrollObserver(".nav-trigger", this._navAnimation.bind(this), {
        once: false,
      }),
      new ScrollObserver(".swiper", this._toggleSlideAnimation.bind(this), {
        once: false,
      })
    );
    console.log(this._observers);
  }
}
