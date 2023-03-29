const lang = [
  { el: '.slide1 h2', content: 'Russian header' },
  { el: '.slide1 p', content: 'Russian text' },
  { el: '.slide1 a', content: 'Russian link' },
];

const ru = (element, content) => {
  try {
    const el = document.querySelector(element);
    el.innerText = content;
  } catch (error) {
    console.log(error);
  }
};

console.log(lang[1]);
ru(lang[1].el, lang[1].content);

// ru('.slide1 h2', 'Russian header');
// ru('.slide1 p', 'Russian text');
// ru('.slide1 a', 'Russian link');
