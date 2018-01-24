const img = document.querySelector('img');

const blurSlider = document.querySelector('#blur');
const spacingSlider = document.querySelector('#spacing');
const baseColorPicker = document.querySelector('#base');
blurSlider.addEventListener('input', (e) => document.querySelector('html').style.setProperty('--blur', `${e.target.value}px`));
spacingSlider.addEventListener('input', (e) => document.querySelector('html').style.setProperty('--padding', `${e.target.value}px`));
baseColorPicker.addEventListener('change', e => document.querySelector('html').style.setProperty('--css-var-color', e.target.value));