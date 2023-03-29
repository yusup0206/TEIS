// feed back modals
const modalWrapper = document.querySelectorAll('.feed-back-modal-wrapper');
const modal = document.querySelectorAll('.feed-back-modal');
const feedbackImg = document.querySelectorAll('.feed-back-img');

feedbackImg.forEach((e, index) => {
  e.addEventListener('click', () => {
    modalWrapper[index].classList.add('active');
  });
});

modalWrapper.forEach((e) => {
  e.addEventListener('click', (e) => {
    e.target.classList.remove('active');
  });
});
