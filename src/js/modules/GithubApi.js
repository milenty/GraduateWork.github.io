export class GithubApi {
    constructor (params) {
        this.params = params;
    }

    getParams()
    {
        return this.params;
    }

    getGithubCards(keyWord) {
        return fetch(`${this.params.url}`);
    }
}