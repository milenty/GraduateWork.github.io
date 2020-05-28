export function getViewFormattedDate(dateString) {
    const theDate = new Date (dateString);
    const mounths = ['января', 'февраля', ' марта', 'апреля', 'мая', 'июня', ' июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря']
  return (theDate.getDate().toString()  + ' ' + mounths[theDate.getMonth()] + ',' + ' ' + theDate.getFullYear().toString());
}

export function getRequestFormattedDate(theDate) {
  return ( theDate.getFullYear().toString() + '-' + ('0' + String(theDate.getMonth() + 1)).slice(-2) + '-' + theDate.getDate().toString());
}

export function getAxisFormattedDate(dateString) {
  const theDate = new Date (dateString);
  const days = [' вс','пн', 'вт', ' ср', 'чт', 'пт', 'сб'];
  return ( theDate.getDate().toString() + ',' + days[theDate.getDay()]);
}
