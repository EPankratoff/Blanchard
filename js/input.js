const tel = document.querySelector('input[type="tel"]');

Inputmask({
  mask: "+7 (999) 999-99-99",
}).mask(tel);

const name = document.querySelector('input[type="text"]');

Inputmask({
  placeholder: "ИМЯ",
}).mask(name);

const search = document.querySelector('input[type="search"]');

Inputmask({
  placeholder: "",
}).mask(search);

const searchInput = document.querySelector('input[type="search"]');

searchInput.addEventListener("focus", function () {
  this.placeholder = "";
});

const nameInput = document.querySelector('input[type="text"]');

nameInput.addEventListener("focus", function () {
  this.placeholder = "";
});

new window.JustValidate(".contacts__form", {
  colorWrong: "#9d5cd0",
  rules: {
    name: {
      required: true,
      minLength: 2,
      maxLength: 30,
    },
    phone: {
      required: true,
      function: () => {
        const phone = tel.inputmask.unmaskedvalue();
        return Number(phone) && phone.length === 10;
      },
    },
  },
  messages: {
    name: {
      required: "Как вас зовут?",
      minLength: "Минимальное число символов - 2",
      maxLength: "Максимальное число символов -30",
    },
    phone: "Укажите ваш телефон",
  },
});
