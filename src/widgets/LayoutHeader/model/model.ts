import {makeAutoObservable, observable} from 'mobx';

class HeaderModel {
    activeLink: number = -1;

    constructor() {
        makeAutoObservable(this, {
            activeLink: observable
        });
    }

    async changeLink(linkId: number) {
        console.log(linkId)
        this.activeLink = linkId;
    }
}

export const model = new HeaderModel();