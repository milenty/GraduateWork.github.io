import "./pages/about.css";
import "./images/NewsAnalyzer_blc.svg";
import "./images/control2.png";
import "./images/html.jpg";
import "./images/css.jpg";
import "./images/js.jpg";
import "./images/web2.jpg";
import "./images/image-03.jpg";
import "./images/Path_5.svg";
import "./images/fb.svg";
import "./images/git.svg";
import "./images/image-sl-01.jpg";
import "./images/image-sl-03.jpg";
import "./images/image-sl-04.jpg";
import $ from 'jquery';
import 'slick-carousel';

import {GithubApi} from "./js/modules/GithubApi";
import {CommitCardList} from "./js/components/CommitCardList";
import {CommitCard} from "./js/components/CommitCard";

const githubApi = new GithubApi( {
    url: 'https://api.github.com/repos/milenty/GraduateWork.github.io/commits'
});

const commitCardListElement = document.querySelector(".slider");
const commitCardList = new CommitCardList(githubApi, commitCardListElement, createCard,initSlider);

function createCard(committerName, committerEmail, committerDate, commitMessage, authorAvatarUrl){
  return  new CommitCard(committerName, committerEmail, committerDate, commitMessage, authorAvatarUrl);
}

function initSlider() {
  $('.slider').slick({
    arrows: true,
    dots: true,
    adaptiveHeight: true,
    centerMode: true,
    centerPadding: '60px',
    slidesToShow: 3,
    slidesToScroll: 1,
    speed:100,
    easing: 'linear',
    responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '0px',
        slidesToShow: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '16px',
        slidesToShow: 1
      }
    }
  ]
  });
}
/*
<div class="slider__item slider__item_1"> 
                        <div class="slider__item_inner">
                            <div class="slider__item_datetime"> 14 августа, 2019</div>  
                            <div class="slider__item_avatar">
                                <img class="slider__item_img" src="./images/image-sl-01.jpg" alt="Антон Долинин">
                                <div class="slider__item_author">
                                    <p class="slider__item_name">Антон Долинин</p>
                                    <a class="slider__item_post" href="mailto:anton@yandex.ru">anton@yandex.ru</a>
                                </div>  
                            </div>   
                            <p class="slider__item_text">Emmet (formerly Zen Coding)
                            is a web- developer’s toolkit that can greatly 
                            improve your HTML & CSS workflow.
                            </p>  
                        </div> 
                    </div>
                    <div class="slider__item slider__item_2">
                        <div class="slider__item_inner">
                            <div class="slider__item_datetime"> 14 августа, 2019</div>  
                            <div class="slider__item_avatar">
                                <img class="slider__item_img" src="./images/image-sl-03.jpg" alt="Антон Долинин">
                                <div class="slider__item_author">
                                    <p class="slider__item_name">Антон Долинин</p>
                                    <a class="slider__item_post" href="mailto:anton@yandex.ru">anton@yandex.ru</a>
                                </div>  
                            </div>   
                            <p class="slider__item_text">Emmet (formerly Zen Coding)
                            is a web- developer’s toolkit that can greatly 
                            improve your HTML & CSS workflow.
                            </p>     
                        </div> 
                    </div>
                    <div class="slider__item slider__item_3">
                        <div class="slider__item_inner">
                            <div class="slider__item_datetime"> 14 августа, 2019</div>  
                            <div class="slider__item_avatar">
                                <img class="slider__item_img" src="./images/image-sl-04.jpg" alt="Мария Фёдорова">
                                <div class="slider__item_author">
                                    <p class="slider__item_name">Мария Фёдорова</p>
                                    <a class="slider__item_post" href="mailto:mariiifed@yandex.ru">mariiifed@yandex.ru</a>
                                </div>  
                            </div>   
                            <p class="slider__item_text"> You can install this plugin directly from NetBeans
                                Plugin Portal: in NetBeans,open <span class="slider__item_another-text">Tools
                                > Plugins > Available plugins</span> and
                                find and install Emmet plugin.
                            </p>     
                        </div> 
                    </div>
                    <div class="slider__item slider__item_4">
                        <div class="slider__item_inner">
                            <div class="slider__item_datetime"> 14 августа, 2019</div>  
                            <div class="slider__item_avatar">
                                <img class="slider__item_img" src="./images/image-sl-01.jpg" alt="Антон Долинин">
                                <div class="slider__item_author">
                                    <p class="slider__item_name">Антон Долинин</p>
                                    <a class="slider__item_post" href="mailto:anton@yandex.ru">anton@yandex.ru</a>
                                </div>  
                            </div>   
                            <p class="slider__item_text">Emmet (formerly Zen Coding)
                            is a web- developer’s toolkit that can greatly 
                            improve your HTML & CSS workflow.
                            </p>     
                        </div>
                    </div>
                    <div class="slider__item slider__item_5">
                        <div class="slider__item_inner">
                            <div class="slider__item_datetime"> 14 августа, 2019</div>  
                            <div class="slider__item_avatar">
                                <img class="slider__item_img" src="./images/image-sl-01.jpg" alt="Антон Долинин">
                                <div class="slider__item_author">
                                    <p class="slider__item_name">Антон Долинин</p>
                                    <a class="slider__item_post" href="mailto:anton@yandex.ru">anton@yandex.ru</a>
                                </div>  
                            </div>   
                            <p class="slider__item_text">Emmet (formerly Zen Coding)
                            is a web- developer’s toolkit that can greatly 
                            improve your HTML & CSS workflow.
                            </p>     
                        </div> 
                    </div>*/