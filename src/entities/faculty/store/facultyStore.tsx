import {action, makeAutoObservable, observable} from 'mobx';
import $api from "shared/api";
import {Faculty} from "../model/types";
import {faculties} from "../../../shared/enums/Data";
import {RouterNames} from "../../../shared/enums/RouterNames";
import {SubLink} from "../../../widgets/WrapperParts/Header/model/types";

class FacultyStore {
    @observable faculties: Faculty[] = [];
    @observable isLoading = true;
    @observable id = 0;

    constructor() {
        makeAutoObservable(this);
        this.getFaculties()
    }

    @action
    async getFaculties() {
        try {
            $api.get<Faculty[]>(`/faculties`).then(res => {
                this.faculties = res.data
            }).finally(() => {
                this.isLoading = false;
            });
        } catch (error) {
            console.error('Error loading news:', error);
            this.isLoading = false;
        }
    }

}

const facultyStore = new FacultyStore();

export default facultyStore;
