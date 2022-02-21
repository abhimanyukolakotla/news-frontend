class NewsApiService {
    baseUrl = process.env.REACT_APP_BACKEND_SERVICE_URL + ":" + process.env.REACT_APP_BACKEND_SERVICE_PORT + "/api";
    async fetchTopNews() {
        if(process.env.REACT_APP_BACKEND_SERVICE_URL === undefined) {
            this.baseUrl = "api";
        }
        var response =  await fetch(`${this.baseUrl}/topstories.json`);
        return response.json();
    }

    async fetchNewsItem(id) {
        if(process.env.REACT_APP_BACKEND_SERVICE_URL === undefined) {
            this.baseUrl = "";
        }
        var response =  await fetch(`${this.baseUrl}/item/${id}.json`);
        return response.json();
    }
}

const newsApiService = new NewsApiService();
export default newsApiService;