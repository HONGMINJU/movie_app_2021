import  React  from "react";
import PropTypes from "prop-types";

//movie component는 state가 필요없음 
// => class로 선언하지않고 function으로 선언해도 됨

function Movie({id,year,title,summary,poster}){
    return <h5>{title}</h5>;
}

Movie.propTypes ={
    id:PropTypes.number.isRequired,
    year:PropTypes.number.isRequired,
    title:PropTypes.string.isRequired,
    summary:PropTypes.string.isRequired,
    poster:PropTypes.string.isRequired
}

export default Movie;