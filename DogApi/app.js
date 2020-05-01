/* This app doesn't follow a11y best practices,
 and the JS file is incomplete. Complete the getDataFromApi 
 and displaySearchData functions. When you're done, 
 this app should allow a user to search for a specific dog breed, 
 and display a random image of that dog breed. 
 You should make requests to this API: https://dog.ceo/dog-api/ . 
 Also make any necessary adjustments to make this app accessible. */

 function getDataFromApi(searchTerm, callback) {
    // your code here
    let url = `https://dog.ceo/api/breed/${searchTerm}/images/random`;
    console.log(url);
    fetch(url)
    .then(response => {
        if(response.ok){
            return response.json();
        }
        throw new Error(response.statusText)
    })
    .then(responseJson => displaySearchData(responseJson))
    .catch(err => {
        console.log(err);
    });
  };
  
  function displaySearchData(data) {
    // your code here
    console.log(data);
    //empty if filled 

    $('.js-search-results').replaceWith(
        `<img src="${data.message}" class="results-img">`
      );
    
  }

  function watchForm() {
      $('.js-search-form').submit(function(e){
          e.preventDefault();
          console.log('submit clicked');
          const searchTerm = $('.js-query').val();

          if(searchTerm == ''){
              alert('search for a dog')
          }else{
              getDataFromApi(searchTerm)
          }
      })
  }

  $(watchForm)