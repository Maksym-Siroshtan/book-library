import { DivComponent } from "../../common/div-component";
import "./card-list.css";

export class CardList extends DivComponent {
  constructor(appState, parentState) {
    super();
    this.appState = appState;
    this.parentState = parentState;
  }

  render() {
    if (this.parentState.loading) {
      this.div.innerHTML = `
        <div class="card_list__loader">Загрузка...</div>
      `;
      return this.div;
    }

    this.div.classList.add("card_list");
    this.div.innerHTML = `
      <h1>Найдено книг - ${this.parentState.list.length}</h1>
    `;
    return this.div;
  }
}
