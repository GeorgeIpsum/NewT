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


const inOutQuad = (n) => {
  n *= 2;
  if (n < 1) return 0.5 * n * n;
  return - 0.5 * (--n * (n - 2) - 1);
}
