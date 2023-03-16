"use strict";
//===============ELEMENTS SELECTION====================
const sidebarParent = document.querySelector(".sidebar");
const menuItems = document.querySelectorAll(".menu-item");

//MESSAGES elements selections
const messageNotification = document.querySelector("#messages-notification");
const messages = document.querySelector(".messages");

const message = messages.querySelectorAll(".message");
const messageSearch = document.querySelector("#message-search");

//THEME elements selection
const theme = document.querySelector("#theme");
const themeModal = document.querySelector(".customized-theme");
const fontSize = document.querySelectorAll(".choose-size span");
var root = document.querySelector(":root");
const colorPallete = document.querySelectorAll(".choose-color span");

const Bg1 = document.querySelector(".bg-1");
const Bg2 = document.querySelector(".bg-2");
const Bg3 = document.querySelector(".bg-3");

//==========+++CLICKING MENU ITEM++++=========
const changeActiveItem = () => {
  menuItems.forEach((item) => item.classList.remove("active"));
};

menuItems.forEach((item) => {
  item.addEventListener("click", () => {
    changeActiveItem();
    item.classList.add("active");

    if (item.id === "notifications") {
      document.querySelector(".notifications-popup").style.display = "block";

      document.querySelector(
        "#notifications .notification-count"
      ).style.display = "none";
    } else {
      document.querySelector(".notifications-popup").style.display = "none";
    }
  });
});

//=========MESSAGES=========
const searchMessage = () => {
  const val = messageSearch.value.toLowerCase();
  console.log(val);
  message.forEach((user) => {
    let name = user.querySelector("h5").textContent.toLowerCase();

    if (name.indexOf(val) === -1) {
      user.style.display = "none";
    } else {
      user.style.display = "flex";
    }
  });
};

messageSearch.addEventListener("keyup", searchMessage);

//=======HIGHLIGHT MESSAGE CARD when the messages menu is clicked
messageNotification.addEventListener("click", () => {
  messages.style.boxShadow = "0 0 1rem var(--color-primary)";

  setTimeout(() => {
    messages.style.boxShadow = "none";
  }, 2000);

  document.querySelector(
    "#messages-notification .notification-count"
  ).style.display = "none";
});

//========+++++THEME DISPLAY CUSTOMIZATION+++++========
const openModal = () => {
  themeModal.style.display = "grid";
};

const closeThemeModal = (e) => {
  if (e.target.classList.contains("customized-theme")) {
    themeModal.style.display = "none";
  }
};
themeModal.addEventListener("click", closeThemeModal);

theme.addEventListener("click", openModal);

//==========+++++FONTS+++++==============

//remove active class from span or font size selector
const removeSizeSelector = () => {
  fontSize.forEach((size) => {
    size.classList.remove("active");
  });
};

fontSize.forEach((size) => {
  size.addEventListener("click", () => {
    removeSizeSelector();
    let fontSize;
    size.classList.toggle("active");

    if (size.classList.contains("font-size-1")) {
      fontSize = "10px";
      root.style.setProperty("--sticky-top-left", "5.4rem");
      root.style.setProperty("--sticky-top-right", "5.4rem");
    } else if (size.classList.contains("font-size-2")) {
      fontSize = "13px";
      root.style.setProperty("--sticky-top-left", "5.4rem");
      root.style.setProperty("--sticky-top-right", "-7rem");
    } else if (size.classList.contains("font-size-3")) {
      fontSize = "16px";
      root.style.setProperty("--sticky-top-left", "-2rem");
      root.style.setProperty("--sticky-top-right", "-17rem");
    } else if (size.classList.contains("font-size-4")) {
      fontSize = "19px";
      root.style.setProperty("--sticky-top-left", "5rem");
      root.style.setProperty("--sticky-top-right", "-25rem");
    } else if (size.classList.contains("font-size-1")) {
      fontSize = "22px";
      root.style.setProperty("--sticky-top-left", "12rem");
      root.style.setProperty("--sticky-top-right", "-35rem");
    }

    //change font size of the rrot html
    document.querySelector("html").style.fontSize = fontSize;
  });
});

//===========COLOR==============

//remove active class from all colorr
const changeActiveColor = () => {
  colorPallete.forEach((colorPicker) => {
    colorPicker.classList.remove("active");
  });
};
//change primary color
colorPallete.forEach((color) => {
  color.addEventListener("click", () => {
    let primaryHue;
    //remove actuve class from all colorr
    changeActiveColor();

    if (color.classList.contains("color-1")) {
      primaryHue = 252;
    } else if (color.classList.contains("color-2")) {
      primaryHue = 52;
    } else if (color.classList.contains("color-3")) {
      primaryHue = 352;
    } else if (color.classList.contains("color-4")) {
      primaryHue = 152;
    } else if (color.classList.contains("color-5")) {
      primaryHue = 202;
    }
    color.classList.add("active");

    root.style.setProperty("--primary-color-hue", primaryHue);
  });
});

//theme background value
let lightColorLightness;
let whiteColorLightness;
let darkColorLightness;

//change background color
const changeBg = () => {
  root.style.setProperty("--light-color-lightness", lightColorLightness);
  root.style.setProperty("--white-color-lightness", whiteColorLightness);
  root.style.setProperty("--dark-color-lightness", darkColorLightness);
};

//bg1
Bg1.addEventListener("click", () => {
  darkColorLightness = "95%";
  whiteColorLightness = "20%";
  lightColorLightness = "15%";

  //add active class
  Bg1.classList.add("active");
  //remove active class from others
  Bg2.classList.remove("active");
  Bg3.classList.remove("active");
  changeBg();

  //remove costumized changes from local storage
  window.location.reload();
});

//bg2
Bg2.addEventListener("click", () => {
  darkColorLightness = "95%";
  whiteColorLightness = "20%";
  lightColorLightness = "15%";

  //add active class
  Bg2.classList.add("active");
  //remove active class from others
  Bg1.classList.remove("active");
  Bg3.classList.remove("active");
  changeBg();
});

//bg3

Bg3.addEventListener("click", () => {
  darkColorLightness = "95%";
  whiteColorLightness = "10%";
  lightColorLightness = "0%";

  //add active class
  Bg3.classList.add("active");
  //remove active class from others
  Bg1.classList.remove("active");
  Bg2.classList.remove("active");
  changeBg();
});
