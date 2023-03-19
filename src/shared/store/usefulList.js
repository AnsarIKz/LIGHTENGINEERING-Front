import { runInAction, makeAutoObservable } from "mobx";
import API from "../API";

class UsefulStore {
  data = [];
  isLoading = false;

  constructor() {
    makeAutoObservable(this);
    this.fetchUseful();
  }

  async fetchUseful() {
    this.isLoading = true;
    try {
      let response = await API.get("useful/");
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

export default new UsefulStore();
