//using selectors inside the element

// const questions = document.querySelectorAll('.question');

// questions.forEach((question) => {
//   const btn = question.querySelector('.question-btn');
//   btn.addEventListener('click', () => {
//     questions.forEach((item) => {
//       if (item !== question) {
//         item.classList.remove('show-text');
//       }
//     });
//     question.classList.toggle('show-text');
//   });
// });

// traversing the dom

// const btns = document.querySelectorAll('.question-btn');

// btns.forEach((btn) => {
//   btn.addEventListener('click', (e) => {
//     const question = e.currentTarget.parentElement.parentElement;
//     question.classList.toggle('show-text');
//   });
// });

// my solution without following course

const question = document.querySelectorAll('.question');
const plusIcon = document.querySelectorAll('.plus-icon');
const minusIcon = document.querySelectorAll('.minus-icon');

for (let i = 0; i < question.length; i++) {
  plusIcon[i].addEventListener('click', () => {
    question.forEach((item) => {
      item.classList.remove('show-text');
    });
    question[i].classList.add('show-text');
  });

  minusIcon[i].addEventListener('click', () => {
    question[i].classList.remove('show-text');
  });
}