let growth = 0;
let cancelGrowth;
const TREE_MAX_GROWTH = 1000;

chrome.storage.sync.get(['growth'], function(result) {
  if(!result) {
    chrome.storage.sync.set({growth: 0}, () => {
      console.log("Let's begin our growth.");
      growth = 0;
    })
  }
  growth = new Number(result.growth);
});

document.addEventListener("DOMContentLoaded", () => {
  setTimerElement();
  const removeListener = setCanvas();

  const timer = setInterval(setTimerElement ,1000);

  if(isEventSupported('beforeunload') || isEventSupported('unload')) {
    const event = isEventSupported('beforeunload') ? "beforeunload" : "unload";
    window.addEventListener(event, () => {
      clearInterval(timer);
      removeListener();
    });
  }

  setTimeout(() => {
    determineBodyBg(new Date().getHours());
  }, 150);

  setTimeout(animateIn ,450);

  const clear = document.getElementById("clear");
  if(clear) {
    clear.addEventListener("click", () => {
      growth = 0;
      chrome.storage.sync.set({growth}, () => {
        clearInterval(cancelGrowth);
        grow(growth);
        console.log("Growth reset");
      });
    });
  }

  const tree = new Tree("tree");
  tree.init();
});

const animateIn = () => {
  const grass = document.getElementById("grass");
  const dirt = document.getElementById("dirt");
  const canvas = document.getElementById("tree");

  grass.style.height = '50px';
  dirt.style.height = '100px';
  canvas.style.opacity = 1;

  grow(growth);
}

const grow = (initialGrowth) => {
  let growth = initialGrowth;
  const canvas = document.getElementById("tree");
  canvas.getContext("2d").clearRect(0,0,canvas.width,canvas.height);

  doInitialGrowth(initialGrowth);

  cancelGrowth = setInterval(() => {
    growth += 1;
    chrome.storage.sync.set({growth}, () => {});
    growCanvas(growth);
  }, 2500);
}

const doInitialGrowth = (growth) => {
  const canvas = document.getElementById("tree");
  const duration = 2500;
  const ctx = canvas.getContext("2d");
  const cWidth = canvas.width; const cHeight = canvas.height;
  const midWidth = cWidth / 2;
  const leftAnchor = midWidth - 100;
  const progress = growth/TREE_MAX_GROWTH > 1 ? 1 : growth/TREE_MAX_GROWTH;
  const fillAmount = Math.round(cHeight*(1-progress));

  let start = null;
  let end = null;
  let stop = false;

  function startAnim(timeStamp) {
    start = timeStamp;
    end = start + duration;
    draw(timeStamp);
  }

  function draw(now) {
    if (stop) return;
    if (now - start >= duration) stop = true;
    const percent = (now - start) / duration;
    const eased = inOutQuad(percent);
    const fillAmt = cHeight-fillAmount;
    const work = fillAmt*(1-eased);

    ctx.fillRect(leftAnchor, fillAmount+work, 200, cHeight);
    window.requestAnimationFrame(draw);
  }

  window.requestAnimationFrame(startAnim);
}

const growCanvas = (growth) => {
  const canvas = document.getElementById("tree");
  if(canvas && canvas.getContext) {
    const ctx = canvas.getContext("2d");
    const cWidth = canvas.width; const cHeight = canvas.height;
    const midWidth = cWidth / 2;
    
    const leftAnchor = midWidth - 100;
    const progress = growth/TREE_MAX_GROWTH > 1 ? 1 : growth/TREE_MAX_GROWTH;
    const fillAmount = Math.round(cHeight*(1-progress));
    ctx.clearRect(0,0,cWidth,cHeight);
    ctx.fillRect(leftAnchor, fillAmount, 200, cHeight);
  }
}

const setCanvas = () => {
  const canvas = document.getElementById("tree");
  if(canvas) {
    canvas.width = window.innerWidth*.80;
    canvas.height = window.innerHeight-250;
  }

  const resizeListener = (event) => {
    const canvas = document.getElementById("tree");
    if(canvas) {
      canvas.width = window.innerWidth*.80;
      canvas.height = window.innerHeight-250;
    }
  };

  window.addEventListener("resize", resizeListener);

  return () => {
    window.removeEventListener("resize", resizeListener);
  }
}

const setTimerElement = () => {
  const date = new Date();
  const hour = date.getHours() > 12 ? date.getHours() - 12 : date.getHours();
  const minutes = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes();
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

const determineBodyBg = (hour) => {
  const colorMap = determineColorMap(hour);
  if(getComputedStyle(document.documentElement).getPropertyValue('--bg-color') !== colorMap.bg) {
    document.documentElement.style.setProperty('--bg-color', colorMap.bg);
    document.documentElement.style.setProperty('--text-color', colorMap.text);
  }
}

const determineColorMap = (hour) => {
  const colorMap = {
    day: {
      bg: "#87CEEB",
      text: "#160A47"
    },
    sunrise: {
      bg: "#FFCA7C",
      text: "#160A47"
    },
    sunset: {
      bg: "#FEC051",
      text: "#160A47"
    },
    evening: {
      bg: "#160A47",
      text: "#87CEEB"
    }
  };

  if(hour>=19||hour<6) { //evening
    return colorMap.evening;
  } else if(hour>=6&&hour<8) { //sunrise
    return colorMap.sunrise;
  } else if(hour>=8&&hour<17) { //day
    return colorMap.day;
  } else if(hour>=17&&hour<19) { //sunset
    return colorMap.sunset;
  } else { //default to day
    return colorMap.day;
  }
}
