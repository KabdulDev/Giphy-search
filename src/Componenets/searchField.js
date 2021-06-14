
import { render } from '@testing-library/react';
import {useState, Component} from 'react';
import Resultsgit from './gifCard';



class Search extends Component {

    state = {
        setquery : ""
    } 
    

    handleSubmit = (event) => {

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

        console.log(searchResults);
    }

    handleChange = event => {
        this.setState({
            setQuery : event.target.value
        })

    }


  render() {
    return (
        <div >
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
      );

  }
  
}

export default Search;
