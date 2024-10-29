
function createHtmlBlock(title,album,name) {
	var newDiv = document.createElement('div');
/*	newDiv.classList.add('search-result', 'col-md-8', 'mx-auto', 'py-4');*/

	newDiv.innerHTML = `<div class="search-result col-md-8 mx-auto">
                    	<div class="single-result row align-items-center my-3 p-3">
                        	<div class="col-md-9">
                            	<h3 class="lyrics-name"><span>${title}</span></h3>
	                            <p class="author lead">Album by ${album} <span>Artist By: ${name}</span></p>
	                        </div>
                        <div class="col-md-3 text-md-right text-center">
                            <button class="btn btn-success" id= "lyrics.btn">Get Lyrics</button>
                        </div>
                    </div>
                </div>`;
    return newDiv;
}



var inputBtn = document.getElementById('input-btn');
inputBtn.addEventListener('click',function() {
	const inputSearch = document.getElementById('input-search').value;
	fetch(`https://api.lyrics.ovh/suggest/${inputSearch}`)
	.then(res => res.json())
	.then(data => {
		const parentDiv =  document.getElementById('results-container');
		parentDiv.innerHTML = '';
		data.data.slice(0,10).forEach(item => {
            const newHtmlBlock = createHtmlBlock(item.title,item.album.title,item.artist.name);
            parentDiv.appendChild(newHtmlBlock);
		});

 /*       const lyricsBtn = document.querySelectorAll('lyrics.btn');
        lyricsBtn.forEach((btn) => {
            btn.addEventListener('click',function() {
                cosnt artist = this.getAttribute('data-artist');
                const title = this.getAttribute('data-title');
                fetchLyrics(artist,title);
            });
        });*/

	});
});


/*function fetchLyrics(artist,title,lyrics) {    
    const lyricsParentContainer = document.getElementById('lyrics-container');
    const lyricsData = document.createElement('div');
    lyricsData.innerHTML =  `
    <h2>${title} by ${artist}</h2>
    <pre>${lyrics}</pre>
  `;
  lyricsParentContainer.appendChild = lyricsData;
}*/