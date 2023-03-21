import { runInAction, makeAutoObservable } from "mobx";
import API from "../API";

class BlogDetailStore {
  data = {};
  isLoading = false;

  constructor() {
    makeAutoObservable(this);
  }

  async fetchBlogDetail({ id = "error", blog_type = "error" }) {
    this.isLoading = true;
    try {
      let response = await API.get(`${blog_type}/${id}/`);
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

export default new BlogDetailStore();
