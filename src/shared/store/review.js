import { runInAction, makeAutoObservable } from "mobx";
import API from "../API";

class ReviewStore {
  data = [];
  isLoading = false;

  constructor() {
    makeAutoObservable(this);
    this.fetchReview();
  }

  async fetchReview() {
    this.isLoading = true;
    try {
      let response = await API.get("review/");
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

export default new ReviewStore();
