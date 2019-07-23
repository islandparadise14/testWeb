import * as React from 'react';
import './App.css';
import Movie from './Movie'

interface IMovies {
  medium_cover_image : string
  title : string
  id : number
  genres : Array<string>
  sysnopsis : string
}

class App extends React.Component {

  public state = {
    movies : []
  }

  public componentDidMount() {
    this.GetMovies();
  }

  public GetMovies = async () => {
    const movies = await this.CallMovies()
    this.setState({
      movies
    })
  }

  public CallMovies = () => {
    return fetch('https://yts.lt/api/v2/list_movies.json?sort_by=rating')
    .then(photo => photo.json())
    .then(json => json.data.movies)
    .catch(err => console.log(err)) 
  }

  public RenderMovies  = () => {
    const movies = this.state.movies.map((movie : IMovies) => {
      return <Movie 
      title={movie.title} 
      image={movie.medium_cover_image} 
      key={movie.id} 
      genres={movie.genres}
      sysnopsis={movie.sysnopsis}/>
    })
    return movies
  }

  public render() {
    return (
      <div className="App">
        {this.state.movies.length!==0 ? this.RenderMovies() : 'Loading'}
      </div>
    );
  }
}

export default App;
