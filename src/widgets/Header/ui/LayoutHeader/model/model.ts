import {makeAutoObservable, observable} from 'mobx';

class HeaderModel {
    pathname = "";

    constructor() {
        makeAutoObservable(this, {
            pathname: observable,
        });
    }

    changeLink(link: string) {
        this.pathname = link;
    }

}

export const model = new HeaderModel();