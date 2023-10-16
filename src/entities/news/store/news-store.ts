import {action,  makeAutoObservable, observable} from 'mobx';
import $api from "shared/api";
import {News} from "../model/types";
import {logRoles} from "@testing-library/react";

class NewsStore {
    @observable news: News[] = [];
    @observable isLoading = true;

    constructor() {
        makeAutoObservable(this);
        this.loadNews();
    }

    @action
    async loadNews() {
        try {
            $api.get<News[]>('/news').then(res => {
                this.news = res.data
            }).finally(() => {
                this.isLoading = false;
            });
        } catch (error) {
            console.error('Error loading news:', error);
            this.isLoading = false;
        }
    }
}

const newsStore = new NewsStore();

export default newsStore;
