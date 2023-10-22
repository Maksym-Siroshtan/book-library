import { DivComponent } from "../../common/div-component.js";

export class Header extends DivComponent {
  constructor(appState) {
    super();
    this.appState = appState;
  }

  render() {
    this.div.innerHTML = "";
    this.div.classList.add("header");
    this.div.innerHTML = `
      <div>
        <img src="./src/static/logo.svg" alt="Логотип" />
      </div>
    `;
    return this.div;
  }
}
