import {action, makeAutoObservable, observable} from "mobx";
import $api from "shared/api";
import {Page} from "./types";
import {RouterNames} from "../../../shared/enums/RouterNames";
import {educationsPage, entrancesPage, faculties, superiorsPage} from "shared/enums/Data";


class PageStore {
    @observable page: Page = {} as Page;
    @observable isLoading: boolean = true;

    constructor() {
        makeAutoObservable(this);
    }

    @action
    loadPage(pathname: string) {
        $api.get(`${pathname}`).then(res => {
            this.page = res.data
        }).catch(e => {
            console.log(e)
        }).finally(() => {
            this.isLoading = false
        })
    }

    @action
    getPageLocal(pathname: string) {
        this.page = {} as Page
        if (pathname.includes(RouterNames.CHIEFS)) {
            this.page = superiorsPage
        } else if (pathname.includes(RouterNames.ENTRANTS)) {
            this.page = entrancesPage
        } else if (pathname.includes(RouterNames.STUDY)) {
            this.page = educationsPage
        } else if (pathname.includes(RouterNames.FACULTY_1)) {
            this.page = faculties[0]
        }
        this.isLoading = false

    }
}

const pageStore = new PageStore()
export default pageStore;