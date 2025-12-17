window.addEventListener('beforeunload', (e) => {
  e.preventDefault();
  e.returnValue = ''; // This triggers the browser's native confirm dialog
});
