import {action, computed, makeAutoObservable, observable} from "mobx";
import $api from "../../../shared/api";
import {Page} from "../model/types";
import ConvertJSONtoTextBlocks from "../utils/ConvertJSONtoTextBlocks";
import {TextBlock} from "../../text-block";
import {AccordionElement} from "../../accordion-element";

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
        // this.currentPage = this.pages.filter(item => item.name === name)[0]
        this.loadPage(name)
    }

    @action
    async loadAllPages() {
        $api.get(`/pages`).then(response => {
            const pages: Page[] = [];
            for (let i = 0; i < response.data.length; i++) {
                ConvertJSONtoTextBlocks(response.data[i]).then(res => {
                    pages.push(res)
                }).catch(e => {
                    console.log(e)
                })
                // const data = response.data[i];
                // let tempPage = {} as Page;
                // tempPage.title = data.title;
                // tempPage.name = data.name;
                // tempPage.titleImage = data.titleImage;
                // tempPage.textBlocks = [];
                //
                // for (let i = 0; i < data.textBlocks.length; i++) {
                //     tempPage.textBlocks.push(JSON.parse(data.textBlocks[i].jsonContent))
                //     tempPage.textBlocks[i].id = data.textBlocks[i].id;
                // }
                // tempPage.accordionElements = [];
                //
                // for (let i = 0; i < data.accordionElements.length; i++) {
                //     let accordionElement = {
                //         id: data.accordionElements[i].id,
                //         title: data.accordionElements[i].title,
                //         textBlocks: [],
                //     } as AccordionElement;
                //
                //     for (let j = 0; j < data.accordionElements[i].textBlocks.length; j++) {
                //         accordionElement.textBlocks.push(JSON.parse(data.accordionElements[i].textBlocks[j].jsonContent));
                //         accordionElement.textBlocks[j].id = data.accordionElements[i].textBlocks[j].id;
                //     }
                //
                //     tempPage.accordionElements.push(accordionElement);
                // }
                // pages.push(tempPage);
            }
            this.pages = pages;
        }).catch(e => {
            console.log(e)
            window.location.replace("/")
        }).then(() => {
            this.isLoading = false
        })
    }

    @computed
    getRenderElements(): (TextBlock | AccordionElement)[] {
        let result: (TextBlock | AccordionElement)[] = []
        this.currentPage.textBlocks.map(item => {
            result.push(item)
        })

        this.currentPage.accordionElements.map(item => {
            result.push(item)
        })
        result = [...result].sort((a, b) => a.orderNumber - b.orderNumber);
        return result
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


    @action
    loadPage(name: string) {
        $api.get(`/pages/name`, {
            params: {
                name: name
            }
        }).then(res => {
            console.log(res.data)
            ConvertJSONtoTextBlocks(res.data).then(res => {
                this.currentPage = res
            }).catch(e => {
                console.log(e)
            })
            // const data = res.data
            // this.currentPage.title = data.title;
            // this.currentPage.name = data.name;
            // this.currentPage.titleImage = data.title;
            // this.currentPage.textBlocks = []
            // for (let i = 0; i < data.textBlocks.length; i++) {
            //     this.currentPage.textBlocks.push(JSON.parse(data.textBlocks[i].jsonContent))
            // }
            //
            // this.currentPage.accordionElements = []
            // for (let i = 0; i < data.accordionElements.length; i++) {
            //     let accordionElement = {
            //         id: data.accordionElements[i].id,
            //         title: data.accordionElements[i].title,
            //         textBlocks: []
            //     } as AccordionElement
            //     for (let j = 0; j < data.accordionElements[i].textBlocks.length; j++) {
            //         accordionElement.textBlocks.push(JSON.parse(data.accordionElements[i].textBlocks[j].jsonContent))
            //     }
            //     this.currentPage.accordionElements.push(accordionElement)
            // }
        }).catch(e => {
            console.log(e)
        }).finally(() => {
            this.isLoading = false
        })
    }


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