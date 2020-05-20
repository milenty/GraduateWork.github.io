import {getFormattedDate} from '../utils/utils.js';

class NewCard {
    constructor(title, urlToImage, publishedAt, description, url, container) {
        this.title = title;
        this.urlToImage = urlToImage;
        this.publishedAt = publishedAt;
        this.description = description;
        this.url = url;
        this.container = container;
        this.cardElement = this.createElement(); 
    }
    
    //Cоздаём DOM-элемент карточки для html
    createElement () {
        const card = document.createElement('div');
        const cardImage = document.createElement('img');
        const cardDate = document.createElement('div');
        const cardTitle = document.createElement('h3');
        const cardDescription = document.createElement('p');
        const cardLink = document.createElement('a');

    //Добавляем классы
        card.classList.add('card');
        cardImage.classList.add('card__img');
        cardImage.setAttribute('src', urlToImage); // фото для карточки
        cardDate.classList.add('card__datetime');
        cardDate.textContent = getViewFormattedDate (this.publishedAt); //дата для карточки, разобраться, откуда брать !!!????
        cardTitle.classList.add('card__title');
        cardTitle.textContent = title; //название карточки
        cardDescription.classList.add('card__paragraph');
        cardDescription.textContent = description; //текст карточки
        cardLink.classList.add('card__url');
        cardLink.textContent = url; //ссылка карточки

    //Устанавливаем зависимость
        card.appendChild(CardImage);
        card.appendChild(CardDate);
        card.appendChild(CardTitle);
        card.appendChild(CardDescription);
        card.appendChild(СardLink);

        return card
    }   
 
};

        
       
        