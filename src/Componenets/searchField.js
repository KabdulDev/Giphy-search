
const handleSubmit = (event) => {

    const url = 'http://api.giphy.com/v1/gifs/search';
    const API_KEY = 'zv3vBNsGF6xI3nmtHkcBBd22oClKsEQr';
    const fetchSearch = fetch(`${url}?api_key=${API_KEY}&q=${event.value}}`)
        .then(function(response) {
            return response.json();
        })
        .then(function(myJson) {
            console.log(myJson);
        });
    const searchResults = fetchSearch.data.data;
}




function Search(props) {
  return (
    <div >
        <form onSubmit={props.handleSubmit}>
            <input
                type="text"
                value={props.query}
                
            />
            <input 
                type="submit"
                value="Search"
            />
        </form>
      
    </div>
  );
}

export default Search;
