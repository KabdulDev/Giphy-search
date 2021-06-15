

function Results( props) {
    // console.log(props)
  return (
    <div>
        
        <img src={props.props.images.fixed_height.url} alt = {props.props.title}/>

    </div>
  );
}

export default Results;
