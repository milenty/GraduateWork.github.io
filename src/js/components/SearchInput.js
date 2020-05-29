import {SUCCESS, FAILURE, REQUEST_ERROR_MESSAGE} from '../constants/constants';
import {initialCards} from '../constants/initialCards';

export class SearchInput {
    constructor (newsApi, searchForm, searchInput, searchFormErrorMessage, searchCallbackStart, searchCallbackEnd, dataStorage)
    {
        this.newsApi = newsApi;
        this.searchForm = searchForm;
        this.searchInput = searchInput;
        this.searchFormErrorMessage = searchFormErrorMessage;

        this.searchCallbackStart = searchCallbackStart;
        this.searchCallbackEnd = searchCallbackEnd;
        this.dataStorage = dataStorage;

        this.searchForm.addEventListener("submit", this.searchFormClickHandler.bind(this));
        this.searchInput.addEventListener('input', this.searchInputValidate.bind(this));
    }

    searchFormClickHandler(event) {
        event.preventDefault();
        if (this.searchFormErrorMessage.classList.contains("error-message__hidden"))
            this.searchExecute(this.searchInput.value);
    }
    
    searchInputValidate()   {
        let errorText = "";
        if (this.searchInput.value === '')
            errorText = "Это обязательное поле";
        else
        {
            const regex = new RegExp("[^А-ЯЁа-яё0-9\-]", 'gi');
            if (this.searchInput.value.match(regex) != null)
                errorText = "Запрос должен содержать только символы кириллицы";  
        }

        this.searchFormErrorMessage.textContent = errorText;

        console.log(errorText);
        
        if (errorText.length > 0)
            this.searchFormErrorMessage.classList.remove("error-message__hidden");
        else
            this.searchFormErrorMessage.classList.add("error-message__hidden");
    };

    searchExecute(keyWord) {
        this.dataStorage.resetCards();
        this.searchCallbackStart();//Стартуем прелоадер
        ////////////////////////////////////////////////////////////
        this.newsApi.getNews(keyWord).then(res => {
            if (res.ok) {
                return res.json();
            }
              // если ошибка, переходим в catch
                return Promise.reject(`Ошибка: ${res.status}`);
            })
        .then((result) => {
            //Сохранить результат и карточки в хранилище
            this.dataStorage.setCards(JSON.stringify({DATEFROM:this.newsApi.getParams().from,DATETO:this.newsApi.getParams().to,KEYWORD:keyWord,RESULT:SUCCESS,ERRORMESSAGE:""}),JSON.stringify(result));
            this.searchCallbackEnd();
        }).catch((err) => {
            //Сохранить результат и ошибку в хранилище
            this.dataStorage.setCards(JSON.stringify({DATEFROM:this.newsApi.getParams().from,DATETO:this.newsApi.getParams().to,KEYWORD:keyWord,RESULT:FAILURE,ERRORMESSAGE:err.toString()}));
            this.searchCallbackEnd();
        });
        /////////////////////////////////////////////////////////////
       /* this.dataStorage.setCards(JSON.stringify({DATEFROM:this.newsApi.getParams().from,DATETO:this.newsApi.getParams().to,KEYWORD:keyWord,RESULT:SUCCESS,ERRORMESSAGE:""}), JSON.stringify(initialCards));
        this.searchCallbackEnd();*/
        ////////////////////////////////////////////////////////////
    }
};

