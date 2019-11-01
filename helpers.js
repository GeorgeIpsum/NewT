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
