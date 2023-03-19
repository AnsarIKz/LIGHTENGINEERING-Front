import { runInAction, makeAutoObservable } from "mobx";
import API from "../API";

class CategoryStore {
  navigation = []; // {pk: PK, name: NAME}
  list = [];
  isLoading = false;

  constructor() {
    makeAutoObservable(this);
    this.fetchCatalog();
  }

  async fetchCatalog(node = null) {
    this.isLoading = true;
    try {
      let response;
      if (node === null) {
        console.log(node);
        response = await API.get("catalog/");
        this.navigation = [];
      } else {
        response = await API.get(`catalog/${node}/`);
        this.navigation = (await API.get(`catalog/${node}/parents/`)).data;
      }
      runInAction(() => {
        this.isLoading = false;
        this.list = response.data;
      });
    } catch (error) {
      runInAction(() => {
        this.isLoading = false;
        console.error(error);
      });
    }
  }
}

export default new CategoryStore();
