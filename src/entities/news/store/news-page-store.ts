import {action, makeAutoObservable, observable} from 'mobx';
import $api from "shared/api";
import {News} from "../model/types";

class NewsPageStore {
    @observable news: News[] = [];
    @observable isLoading = true;
    @observable page: number = 0;
    @observable countPages: number = 0;

    constructor() {
        makeAutoObservable(this);
        this.loadNews = this.debounce(this.loadNews, 1000);
    }

    // @ts-ignore
    debounce(func, delay) {
        // @ts-ignore
        let timeoutId;
        // @ts-ignore
        return function (...args) {
            // @ts-ignore
            clearTimeout(timeoutId);
            timeoutId = setTimeout(() => {
                // @ts-ignore
                func.apply(this, args);
            }, delay);
        };
    }

    @action
    changePage(page: number) {
        this.page = page;
        this.isLoading = true;
        this.loadNews();
    }

    @action
    loadNews() {
        try {
            this.isLoading = true
            $api.get('/news', {
                params: {
                    size: 9,
                    page: this.page
                }
            }).then(res => {
                this.news = res.data.content
                this.countPages = res.data.totalPages
            }).finally(() => {
                this.isLoading = false;
            });
        } catch (error) {
            console.error('Error loading news:', error);
            this.isLoading = false;
        }
    }
}

const newsStore = new NewsPageStore();

export default newsStore;
