document.addEventListener("DOMContentLoaded", () => {
  setTimerElement();

  const timer = setInterval(setTimerElement ,1000);

  if(isEventSupported('beforeunload') || isEventSupported('unload')) {
    const event = isEventSupported('beforeunload') ? "beforeunload" : "unload";
    window.addEventListener(event, () => {
      clearInterval(timer);
    });
  }

  setTimeout(() => {
    determineBodyBg(new Date().getHours());
  }, 150);
});

const setTimerElement = () => {
  const date = new Date();
  const hour = date.getHours() > 12 ? date.getHours() - 12 : date.getHours();
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
