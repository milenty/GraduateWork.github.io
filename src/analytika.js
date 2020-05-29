import "./pages/analytika.css";
import "./images/fb.svg";
import "./images/git.svg";

import {DataStorage} from "./js/modules/DataStorage";
import {Statistics} from "./js/components/Statistics";
import {getRequestFormattedDate} from "./js/utils/utils";

const keyWordElement = document.querySelector(".analytics__title_user-request");
const analyticsNewsPerWeekElement = document.getElementById("analyticsNewsPerWeek");
const analyticsNewsKeywordElement = document.getElementById("analyticsNewsKeyword");
const dataStorage = new DataStorage();

let dateFrom = new Date(dataStorage.getDateFrom());
let dateTo = new Date(dataStorage.getDateTo());
let newsdate = dateFrom;
let dayCount = 0;
let newsGridDataElements = [];


while (newsdate <= dateTo) {
    
    newsGridDataElements[dayCount] = {
        publishedAt:getRequestFormattedDate(newsdate),
        dataGridElement:document.querySelector(`.table__rectangle_${dayCount+1}`),
        axisYGridElement:document.querySelector(`.table__date_${dayCount+1}`),
        axisXGridElement:document.querySelector(`.table__rectangle_point-${dayCount+1}`)   
    };
    newsdate.setDate(newsdate.getDate() + 1);
    dayCount = dayCount + 1;
}   

new Statistics(dataStorage,keyWordElement,analyticsNewsPerWeekElement,analyticsNewsKeywordElement,newsGridDataElements);