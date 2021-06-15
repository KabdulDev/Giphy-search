

function Results( props) {
    console.log(props)
  return (
    <div>
        <h1>{props.props.title}</h1>
        <img src={props.props.images.fixed_height.url} alt=""/>

    </div>
  );
}

export default Results;
