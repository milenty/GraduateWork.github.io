import {STORAGE_RESULT_KEY, STORAGE_OBJECTS_KEY, SUCCESS} from '../constants/constants';

export class DataStorage {
    resetCards(){
        if (localStorage.getItem(STORAGE_RESULT_KEY) != null) {
            localStorage.removeItem(STORAGE_RESULT_KEY);
        }

        if (localStorage.getItem(STORAGE_OBJECTS_KEY) != null) {
            localStorage.removeItem(STORAGE_OBJECTS_KEY);
        }
    }
    setCards(resultItem, objectsItem){
        localStorage.setItem(STORAGE_RESULT_KEY, resultItem);
        if (objectsItem != undefined) {
            localStorage.setItem(STORAGE_OBJECTS_KEY, objectsItem);
        }
    }
    getCards()
    {
        let resArr = JSON.parse(localStorage.getItem(STORAGE_OBJECTS_KEY));
        if (resArr != null)
            return resArr.articles;
        else
            return null;
    }

    resultSuccess()
    {
        return (JSON.parse(localStorage.getItem(STORAGE_RESULT_KEY)).RESULT===SUCCESS);
    }

    resultError()
    {
        return JSON.parse(localStorage.getItem(STORAGE_RESULT_KEY)).ERRORMESSAGE;
    }

    resultKeyWord()
    {
        return JSON.parse(localStorage.getItem(STORAGE_RESULT_KEY)).KEYWORD;
    }
    getDateFrom()
    {
        return JSON.parse(localStorage.getItem(STORAGE_RESULT_KEY)).DATEFROM;
    }
    getDateTo()
    {
        return JSON.parse(localStorage.getItem(STORAGE_RESULT_KEY)).DATETO;
    }
}