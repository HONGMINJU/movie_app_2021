import React from "react";
import axios from "axios";
import Movie from "./Movies";
import "./App.css";
// App은 state가 필요하기 때문에 class로 선언
class App extends React.Component {
  // component의 life cycle 
  // mount(생성: constructor -> render -> componentDidMount)
  // update(업데이트: update -> render -> componentDidUpdated)
  // unmount(삭제: componentWillUnmount)

  state = {
    isLoading: true,
    movies: []
  }
  // render함수 호출 후 자동적으로 실행되는 함수
  // 6초 후에 isLoading값을 바꾸도록 설정함


  // axios가 끝날 때 까지 기다려줌 => async, await
  getMovies = async () => {
    // const movies=await axios.get("https://yts-proxy.nomadcoders1.now.sh/list_movies.json");
    // console.log(movies.data.data.movies);
    const { data: { data: { movies } } } = await axios.get("https://yts-proxy.nomadcoders1.now.sh/list_movies.json?sort_by=rating");
    this.setState({ movies, isLoading: false }); //{movies:movies}=={movies}
  }


  // render함수 호출 후 자동적으로 실행되는 함수(componentDidMount)
  // 6초 후에 isLoading값을 바꾸도록 설정함
  componentDidMount() {
    // setTimeout(()=>{
    //   this.setState({isLoading:false}); //여기서 다시 render호출
    // }, 6000);
    this.getMovies();
  }
  render() {
    const { isLoading, movies } = this.state;
    return (
      <section className="container">
        {isLoading ? (
          <div className="loader">
            <span className="loader_text">Loading . . .</span>
          </div>
        ) : (
          <div className="movies">
              {movies.map(movie => (
                <Movie
                  key={movie.id}
                  id={movie.id}
                  year={movie.year}
                  title={movie.title}
                  summary={movie.summary}
                  poster={movie.medium_cover_image}
                  genres={movie.genres}
                />
              ))}

            </div>
          )
        }

      </section>);
  }
}

export default App;