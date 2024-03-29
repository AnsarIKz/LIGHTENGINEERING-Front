import { runInAction, makeAutoObservable } from "mobx";
import API from "../API";

class ProjectStore {
  data = [];
  isLoading = false;

  constructor() {
    makeAutoObservable(this);
    this.fetchProject();
  }

  async fetchProject() {
    this.isLoading = true;
    try {
      let response = await API.get("project/");
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

export default new ProjectStore();
