// service tab modals
const serviceTabModalWrapper = document.querySelectorAll(
  '.service-tab-modal-wrapper'
);
const serviceTabModal = document.querySelectorAll('.service-tab-modal');
const exitBtn = document.querySelectorAll('.exit');
const tab = document.querySelectorAll('.service-tab');
// const serviceTab1 = document.querySelector('.st1');
// const serviceTab2 = document.querySelector('.st2');
// const serviceTab3 = document.querySelector('.st3');
// const serviceTab4 = document.querySelector('.st4');
// const serviceTab5 = document.querySelector('.st5');
// const serviceTab6 = document.querySelector('.st6');
// const serviceTab7 = document.querySelector('.st7');
// const serviceTab8 = document.querySelector('.st8');
// const serviceTab9 = document.querySelector('.st9');
// const serviceTab10 = document.querySelector('.st10');
// const serviceTab11 = document.querySelector('.st11');
// const serviceTab12 = document.querySelector('.st12');
// const serviceTab13 = document.querySelector('.st13');
// const serviceTab14 = document.querySelector('.st14');

// const stmWrapper1 = document.querySelectorAll('.stw1');
// const stmWrapper2 = document.querySelector('.stw2');
// const stmWrapper3 = document.querySelector('.stw3');
// const stmWrapper4 = document.querySelector('.stw4');
// const stmWrapper5 = document.querySelector('.stw5');
// const stmWrapper6 = document.querySelector('.stw6');
// const stmWrapper7 = document.querySelector('.stw7');
// const stmWrapper8 = document.querySelector('.stw8');
// const stmWrapper9 = document.querySelector('.stw9');
// const stmWrapper10 = document.querySelector('.stw10');
// const stmWrapper11 = document.querySelector('.stw11');
// const stmWrapper12 = document.querySelector('.stw12');
// const stmWrapper13 = document.querySelector('.stw13');
// const stmWrapper14 = document.querySelector('.stw14');

tab.forEach((e, index) => {
  e.addEventListener('click', () => {
    serviceTabModalWrapper[index].classList.add('active');
  });
});

exitBtn.forEach((e, index) => {
  e.addEventListener('click', (e) => {
    serviceTabModalWrapper[index].classList.remove('active');
  });
});

serviceTabModalWrapper.forEach((e) => {
  e.addEventListener('click', (e) => {
    e.target.classList.remove('active');
  });
});
