import { runInAction, makeAutoObservable } from "mobx";
import API from "../API";

class ProjectsStore {
  list = [];
  detail = {};

  isDetailPage = false;
  isLoading = false;

  constructor() {
    makeAutoObservable(this);
    this.fetchProject();
  }

  async fetchProject(node = null) {
    this.isLoading = true;
    try {
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

export default new ProjectsStore();
