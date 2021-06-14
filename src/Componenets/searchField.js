
import { render } from '@testing-library/react';
import { Component} from 'react';
import Results from './gifCard';



class Search extends Component {

    state = {
        setquery : "",
        hasSearched: false,
        searchResults : [],
    } 
    

    handleSubmit = (event) => {

        event.preventDefault();
        const url = 'http://api.giphy.com/v1/gifs/search';
        const API_KEY = 'zv3vBNsGF6xI3nmtHkcBBd22oClKsEQr';
        fetch(`${url}?api_key=${API_KEY}&q=${event.value}}`)
            .then(function(response) {
                return response.json();
            })
            .then(response => {
                this.setState({
                    searchResults: response.data,
                })
                console.log(this.state.searchResults);
            });
        
        this.setState({
            hasSearched : true
        })
        console.log(this.state.searchResults);
    }

    handleChange = event => {
        this.setState({
            setQuery : event.target.value
        })

    }
    
    showResults = () =>{
        this.trendingGif();
        this.state.searchResults.map((result) => {
            return <Results 
                props = {result}
        />
        })
    }

    trendingGif = () => {
        const url = 'api.giphy.com/v1/gifs/trending';
        const API_KEY = 'zv3vBNsGF6xI3nmtHkcBBd22oClKsEQr';
        fetch(`${url}?api_key=${API_KEY}`)
            .then(function(response) {
                return response.json();
            })
            .then(response => {
                this.setState({
                    searchResults: response.data,
                })
                console.log(this.state.searchResults);
            });
        
    }


  render() {
    return (
        <div >
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input
                        type="text"
                        onChange={this.handleChange}
                        
                    />
                    <input 
                        type="submit"
                        value="Search"
                    />
                </form>

            </div>
            <div>
                {this.showResults}
            </div>
          
        </div>
      );

  }
  
}

export default Search;
