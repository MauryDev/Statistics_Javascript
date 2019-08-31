function HTML(obj) {
  if (typeof obj === "object") {
    let element = 0;
    while (element < document.querySelectorAll(obj.name).length) {
      document.querySelectorAll(obj.name)[element]
      .innerHTML = obj.txt;
      element += 1;
    }
  } else {
    return {
      add: function(obj) {
        if (obj.atr === "id") {
          document.getElementById(obj.name).innerHTML += obj.txt;
        }
        if (obj.atr === "class") {
          for (let element in document.getElementsByClassName(obj.name)) {
            if (document.getElementsByClassName(obj.name).length > 1) {
              document.getElementsByClassName(obj.name)[element]
              .innerHTML += obj.txt;
            }
          }
        }
      },
      reset: function(obj) {
        if (obj.atr === "id") {
          document.getElementById(obj.name).innerHTML = "";
        }
        if (obj.atr === "class") {
          for (let element in document.getElementsByClassName(obj.name)) {
            if (document.getElementsByClassName(obj.name).length > 1) {
              document.getElementsByClassName(obj.name)[element]
              .innerHTML = "";
            }
          }
        }
      }
    }
  }
}
async function CSS(obj) {
  for (let element in document.querySelectorAll(obj.name)) {
    if (typeof document.querySelectorAll(obj.name)[element]) {
      document.querySelectorAll(obj.name)[element].style[obj.atr] = obj.value;
    }
  }
}

export { HTML, CSS };