import { DivComponent } from "../../common/div-component.js";
import './header.css';

export class Header extends DivComponent {
  constructor(appState) {
    super();
    this.appState = appState;
  }

  render() {
    this.div.innerHTML = "";
    this.div.classList.add("header");
    this.div.innerHTML = `
      <div class="logo">
        <img src="./src/static/logo.svg" alt="Логотип" />
      </div>
      <ul class="menu">
        <li class="menu__item">
          <a class="menu__link" href="#">
          <img src="./src/static/search.svg" alt="Логотип" />
          Поиск книг
          </a>
        </li>
        <li class="menu__item">
          <a class="menu__link" href="#">
          <img src="./src/static/favorites.svg" alt="Логотип" />
          Избранное
          </a>
          <span>${this.appState.favorites.length}</span>
        </li>
      </ul>
    `;
    return this.div;
  }
}
