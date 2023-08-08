const residencySelect = document.getElementById('residencySelect');

residencySelect.addEventListener('change', (event) => {
  const wrapper = event.target.parentElement;
  wrapper.dataset.residency = event.target.value;
});
