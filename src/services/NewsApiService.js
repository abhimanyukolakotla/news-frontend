class NewsApiService {
    baseUrl = process.env.REACT_APP_BACKEND_SERVICE_URL + ":" + process.env.REACT_APP_BACKEND_SERVICE_PORT + "/api";
    NewsApiService() {
        this.baseUrl = process.env.REACT_APP_BACKEND_SERVICE_URL === undefined? "api": this.baseUrl;
    }
    async fetchTopNews() {
        let baseUrl = getBaseUrl();
        var response =  await fetch(`${baseUrl}/topstories.json`);
        return response.json();
    }

    async fetchNewsItem(id) {
        let baseUrl = getBaseUrl();
        var response =  await fetch(`${baseUrl}/item/${id}.json`);
        return response.json();
    }

    getBaseUrl() {
        if( process.env.REACT_APP_BACKEND_SERVICE_URL === undefined)
            return "api"
        else return this.baseUrl;
    }
}

const newsApiService = new NewsApiService();
export default newsApiService;