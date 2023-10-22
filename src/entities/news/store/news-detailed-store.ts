import {action, makeAutoObservable, observable} from "mobx";
import {News} from "../model/types";
import $api from "../../../shared/api";


class NewsDetailedStore {
    @observable news: News = {} as News;
    @observable isLoading: boolean = true


    constructor() {
        makeAutoObservable(this)
    }

    @action
    getNewsById(id: string) {
        this.news = {} as News
        $api.get(`news/${id}`).then(res => {
            this.news = res.data
        }).then(() => {
            this.isLoading = false
        }).catch(e => {
            console.log(e)
        })
    }

}

const newsDetailedStore = new NewsDetailedStore()
export default newsDetailedStore;