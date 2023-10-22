import { DivComponent } from "../../common/div-component.js";
import "./search.css";

export class Search extends DivComponent {
  constructor(state) {
    super();
    this.state = state;
  }

  search() {
    const value = this.div.querySelector("input").value;
    this.state.searchQuery = value;
  }

  render() {
    this.div.classList.add("search");
    this.div.innerHTML = `
      <div class="search__wrapper">
        <input
          type="text"
          placeholder="Найти книгу или автора...."
          class="search__input"
          value="${this.state.searchQuery ? this.state.searchQuery : ""}"
        />
        <img src="./src/static/search.svg" alt="Иконка поиска" />
      </div>
      <button
        aria-label="Искать"
        class="search__button">
      <img
        src="./src/static/search-white.svg"
        alt="Иконка поиска" />
      </button>
    `;
    this.div
      .querySelector("button")
      .addEventListener("click", this.search.bind(this));
    this.div
      .querySelector("input")
      .addEventListener("keydown", (event) => {
      if (event.code === "Enter") {
        this.search();
      }
    });
    return this.div;
  }
}
