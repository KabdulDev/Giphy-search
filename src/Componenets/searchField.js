import { Component} from 'react';
import Results from './gifCard';

import './searchField.css';


const API_KEY = process.env.REACT_APP_GIPHY_KEY;
class Search extends Component {

   
    state = {
        setquery : "",
        hasSearched: false,
        searchResults : [],
    } 

    componentDidMount(){
        // this.trendingGif();
        // console.log("Did Mount function")
        this.trendingGif();
        
    }
    

    handleSubmit = (event) => {

        event.preventDefault();
        const query = this.state.setquery
        const url = 'http://api.giphy.com/v1/gifs/search';

        if(query === ""){
            this.trendingGif();
        }
        else{
            fetch(`${url}?api_key=${API_KEY}&q=${query}`)
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

        }

        // console.log(this.state.searchResults);
    }

    handleChange = event => {
        this.setState({
            setquery : event.target.value
        })
        console.log(this.state.setquery)

    }
    
    showResults = () =>{
       
        // console.log(this.state.searchResults)
        
        return <div className="resultLayout"> {this.state.searchResults.map((result, id) => {
             
                    return <Results key = {id} props = {result} />
            
            })}
        </div>
    }

    showRandom = () => {
        return <Results props = {this.state.searchResults} />;
    }

    trendingGif = () => {
        const url = 'http://api.giphy.com/v1/gifs/trending';
        fetch(`${url}?api_key=${API_KEY}`)
            .then(function(response) {
                if(!response.ok) {
                    throw new Error(`Network response was not ok`);
                }
                return response.json();
            })
            .then(response => {
                this.setState({
                    searchResults: response.data,
                })
                console.log(this.state.searchResults); 
                // Used for debugging no longer necessary
            })

        
    }

    randomButton = () => {

        const url = 'http://api.giphy.com/v1/gifs/random';
        fetch(`${url}?api_key=${API_KEY}`)
            .then(function(response) {
                if(!response.ok) {
                    throw new Error(`Network response was not ok`);
                }
                return response.json();
            })
            .then(response => {
                this.setState({
                    searchResults: response.data,
                })
                // console.log(this.state.searchResults);Used for debugging no longer necessary
            })

    }

    


  render() {
   
    const results = Array.isArray(this.state.searchResults) ? this.showResults() : this.showRandom();
    
    return (
        <div >
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input
                        type="text"
                        onChange={this.handleChange}
                        
                    />
                    <input className="searchButton"
                        type="submit"
                        value="Search"
                    />
                    <button className="searchButton" onClick={this.randomButton}>Random!</button>
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
