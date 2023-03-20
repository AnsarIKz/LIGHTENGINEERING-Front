import { runInAction, makeAutoObservable } from "mobx";
import API from "../API";

class ProductStore {
  data = [];
  isLoading = false;

  constructor() {
    makeAutoObservable(this);
    this.fetchProduct();
  }

  async fetchProduct() {
    this.isLoading = true;
    try {
      let response = await API.get("product/");
      runInAction(() => {
        this.data = response.data;
        this.isLoading = false;
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
