class NewsApiService {
    baseUrl = process.env.REACT_APP_BACKEND_SERVICE_URL + ":" + process.env.REACT_APP_BACKEND_SERVICE_PORT + "/api";
    NewsApiService() {
        this.baseUrl = process.env.REACT_APP_BACKEND_SERVICE_URL === undefined? "api": this.baseUrl;
    }
    async fetchTopNews() {
        var response =  await fetch(`${this.baseUrl}/topstories.json`);
        return response.json();
    }

    async fetchNewsItem(id) {
        var response =  await fetch(`${this.baseUrl}/item/${id}.json`);
        return response.json();
    }
}

const newsApiService = new NewsApiService();
export default newsApiService;