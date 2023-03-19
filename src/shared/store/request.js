import { runInAction, makeAutoObservable } from "mobx";
import API from "../API";

class RequestStore {
  isLoading = false;

  constructor() {
    makeAutoObservable(this);
  }

  async fetchRequest({ fullname, phone }) {
    this.isLoading = true;
    try {
      let response = await API.post("project/", {});
    } catch (error) {}
  }
}

export default new RequestStore();
