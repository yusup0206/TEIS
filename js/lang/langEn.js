const textDiv = document.querySelector('.about-us-text');

const langEn = {
  aboutUs: {
    sectionName: 'About us',
    sectionHeader: 'Lorem ipsum dolor sit.',
    sectionText:
      'Компания «TEIS» предлагает готовые решения для предприятий по установке и техническому обслуживанию средств измерений. Мы готовы взять на себя все виды работ с нуля под ключ, непрерывно контролировать работоспособность и периодичность поверки приборов учета, информировать Вас об их состоянии, гарантировать надежную работу средств измерений. Компания «TEIS» предлагает готовые решения для предприятий по установке и техническому обслуживанию. Фото сотрудников',
    sectionLink: 'Explore More',
  },
};

const tr = [
  { el: '.querySelector', content: 'CONTACT SEX' },
  { el: '.querySelector', content: 'CONTACT SEX' },
  { el: '.querySelector', content: 'CONTACT SEX' },
  { el: '.querySelector', content: 'CONTACT SEX' },
];

const formInput = document.querySelector('.contact-form input');
formInput.placeholder = 'string';

function lang() {
  const sectionName = document.createElement('span');
  const sectionHeader = document.createElement('h2');
  const sectionText = document.createElement('p');
  const sectionLink = document.createElement('a');
  sectionName.innerText = `${langEn['aboutUs']['sectionName']}`;
  sectionHeader.innerText = `${langEn['aboutUs']['sectionHeader']}`;
  sectionText.innerText = `${langEn['aboutUs']['sectionText']}`;
  sectionLink.innerText = `${langEn['aboutUs']['sectionLink']}`;
  sectionLink.classList.add('link-btn');
  sectionLink.href = '#';
  textDiv.appendChild(sectionName);
  textDiv.appendChild(sectionHeader);
  textDiv.appendChild(sectionText);
  textDiv.appendChild(sectionLink);
}

lang();

console.log(`${langEn['aboutUs']['sectionHeader']}`);
// console.log(langEn['sectionHeader']);

const en = (element, content) => {
  try {
    const el = document.querySelector(element);
    el.innerText = content;
  } catch (error) {
    console.log(error);
  }
};

en('.contact-form span', 'Contact FORM SEX MF');
