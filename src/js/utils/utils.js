function getViewFormattedDate(dateString) {
    const theDate = new Date (dateString);
    const mounths = ['января', 'февраля', ' марта', 'апреля', 'мая', 'июня', ' июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря']
  return (theDate.getDate().toString()  + ' ' + mounths[theDate.getMonth()] + ',' + ' ' + theDate.getFullYear().toString());
}

export function getRequestFormattedDate() {
  theDate = new Date();
  return ( theDate.getFullYear().toString() + '-' + theDate.getMonth().toString() + '-' + theDate.getDate().toString());
}

