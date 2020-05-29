export class CommitCardList {
    constructor (githubApi, commitCardListElement, createCard, initSlider) {
        this.commitCardListElement = commitCardListElement;
        this.githubApi = githubApi;
        this.commitCardListElement = commitCardListElement;
        //Создатель карточек
        this.createCard = createCard;
        this.initSlider = initSlider;
        //Массив хранит ключ-значение
        this.cards = [];
        this.getCards();
    }


    //Получаем карточки
    getCards(){
        this.githubApi.getGithubCards().then(res => {
            if (res.ok) {
                return res.json();
            }
              // если ошибка, переходим в catch
                return Promise.reject(`Ошибка: ${res.status}`);
            })
        .then((result) => {
            
            //Сохранить результат и карточки в хранилище
            if (result != null)
            {
                this.cards = result.map(function(item) {
                    const card = this.createCard(item.commit.committer.name, item.commit.committer.email, item.commit.committer.date, item.commit.message, item.author.avatar_url);
                    this.commitCardListElement.appendChild(card.cardElement);
                    return card;
                }, this);
                this.initSlider();
            }
        }).catch((err) => {
            //Сохранить результат и ошибку в хранилище
            console.log(`errorMessage: ${err}`);
        });
    }

}
