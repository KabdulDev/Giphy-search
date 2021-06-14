
function Search(props) {
  return (
    <div >
        <form >
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
