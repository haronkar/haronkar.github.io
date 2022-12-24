let buttonWrapper = document.querySelector(".interest div");
let buttons = document.querySelectorAll(".interest button");

buttons.forEach((button) => {
  addEvent(button);
});

function addEvent(button) {
  button.addEventListener("click", (e) => {
    buttonWrapper.style.pointerEvent = "none";

    const target = e.target;
    const active = document.querySelector(".active");

    const offsetActiveX = active.getBoundingClientRect().x;
    const offsetTargetX = target.getBoundingClientRect().x;
    const translateOffset = Math.round(offsetTargetX - offsetActiveX);

    if (active) {
      active.classList.remove("active");
    }
    target.classList.add("active");

    buttonWrapper.style.transform =
      "translate3d(-" + translateOffset + "px, 0, 0)";

    const sibling = target.nextSibling.nextElementSibling;
    sibling.style.pointerEvents = "none";

    buttonWrapper.ontransitionend = (e) => {
      if (e.propertyName == "transform") {
        ResetWrapper(active);
        setTimeout(() => {
          sibling.style = "";
        }, 200);
      }
    };

    e.stopPropagation();
    const allContent = document.querySelectorAll(".interest-content .content");

    allContent.forEach((content) => {
      if (
        content.getAttribute("data-number") ===
        button.getAttribute("data-number")
      ) {
        content.style.display = "block";
      } else {
        content.style.display = "none";
      }
    });
    e.preventDefault();
  });
}

function ResetWrapper(value) {
  addButton(value.getAttribute("data-number"));
  value.remove();
  buttonWrapper.style = "";
  buttonWrapper.style.transition = "none 0s ease 0s";
  setTimeout(() => {
    buttonWrapper.style = "";
    buttons = document.querySelectorAll(".interest button");
  }, 1);
}
function addButton(value) {
  console.log(value);
  if (value == 1) {
    buttonWrapper.appendChild(createButtonItem("Gaming", 1));
  } else if (value == 2) {
    buttonWrapper.appendChild(createButtonItem("Anime", 2));
  } else if (value == 3) {
    buttonWrapper.appendChild(createButtonItem("manga", 3));
  }
  //   b = createButtonItem("Manga", 3);
}
function createButtonItem(name, number) {
  let item = document.createElement("button");
  item.textContent = name;
  item.setAttribute("data-number", number);
  item.className = "";
  addEvent(item);
  return item;
}

const textToCopy = document.getElementById("email");
function copyText() {
  navigator.clipboard.writeText(textToCopy.innerText);
  textToCopy.setAttribute("data-title", "copied!");
}
textToCopy.addEventListener("mouseout", (event) => {
  setTimeout(() => {
    textToCopy.setAttribute("data-title", "click to copy");
  }, 300);
});
