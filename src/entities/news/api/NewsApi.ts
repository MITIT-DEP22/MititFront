import $api from "../../../shared/api";

export class NewsApi {
    static async getNews() {
        return $api.get("/news")
    }

}