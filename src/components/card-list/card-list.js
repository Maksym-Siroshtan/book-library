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



    const cardGrid = document.createElement('div');
    cardGrid.classList.add("card_grid");
    this.div.append(cardGrid);

    for (let card of this.parentState.list) {
      cardGrid.append(new Card(this.appState, card).render());
    }
    return cardGrid;
  }
}
