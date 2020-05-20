export class NewsApi {
    constructor (params) {
        this.params = params;
    }

    getNews(keyWord) {
        return fetch(`${this.params.baseUrl}?q=${keyWord}&apiKey=${this.params.apiKey}
        &pageSize=${this.params.pageSize}&to=${this.params.to}&from=${this.params.from}`)
            .then((res) => {
                if (res.ok) {
                    console.log(res.status)
                    return res.json();
                }
                console.log(res.status)
                return Promise.reject(`Во время запроса произошла ошибка.
                Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз: ${res.status}`);
            });
    }
}