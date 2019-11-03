import Tree from './tree';
import Weather from './weather';

let start = null;

if(chrome) {
  chrome.storage.sync.get(['tree'], (res) => {
    if(!res) {
      let tree = 0;
      chrome.storage.sync.set({tree}, () => {

      })
    }
  })
} else {

}

const init = () => {

}

document.addEventListener("DOMContentLoaded", init, true);
