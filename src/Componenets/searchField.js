
import { render } from '@testing-library/react';
import { Component} from 'react';
import Results from './gifCard';



class Search extends Component {


    componentDidMount(){
        this.trendingGif();
        // this.showResults();
    }

    state = {
        setquery : "",
        hasSearched: false,
        searchResults : [],
    } 
    

    handleSubmit = (event) => {

        event.preventDefault();
        const url = 'http://api.giphy.com/v1/gifs/search';
        const API_KEY = 'zv3vBNsGF6xI3nmtHkcBBd22oClKsEQr';
        fetch(`${url}?api_key=${API_KEY}&q=${this.state.setquery}}`)
            .then(function(response) {
                return response.json();
            })
            .then(response => {
                this.setState({
                    searchResults: response.data,
                })
                console.log(this.state.searchResults);
            })
            .then(() => {
                // console.log(this.state.searchResults);
                // (this.showResults());
                this.setState({
                    hasSearched : true
                })

            }) 
        
        
        // console.log(this.state.searchResults);
    }

    handleChange = event => {
        this.setState({
            setquery : event.target.value
        })
        console.log(this.state.setquery)

    }
    
    showResults = () =>{
        return this.state.searchResults.map((result) => {return <Results props = {result} /> })

        //     console.log(this.state.searchResults)
        //     return <Results 
        //         props = {this.state.searchResults[0]}
        // />
        
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
    const results = this.state.hasSearched ? this.showResults() : <></>;
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
                {results}
            </div>
          
        </div>
      );

  };
  
}

export default Search;
