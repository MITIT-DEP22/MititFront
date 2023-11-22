import {action, makeAutoObservable, observable} from "mobx";
import $api from "../../../shared/api";
import {AccordionElement} from "../../accordion-element";
import {Page} from "../model/types";

class PageStore {
    @observable currentPage: Page = {} as Page;
    @observable isLoading: boolean = true;
    @observable titleImageIsLoading: boolean = true;
    @observable pages: Page[] = [];

    constructor() {
        makeAutoObservable(this);
        this.loadAllPages()
    }

    @action
    changeCurrentPage(name: string) {
        this.currentPage = this.pages.filter(item => item.name === name)[0]
    }

    @action
    async loadAllPages() {
        $api.get(`/pages`).then(response => {
            const pages = [];
            for (let i = 0; i < response.data.length; i++) {
                const data = response.data[i];
                let tempPage = {} as Page;
                tempPage.title = data.title;
                tempPage.name = data.name;
                tempPage.titleImage = data.titleImage;
                tempPage.textBlocks = [];

                for (let i = 0; i < data.textBlocks.length; i++) {
                    tempPage.textBlocks.push(JSON.parse(data.textBlocks[i].jsonContent))
                    tempPage.textBlocks[i].id = data.textBlocks[i].id;
                }
                tempPage.accordionElements = [];

                for (let i = 0; i < data.accordionElements.length; i++) {
                    let accordionElement = {
                        id: data.accordionElements[i].id,
                        title: data.accordionElements[i].title,
                        textBlocks: [],
                    } as AccordionElement;

                    for (let j = 0; j < data.accordionElements[i].textBlocks.length; j++) {
                        accordionElement.textBlocks.push(JSON.parse(data.accordionElements[i].textBlocks[j].jsonContent));
                        accordionElement.textBlocks[j].id = data.accordionElements[i].textBlocks[j].id;
                    }

                    tempPage.accordionElements.push(accordionElement);
                }
                pages.push(tempPage);
            }
            this.pages = pages;
        }).catch(e => {
            console.log(e)
            window.location.replace("/")
        }).then(() => {
            this.isLoading = false
        })
    }


    // @action
    // async loadAllPages() {
    //     $api.get(`/pages`).then(res => {
    //         for (let i = 0; i < res.data.length; i++) {
    //             const data = res.data[i]
    //             let tempPage = {} as Page;
    //             tempPage.title = data.title;
    //             tempPage.name = data.name;
    //             tempPage.titleImage = data.title;
    //             tempPage.textBlocks = []
    //             for (let i = 0; i < data.textBlocks.length; i++) {
    //                 tempPage.textBlocks.push(JSON.parse(data.textBlocks[i].jsonContent))
    //             }
    //
    //             tempPage.accordionElements = []
    //             for (let i = 0; i < data.accordionElements.length; i++) {
    //                 let accordionElement = {
    //                     id: data.accordionElements[i].id,
    //                     title: data.accordionElements[i].title,
    //                     textBlocks: []
    //                 } as AccordionElement
    //                 for (let j = 0; j < data.accordionElements[i].textBlocks.length; j++) {
    //                     accordionElement.textBlocks.push(JSON.parse(data.accordionElements[i].textBlocks[j].jsonContent))
    //                 }
    //                 tempPage.accordionElements.push(accordionElement)
    //             }
    //             this.pages.push(tempPage)
    //         }
    //
    //     }).catch(e => {
    //         console.log(e)
    //     })
    // }


    // @action
    // loadPage(name: string) {
    //     $api.get(`/pages/name`, {
    //         params: {
    //             name: name
    //         }
    //     }).then(res => {
    //         const data = res.data
    //         this.page.title = data.title;
    //         this.page.name = data.name;
    //         this.page.titleImage = data.title;
    //         this.page.textBlocks = []
    //         for (let i = 0; i < data.textBlocks.length; i++) {
    //             this.page.textBlocks.push(JSON.parse(data.textBlocks[i].jsonContent))
    //         }
    //
    //         this.page.accordionElements = []
    //         for (let i = 0; i < data.accordionElements.length; i++) {
    //             let accordionElement = {
    //                 id: data.accordionElements[i].id,
    //                 title: data.accordionElements[i].title,
    //                 textBlocks: []
    //             } as AccordionElement
    //             for (let j = 0; j < data.accordionElements[i].textBlocks.length; j++) {
    //                 accordionElement.textBlocks.push(JSON.parse(data.accordionElements[i].textBlocks[j].jsonContent))
    //             }
    //             this.page.accordionElements.push(accordionElement)
    //         }
    //     }).catch(e => {
    //         console.log(e)
    //     }).finally(() => {
    //         this.isLoading = false
    //     })
    // }


    // @action
    // getPageLocal(name: string) {
    //
    //     this.page = {} as Page
    //
    //     if (name === RouterNames.SUPERIORS.name) {
    //         this.page = superiorsPage
    //     } else if (name === RouterNames.ENTRANTS.name) {
    //         this.page = entrancesPage
    //     } else if (name === RouterNames.STUDY.name) {
    //         this.page = educationsPage
    //     } else if (name === RouterNames.CONTACTS.name) {
    //         this.page = contactsPage
    //     } else if (name === RouterNames.CONTACTS.name) {
    //         this.page = contactsPage
    //     } else if (name === RouterNames.FACULTY_1.name) {
    //         this.page = faculties[0]
    //     }
    //     this.isLoading = false
    // }
}

const pageStore = new PageStore()
export default pageStore;