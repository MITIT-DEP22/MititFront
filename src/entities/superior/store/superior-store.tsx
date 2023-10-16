import {action, makeAutoObservable, observable} from 'mobx';
import $api from "shared/api";
import {Superior} from "../model/types";

class SuperiorStore {
    @observable superiors: Superior[] = [];
    @observable isLoading = true;

    constructor() {
        makeAutoObservable(this);
        this.loadSuperiors();
    }

    @action
    async loadSuperiors() {
        try {
            $api.get('/superiors').then(res => {
                this.superiors = res.data
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

const superiorStore = new SuperiorStore();

export default superiorStore;
