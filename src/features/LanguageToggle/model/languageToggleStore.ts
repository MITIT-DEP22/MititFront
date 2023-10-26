import {makeAutoObservable, observable} from 'mobx';

class LanguageToggleStore {
    activeLanguage = localStorage.getItem("lang")? localStorage.getItem("lang") : "ua";

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

export const languageToggleStore = new LanguageToggleStore();