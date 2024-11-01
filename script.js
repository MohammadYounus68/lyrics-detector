const createHtmlBlock = (title, album, name) => {
    var newDiv = document.createElement('div');
    newDiv.innerHTML = `
                    <div class="search-result col-md-8 mx-auto">
                        <div class="single-result row align-items-center my-3 p-3">
                            <div class="col-md-9">
                                    <h3 class="lyrics-name"><span>${title}</span></h3>
                                    <p class="author lead">Album By: ${album} <span>Artist By: ${name}</span></p>
                            </div>
                            <div class="col-md-3 text-md-right text-center">
                                <button class="btn btn-success lyrics-btn" data-title="${title}" data-artist="${name}">Get Lyrics</button>
                            </div>
                        </div>
                    </div>`;

    return newDiv;
}
const inputBtn = document.getElementById('input-btn');
inputBtn.addEventListener('click',()=> {
    const inputSearch = document.getElementById('input-search').value;
    fetch(`https://api.lyrics.ovh/suggest/${inputSearch}`)
    .then(res => res.json())
    .then(data => {
        const parentDiv = document.getElementById('results-container');
        parentDiv.innerHTML = '';
        data.data.slice(0,2).forEach(item => {
            const newHtmlBlock = createHtmlBlock(item.title, item.album.title,item.artist.name);
            parentDiv.appendChild(newHtmlBlock);
        })
    })
});



document.getElementById('results-container').addEventListener('click',function(event) {
    if(event.target.classList.contains('lyrics-btn')) {
        const title = event.target.getAttribute('data-title');
        const artist = event.target.getAttribute('data-artist');
        fetch(`https://api.lyrics.ovh/v1/${artist}/${title}`)
        .then(res => res.json())
        .then(data => {
            const lyricsContainer = document.getElementById('lyrics-container');
            lyricsContainer.innerHTML = `<h2>${title} By </h2><pre>${data.lyrics || "No lyrics found."}</pre>`;
        })
        .catch(error => console.error('Error:',error));
    }
})