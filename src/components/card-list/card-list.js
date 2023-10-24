import { DivComponent } from "../../common/div-component";
import { Card } from "../card/card";
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
      <h1>Найдено книг - ${this.parentState.numFound}</h1>
    `;
    for (let card of this.parentState.list) {
      this.div.append(new Card(this.appState, card).render());
    }
    return this.div;
  }
}
