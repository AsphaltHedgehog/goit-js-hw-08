
import throttle from 'lodash.throttle';

// ===================================================

const refs = {
  form: document.querySelector(".feedback-form"),
  formEmail: document.querySelector('[name="email"]'),
  formMessage: document.querySelector('[name="message"]'),
  submitButton: document.querySelector("button"),
  FORM_SAVED_INPUT: 'feedback-form-state',
  input: {},
};

// =====================================================

if (localStorage.getItem('feedback-form-state')) {
  const savedInput = JSON.parse(localStorage.getItem('feedback-form-state'));
  refs.formEmail.value = savedInput.email;
  refs.formMessage.value = savedInput.message;
};

// =====================================================

const onInput = function () {
  refs.input.email = refs.form.email.value;
  refs.input.message = refs.form.message.value;
  localStorage.setItem(refs.FORM_SAVED_INPUT, JSON.stringify(refs.input));
}

refs.form.addEventListener("input", throttle(onInput, 500));

// ========================================================

const submit = function (ev) {
  ev.preventDefault();
  if (refs.input.email && refs.input.message) {
    console.log(refs.input);

    localStorage.removeItem(refs.FORM_SAVED_INPUT)

    refs.form.reset();
  } else {
    alert("АЛЯРМ!!!Заполните оба поля!!!АЛЯРМ")
  };
};

refs.submitButton.addEventListener("click", submit);

