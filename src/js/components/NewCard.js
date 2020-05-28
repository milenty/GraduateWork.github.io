import {getViewFormattedDate} from "../utils/utils";

export class NewCard {
    constructor(title, urlToImage, publishedAt, description, url) {
        this.title = title;
        this.urlToImage = urlToImage;
        this.publishedAt = publishedAt;
        this.description = description;
        this.url = url;
        this.cardElement = this.createElement(); 
    }
    
    //Cоздаём DOM-элемент карточки для html
    createElement () {
        const card = document.createElement('div');
        //По умолчанию не видима
        const cardImage = document.createElement('img');
        const cardDate = document.createElement('div');
        const cardTitle = document.createElement('h3');
        const cardDescription = document.createElement('p');
        const cardLink = document.createElement('a');

    //Добавляем классы
        card.classList.add('card');
        cardImage.classList.add('card__img');
        cardImage.setAttribute('src', this.urlToImage); // фото для карточки
        cardDate.classList.add('card__datetime');
        cardDate.textContent = getViewFormattedDate (this.publishedAt); //дата для карточки, разобраться, откуда брать !!!????
        cardTitle.classList.add('card__title');
        cardTitle.textContent = this.title; //название карточки
        cardDescription.classList.add('card__paragraph');
        cardDescription.textContent = this.description; //текст карточки
        cardLink.classList.add('card__url');
        cardLink.textContent = this.url; //ссылка карточки

    //Устанавливаем зависимость
        card.appendChild(cardImage);
        card.appendChild(cardDate);
        card.appendChild(cardTitle);
        card.appendChild(cardDescription);
        card.appendChild(cardLink);

        return card
    }


    //Убираем карточку из разметки
    removeCard()
    {
        this.cardElement.remove()
    }

    //Оторазить карточку
    showCard(containerElement){
        containerElement.appendChild(this.cardElement);
    }
};

        
       
        