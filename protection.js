let isDirty = false;

const textInput = document.getElementById('textInput');
const saveBtn = document.getElementById('saveBtn');

textInput.addEventListener('input', () => {
  isDirty = true;
});

saveBtn.addEventListener('click', () => {
  isDirty = false;
  alert('Changes saved!');
});

window.addEventListener('beforeunload', (e) => {
  if (isDirty) {
    e.preventDefault();
    e.returnValue = '';
  }
});
