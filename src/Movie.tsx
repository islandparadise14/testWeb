import * as React from 'react';
import './Movie.css';

interface ITypeProps  {
    title : string
    image : string
    genres : String[]
    sysnopsis : string
}

interface IImageSrc { imageSrc : string }


function MoviePoster(Src : IImageSrc) {
    return(
        <img src={Src.imageSrc}/>
    );
}

function MovieGenres(genrem : String){
    return(
        <span className="Movie_Genres">{genrem}</span>
    )
}

function Movie (props : ITypeProps){
    return(
        <div className="Movie">
            <div className="Movie_Columns">
            <MoviePoster imageSrc ={props.image}/>
            </div>
            <div className="Movie_Columns">
            <h1>{props.title}</h1>
            <div className="Movie_Genres">
            {props.genres.map((genre : string, index:number) =>
            <MovieGenres genrem={genre} id = {index}/>)}
            </div>
            <p className="Movie_Sysnopsis">
            {props.sysnopsis}
            </p>
            </div>
        </div>
    );
}

export default Movie