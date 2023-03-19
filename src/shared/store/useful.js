import { runInAction, makeAutoObservable } from "mobx";
import API from "../API";

class UsefulStore {
  list = [];
  detail = {};

  isDetailPage = false;
  isLoading = false;

  constructor() {
    makeAutoObservable(this);
    this.fetchUseful();
  }

  async fetchUseful(node = null) {
    this.isLoading = true;
    try {
      let response;
      if (node === null) {
        response = await API.get("useful/");
      } else {
        response = await API.get(`useful/${node}/`);
      }
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

export default new ProjectsStore();
