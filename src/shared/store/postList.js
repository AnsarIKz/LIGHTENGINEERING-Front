import { runInAction, makeAutoObservable } from "mobx";
import API from "../API";

class PostStore {
  data = [];
  isLoading = false;

  constructor() {
    makeAutoObservable(this);
    this.fetchPosts();
  }

  async fetchPosts() {
    this.isLoading = true;
    try {
      let response = await API.get("post/");
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

export default new PostStore();
