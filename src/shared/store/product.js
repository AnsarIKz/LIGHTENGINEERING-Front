import { runInAction, makeAutoObservable } from "mobx";
import API from "../API";

class ProductStore {
  data = {};
  isLoading = false;

  constructor() {
    makeAutoObservable(this);
  }

  async fetchProduct(id = "error") {
    this.isLoading = true;
    try {
      let response = await API.get(`product/${id}/`);
      runInAction(() => {
        this.isLoading = false;
        this.data = response.data;
      });
    } catch (error) {
      runInAction(() => {
        this.isLoading = false;
        console.error(error);
      });
    }
  }
}

export default new ProductStore();
