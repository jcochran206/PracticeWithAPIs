'use strict';

function getLyrics(artist, title) {
  const url = `https://api.lyrics.ovh/v1/${artist}/${title}`;
  console.log(`finding lyrics for ${title} by ${artist}`);

  fetch(url)
  .then(response => {
      if(response.ok){
          return response.json();
      }
      throw new Error(response.status);
  })
  .then(responseJson => displayResults(responseJson))
  .catch(err => {
      $('#results').text(`someting went wrong: ${err.message}`)
  });

}

function displayResults(data) {
    console.log(data);
    // previous results removed
    $('#results').empty();

    //add to html 
    $('#results').append(`${data.lyrics}`);

    //display the results section 
    $('#results').removeClass('hidden');


}

function watchForm() {
    $('.js-search-form').submit(e => {
        e.preventDefault();
        const artist = $('.js-query-artist').val();
        const title = $('.js-query-title').val();
        getLyrics(artist,title);
        
    })

}


$(watchForm);