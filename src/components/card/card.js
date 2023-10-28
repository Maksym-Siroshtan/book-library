import { DivComponent } from "../../common/div-component";
import "./card.css";

export class Card extends DivComponent {
  constructor(appState, cardState) {
    super();
    this.appState = appState;
    this.cardState = cardState;
  }

  addToFavorites() {
    this.appState.favorites.push(this.cardState);
  }

  removeFromFavorites() {
    this.appState.favorites = this.appState.favorites.filter((book) => book.key !== this.cardState.key);
  }

  render() {
    const existInFavorites = this.appState.favorites.find(
      (b) => b.key === this.cardState.key
    );
    this.div.classList.add("card");
    this.div.innerHTML = `
      <div class="card__image">
        <img src="https://covers.openlibrary.org/b/olid/${
          this.cardState.cover_edition_key
        }-M.jpg" alt="Обложка" />
      </div>
      <div class="card__info">
        <div class="card__tag">${
          this.cardState.subject ? this.cardState.subject[0] : "Not found"
        }</div>
        <div class="card__title">${this.cardState.title}</div>
        <div class="card__author">${
          this.cardState.author_name
            ? this.cardState.author_name[0]
            : "Not found"
        }</div>
        <div class="card__footer">
        <button class="card__add ${existInFavorites ? "card__active" : ""}">
          <img src="${
            existInFavorites
              ? "./src/static/favorites.svg"
              : "./src/static/favorites-white.svg"
          }" />
        </button>
      </div>
    </div>
    `;

    if (existInFavorites) {
      this.div
      .querySelector('button')
      .addEventListener('click', this.removeFromFavorites.bind(this));
    } else {
      this.div
      .querySelector('button')
      .addEventListener('click', this.addToFavorites.bind(this));
    }
    return this.div;
  }
}
