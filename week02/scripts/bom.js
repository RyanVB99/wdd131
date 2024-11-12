const input = document.getElementById('input');
const button = document.querySelector('button');
const list = document.getElementById('list');

button.addEventListener('click', function() {
  chapter = input.value;
  const li = document.createElement('li');
  const deleteButton = document.createElement('button');
  if (chapter.trim() !== '') {
    li.textContent = chapter;
    deleteButton.textContent = '❌';
    li.appendChild(deleteButton);
    list.appendChild(li);
    deleteButton.addEventListener('click', function(e) {
      list.removeChild(li);
      input.focus();
    });
    input.value = '';
  } else {
    alert('Please enter a chapter');
  }
  input.focus();
});
