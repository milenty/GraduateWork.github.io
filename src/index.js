import "./pages/index.css";
import "./images/NewsAnalyzer.svg";
import "./images/no-res.jpg";
import "./images/Path_5.svg";
import "./images/image_01.jpg";
import "./images/image_02.jpg";
import "./images/image_03.jpg";
import "./images/image_04.jpg";
import "./images/image_05.jpg";
import "./images/image_06.jpg";
import "./images/image-03.jpg";
import "./images/fb.svg";
import "./images/git.svg";

import {DataStorage} from "./js/modules/DataStorage";
import {getRequestFormattedDate} from "./js/utils/utils";
import {NewsApi} from "./js/modules/NewsApi";
import {SearchInput} from './js/components/SearchInput';
import {NewCard} from "./js/components/NewCard";
import {NewsCardList} from "./js/components/NewsCardList";

const searchFormInput = document.querySelector(".search__form_text");
const searchForm = document.querySelector(".search__form");
const newsListCards = document.querySelector(".news-list__cards");
const preloader = document.querySelector(".preloader");
const noResult= document.querySelector(".no-result");
const noResultTitle = document.querySelector(".no-result__title");
const noResultSubtitle = document.querySelector(".no-result__subtitle");
const searchFormErrorMessage = document.querySelector(".search__form_error-message");
const dataStorage = new DataStorage();


let toDate = new Date();
let fromDate = new Date();
fromDate.setDate(fromDate.getDate() - 6);

const newsApi = new NewsApi( {
    baseUrl: 'https://newsapi.org/v2/everything',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({}),
    apiKey: '869ea205574e48f08dd11df3180523e8',
    pageSize: '100',
    from: getRequestFormattedDate(fromDate), // 7 дней от текущей даты, написать функции
    to: getRequestFormattedDate(toDate) //текущая дата
});

const newsCardList = new NewsCardList(newsListCards,dataStorage,createCard, preloader, noResult, noResultTitle, noResultSubtitle);
const searchInput = new SearchInput(newsApi, searchForm, searchFormInput, searchFormErrorMessage, newsCardList.startPreloader.bind(newsCardList), newsCardList.stopPreloader.bind(newsCardList), dataStorage);

function createCard(title, urlToImage, publishedAt, description, url){
    return  new NewCard(title, urlToImage, publishedAt, description, url);
}


/*                    <div class="card">
                       <img src="./images/image_01.jpg" alt="Эндемичное растение Америки" class="card__img">
                       <div class="card__datetime"> 2 августа, 2019</div>    
                       <h3 class="card__title">Национальное достояние – парки</h3>
                       <p class="card__paragraph">В 2016 году Америка отмечала важный
                            юбилей: сто лет назад здесь начала
                             складываться система национальных парков
                             – охраняемых территорий, где и сегодня
                            каждый может приобщиться к природе.
                       </p>
                       <a href="#" class="card__url">Лента.ру</a>
                    </div>
                    <div class="card">
                        <img src="./images/image_02.jpg" alt="Эндемичное растение Мексики" class="card__img">
                        <div class="card__datetime"> 2 августа, 2019</div>    
                        <h3 class="card__title">Лесные огоньки: история 
                            одной фотографии</h3>
                        <p class="card__paragraph card__paragraph_mexico">Фотограф отвлеклась от освещения суровой
                             политической реальности Мексики, чтобы
                            запечатлеть ускользающую красоту одного
                             из местных чудес природы. 
                        </p>
                        <a href="#" class="card__url">Медуза</a>
                     </div>
                     <div class="card">
                        <img src="./images/image_03.jpg" alt="Эндемичное растение Тайги" class="card__img">
                        <div class="card__datetime"> 2 августа, 2019</div>    
                        <h3 class="card__title">«Первозданная тайга»: новый фотопроект Игоря Шпиленка</h3>
                        <p class="card__paragraph">Знаменитый фотограф снимает 
                         первозданные леса России, чтобы рассказать о необходимости их сохранения. В 
                         этот раз он отправился в Двинско-Пинежскую тайгу, где... 
                        </p>
                        <a href="#" class="card__url">Медиазона</a>
                     </div>
                     <div class="card">
                        <img src="./images/image_04.jpg" alt="Эндемичное растение Тайги" class="card__img">
                        <div class="card__datetime"> 2 августа, 2019</div>    
                        <h3 class="card__title">«Первозданная тайга»: новый фотопроект Игоря Шпиленка</h3>
                        <p class="card__paragraph">Знаменитый фотограф снимает 
                         первозданные леса России, чтобы рассказать о необходимости их сохранения. В 
                         этот раз он отправился в Двинско-Пинежскую тайгу, где... 
                        </p>
                        <a href="#" class="card__url">Медиазона</a>
                     </div>
                     <div class="card">
                        <img src="./images/image_05.jpg" alt="Эндемичное растение Тайги" class="card__img">
                        <div class="card__datetime"> 2 августа, 2019</div>    
                        <h3 class="card__title">«Первозданная тайга»: новый фотопроект Игоря Шпиленка</h3>
                        <p class="card__paragraph">Знаменитый фотограф снимает 
                         первозданные леса России, чтобы рассказать о необходимости их сохранения. В 
                         этот раз он отправился в Двинско-Пинежскую тайгу, где... 
                        </p>
                        <a href="#" class="card__url">Медиазона</a>
                     </div>
                     <div class="card">
                        <img src="./images/image_06.jpg" alt="Эндемичное растение Тайги" class="card__img">
                        <div class="card__datetime"> 2 августа, 2019</div>    
                        <h3 class="card__title">«Первозданная тайга»: новый фотопроект Игоря  Шпиленка</h3>
                        <p class="card__paragraph">Знаменитый фотограф снимает 
                         первозданные леса России, чтобы рассказать о необходимости их сохранения. В 
                         этот раз он отправился в Двинско-Пинежскую тайгу, где... 
                        </p>
                        <a href="#" class="card__url">Медиазона</a>
                     </div>*/