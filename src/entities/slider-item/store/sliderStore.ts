import {action, makeAutoObservable, observable} from "mobx";
import {SliderItem} from "../model/types";
import $api from "../../../shared/api";


class SliderStore {
    @observable sliderItems: SliderItem[] = [];
    @observable isLoading: boolean = true;

    constructor() {
        makeAutoObservable(this)
        this.getAllSliderItems()
    }


    @action
    getAllSliderItems() {
        $api.get("slider-items").then(res => {
            this.sliderItems = res.data;
        }).then(() => {
            this.isLoading = false;
        }).catch(e => {
            console.log(e)
        })
    }
}

const sliderStore = new SliderStore()
export default sliderStore;