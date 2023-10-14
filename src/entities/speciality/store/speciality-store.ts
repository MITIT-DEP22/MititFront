import {action, makeAutoObservable, observable} from "mobx";
import {Speciality} from "../model/types";
import $api from "shared/api";

class SpecialityStore {
    @observable specialities: Speciality[] = [];
    @observable isLoading = true;

    constructor() {
        makeAutoObservable(this);
        this.loadSpecialities();
    }

    @action
    async loadSpecialities() {
        try {
            $api.get<Speciality[]>('/specialties').then(res => {
                this.specialities = res.data
            }).finally(() => {
                this.isLoading = false;
            });
        } catch (error) {
            console.error('Error loading specialities:', error);
            this.isLoading = false;
        }
    }
}

const specialityStore = new SpecialityStore();

export default specialityStore;
