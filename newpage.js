document.addEventListener("DOMContentLoaded", () => {
  setTimerElement();

  const timer = setInterval(setTimerElement ,1000);

  if(isEventSupported('beforeunload') || isEventSupported('unload')) {
    const event = isEventSupported('beforeunload') ? "beforeunload" : "unload";
    window.addEventListener(event, () => {
      clearInterval(timer);
    });
  }
});

const setTimerElement = () => {
  const date = new Date();
  const hour = date.getHours();
  const minutes = date.getMinutes();
  const dateString = hour + ':' + minutes;
  const formattedDateString = date.toISOString();

  const dateElement = document.getElementById("time");
  if(dateElement) {
    dateElement.dateTime = formattedDateString;
    if(dateElement.innerHTML !== dateString) {
      dateElement.innerHTML = dateString;
    }
  }
}

const isEventSupported = (function() {
  const TAGNAMES = {
    'select':'input','change':'input',
    'submit':'form','reset':'form',
    'error':'img','load':'img','abort':'img',
    'beforeunload':'window','unload':'window'
  };
  function isEventSupported(eventName) {
    let el = document.createElement(TAGNAMES[eventName] || 'div');
    eventName = 'on' + eventName;
    let isSupported = (eventName in el);
    if(!isSupported) {
      el.setAttribute(eventName, 'return;');
      isSupported = typeof el[eventName] === 'function';
    }
    el = null;
    return isSupported;
  }
  return isEventSupported;
})();
