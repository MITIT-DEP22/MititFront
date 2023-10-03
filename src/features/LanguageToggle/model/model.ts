import {makeAutoObservable, observable} from 'mobx';

class LanguageToggle {
    activeLanguage: string = "ua";

    constructor() {
        makeAutoObservable(this, {
            activeLanguage: observable
        });
    }

    async changeLang(lang: string) {
        localStorage.setItem("lang", lang)
        this.activeLanguage = lang;
    }
}

export const model = new LanguageToggle();