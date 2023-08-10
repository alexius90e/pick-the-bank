import '../js/notifications.js';
import '../js/menu.js';

const residencySelect = document.getElementById('residencySelect');

const customSelects = document.querySelectorAll('.custom-select');
const selectsCount = customSelects.length;

customSelects.forEach((customSelect) => {
  const selectElem = customSelect.querySelector('select');
  const options = selectElem.options;

  const selectSelected = document.createElement('div');
  selectSelected.classList.add('select-selected');
  selectSelected.innerHTML = `<span>${
    selectElem.options[selectElem.selectedIndex].innerHTML
  }</span>`;

  const selectItems = document.createElement('div');
  selectItems.setAttribute('class', 'select-items select-hide');

  [...options].forEach((option, index) => {
    const optionElem = document.createElement('div');
    optionElem.classList.add('select-item');
    optionElem.classList.add(`select-item_${option.value}`);
    optionElem.innerHTML = option.innerHTML;
    if (index === 0) optionElem.classList.add('same-as-selected');
    selectItems.append(optionElem);

    optionElem.addEventListener('click', () => {
      const sameAsSelected = selectItems.querySelector('.same-as-selected');
      const changeEvent = new Event('change');
      selectSelected.innerHTML = option.innerHTML;
      selectElem.value = option.value;
      customSelect.dataset.value = selectElem.value;
      sameAsSelected.classList.remove('same-as-selected');
      optionElem.classList.add('same-as-selected');
      selectElem.dispatchEvent(changeEvent);
    });
  });

  customSelect.append(selectSelected, selectItems);

  selectSelected.addEventListener('click', function (e) {
    e.stopPropagation();
    closeAllSelect(this);
    selectItems.classList.toggle('select-hide');
  });
});

function closeAllSelect(elmnt) {
  var x,
    y,
    i,
    xl,
    yl,
    arrNo = [];
  x = document.getElementsByClassName('select-items');
  y = document.getElementsByClassName('select-selected');
  xl = x.length;
  yl = y.length;
  for (i = 0; i < yl; i++) {
    if (elmnt == y[i]) {
      arrNo.push(i);
    } else {
      y[i].classList.remove('select-arrow-active');
    }
  }
  for (i = 0; i < xl; i++) {
    if (arrNo.indexOf(i)) {
      x[i].classList.add('select-hide');
    }
  }
}

document.addEventListener('click', closeAllSelect);
