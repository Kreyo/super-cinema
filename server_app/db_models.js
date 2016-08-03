import mongoose from "mongoose"

// All Database models

const movieSchema = mongoose.Schema({
    Title       : String,
    Year        : String,
    Rated       : String,
    Released    : String,
    Runtime     : String,
    Genre       : String,
    Director    : String,
    Writer      : String,
    Actors      : String,
    Plot        : String,
    Language    : String,
    Country     : String,
    Awards      : String,
    Poster      : String,
    Metascore   : String,
    imdbRating  : String,
    imdbVotes   : String,
    imdbID      : String,
    Type        : String,
    Response    : String
});

const commentSchema = mongoose.Schema({
    movieID     : String,
    author      : String,
    comment     : String
});

export const Movie      = mongoose.model("movie", movieSchema);
export const Comment    = mongoose.model("comment", commentSchema); 

