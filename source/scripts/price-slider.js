const slider = document.querySelector('.slider__bar');
const inputs = document.querySelectorAll('.slider__input');
const inputMin = document.querySelector('.slider__input--min');
const inputMax = document.querySelector('.slider__input--max');

const createSlider = () => {
  noUiSlider.create(slider, {
    start: [0, 900],
    step: 1,
    connect: true,
    range: {
      'min': [0],
      'max': [1040]
    },
    format: {
      to: function (value) {
        return parseFloat(value);
      },
      from: function (value) {
        return parseFloat(value);
      },
    },
  });
};

const getSliderValue = () => {
  slider.noUiSlider.on('update', () => {
    const arrayGet = slider.noUiSlider.get();
    inputMin.value = Math.round(arrayGet[0]);
    inputMax.value = Math.round(arrayGet[1]);
  });
};

let inputArray;

const setSliderValue = (i, value) => {
  inputArray = [null, null];
  inputArray[i] = value;
  slider.noUiSlider.set(inputArray);
};

inputs.forEach((element, index) => {
  element.addEventListener('change', (evt) => {
    setSliderValue(index, evt.currentTarget.value);
  });
});

const initSlider = () => {
  createSlider();
  getSliderValue();
};

initSlider();
