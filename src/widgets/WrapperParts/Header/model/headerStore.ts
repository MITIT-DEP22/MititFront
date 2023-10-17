import {action, makeAutoObservable, observable} from 'mobx';

class HeaderStore {
    @observable pathname = "";
    constructor() {
        makeAutoObservable(this);
    }
    @action
    changeLink(link: string) {
        this.pathname = link;
    }
}

export const headerStore = new HeaderStore();