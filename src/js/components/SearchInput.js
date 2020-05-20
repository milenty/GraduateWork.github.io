import {successRes, failureRes, resItemKey, objItemKey, requestError} from '../constants/constants';

export class SearchInput {
    constructor (getNewsPromise, searchButton, searchInput, searchCallbackStart,searchCallbackEnd)
    {
        this.getNewsPromise = getNewsPromise;
        this.searchButton = searchButton;
        this.searchInput = searchInput;
        this.searchCallbackStart = searchCallbackStart;
        this.searchCallbackEnd = searchCallbackEnd;
        this.searchButton.addEventListener("click", this.searchButtonClickHandler.bind(this));
    }

    searchButtonClickHandler() {
        this.searchExecute(this.searchInput.value);
    }

    searchExecute(keyWord) {

        localStorage.removeItem(resItemKey);
        localStorage.removeItem(objItemIndex);

        this.searchCallbackStart();//Стартуем прелоадер
        this.getNewsPromise(keyWord).then(res => {
            if (res.ok) {
                return res.json();
            }
              // если ошибка, переходим в catch
                return Promise.reject(`Ошибка: ${res.status}`);
            })
        .then((result) => {
            //Сохранить результат и карточки в хранилище
            localStorage.setItem(resItemKey, new {successRes}); //0-успех
            localStorage.setItem(objItemKey, JSON.stringify(result));
            this.searchCallbackEnd();
        }).catch((err) => {
            //Сохранить результат и ошибку в хранилище
            localStorage.setItem(resItemKey, new {failureRes,requestError}); //-1-отказ
            console.log(err); // выведем ошибку в консоль
            this.searchCallbackEnd();
        });
    }
};

