const storyInput = document.getElementById('storyInput');
const saveBtn = document.getElementById('saveBtn');
const storyList = document.getElementById('storyList');

// Load stories from localStorage
function loadStories() {
  storyList.innerHTML = '';
  const stories = JSON.parse(localStorage.getItem('stories') || '[]');
  stories.forEach((story, index) => {
    const li = document.createElement('li');
    li.textContent = story.substring(0, 30) + (story.length > 30 ? '...' : '');
    li.addEventListener('click', () => {
      storyInput.value = story;
    });
    storyList.appendChild(li);
  });
}

// Save current story
saveBtn.addEventListener('click', () => {
  const newStory = storyInput.value.trim();
  if (newStory === '') {
    alert('Cerita tidak boleh kosong!');
    return;
  }
  let stories = JSON.parse(localStorage.getItem('stories') || '[]');
  stories.push(newStory);
  localStorage.setItem('stories', JSON.stringify(stories));
  storyInput.value = '';
  loadStories();
  alert('Cerita berhasil disimpan!');
});

loadStories();
