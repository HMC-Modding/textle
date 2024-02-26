const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

let interval = null;

var list, index;
list = document.getElementsByClassName("scramble");
for (index = 0; index < list.length; ++index) {
  list[index].setAttribute("onmouseover", "scramble(this)");
  list[index].setAttribute("data-value", list[index].innerText);
}

function scramble(x) {
  let iteration = 0;

  //clearInterval(interval);

  interval = setInterval(() => {
    x.innerText = x.dataset.value
      .split("")
      .map((letter, index) => {
        if (index < iteration) {
          return x.dataset.value[index];
        }

        return letters[Math.floor(Math.random() * 26)];
      })
      .join("");

    if (iteration >= x.dataset.value.length) {
      x.innerText = x.dataset.value
      clearInterval(interval);
    }

    iteration += 1 / 2;
  }, 30);
}
