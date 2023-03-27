import { runInAction, makeAutoObservable } from "mobx";

class appStore {
  showBurgerMenu = false;
  constructor() {
    makeAutoObservable(this);
  }
  toggleBurgerMenu() {
    this.showBurgerMenu = !this.showBurgerMenu;
  }
}

export default new appStore();
