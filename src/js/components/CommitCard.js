export class CommitCard {
    constructor(committerName, committerEmail, committerDate, commitMessage, authorAvatarUrl) {
        this.committerName = committerName;
        this.committerEmail = committerEmail;
        this.committerDate = committerDate;
        this.commitMessage = commitMessage;
        this.authorAvatarUrl = authorAvatarUrl;
        this.cardElement = this.createElement(); 
    }

    //Cоздаём DOM-элемент карточки для html
    createElement () {
        const commitCard = document.createElement('div');
        //По умолчанию не видима
        const commitCardInner = document.createElement('div');//slider__item_inner
        const commitCardDate = document.createElement('div'); //slider__item_datetime
        const commitItemAvatar = document.createElement('div');//slider__item_avatar
        const commitItemImg = document.createElement('img');//slider__item_img
        const commmitCardAuthor = document.createElement('div');//slider__item_author
        const commmitCardName = document.createElement('p');//slider__item_name
        const commitCardPost = document.createElement('a');//slider__item_post
        const commitCardText = document.createElement('p');//slider__item_text

        //Добавляем классы
        commitCard.classList.add('slider__item');
        commitCardInner.classList.add('slider__item_inner');
        
        commitCardDate.classList.add('slider__item_datetime');
        commitCardDate.textContent =  this.committerDate; 
        commitItemAvatar.classList.add('slider__item_avatar');
        commitItemImg.classList.add('slider__item_img');
        commitItemImg.setAttribute('src', this.authorAvatarUrl); 
        commmitCardAuthor.classList.add('slider__item_author');
        commmitCardName.classList.add('slider__item_name');
        commmitCardName.textContent = this.committerName; 
        commitCardPost.classList.add('slider__item_post'); 
        commitCardPost.textContent = this.committerEmail; 
        commitCardText.classList.add('slider__item_text'); 
        commitCardText.textContent = this.commitMessage; 

        //Устанавливаем зависимость
        commitCard.appendChild(commitCardInner);
        commitCardInner.appendChild(commitCardDate);
        commitCardInner.appendChild(commitItemAvatar);
        commitItemAvatar.appendChild(commitItemImg);
        commitItemAvatar.appendChild(commmitCardAuthor);
        commmitCardAuthor.appendChild(commitCardPost);
        commmitCardAuthor.appendChild(commmitCardName);
        commitCardInner.appendChild(commitCardText);

        return commitCard
    }
}
