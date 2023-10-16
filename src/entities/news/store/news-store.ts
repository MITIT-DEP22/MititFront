import {action, makeAutoObservable, observable} from 'mobx';
import $api from "shared/api";
import {News} from "../model/types";
import {logRoles} from "@testing-library/react";

class NewsStore {
    @observable news: News[] = [];
    @observable isLoading = true;
    @observable page: number = 0;
    @observable countPages: number = 0;

    constructor() {
        makeAutoObservable(this);
        this.loadNews();
    }

    @action
    changePage(page: number) {
        this.page = page
        this.isLoading = true
        this.loadNews()
    }

    @action
    async loadNews() {
        try {
            $api.get('/news', {
                params: {
                    size: 9,
                    page: this.page
                }
            }).then(res => {
                this.news = res.data.content
                this.countPages = res.data.totalPages
                console.log(res)
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
