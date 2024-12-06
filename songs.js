const songsContainer = document.querySelector('.songs-container');

songs.forEach((song, index) => {
    const li = document.createElement('li');
    li.innerHTML = `
        <div>
            <img src="${song.cover}" alt="${song.name}">
            <span>${song.name}</span>
        </div>
        <span>${song.artist}</span>
    `;
    li.addEventListener('click', () => {
        localStorage.setItem('currentSong', index);
        window.location.href = 'index.html';
    });
    songsContainer.appendChild(li);
});
