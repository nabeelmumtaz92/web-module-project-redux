import React from 'react';
import { connect } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';

import { deleteMovie } from './../actions/movieActions';
import { addFavorite } from './../actions/favoritesActions';

const Movie = (props) => {
    const { id } = useParams();
    const { push } = useHistory();

    const { movies, deleteMovie, addFavorite } = props;
    const movie = movies.find(movie => movie.id === Number(id));
    
    const handleDeleteClick = () => {
        deleteMovie(movie.id); 
        push('/movies');
    }

    const handleFavoriteClick = () => {
        addFavorite({
            id: movie.id,
            title: movie.title,
            director: movie.director,
            genre: movie.genre,
            metascore: movie.metascore,
            description: movie.description
        });
    }

    if (!movie) {
        return <div>Movie not found!</div>;
    }

    return (
        <div className="modal-page col">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">						
                        <h4 className="modal-title">{movie.title} Details</h4>
                    </div>
                    <div className="modal-body">
                        <div className="flexContainer">
                            <section className="movie-details">
                                <div>
                                    <label>Title: <strong>{movie.title}</strong></label>
                                </div>
                                <div>
                                    <label>Director: <strong>{movie.director}</strong></label>
                                </div>
                                <div>
                                    <label>Genre: <strong>{movie.genre}</strong></label>
                                </div>
                                <div>
                                    <label>Metascore: <strong>{movie.metascore}</strong></label>
                                </div>
                                <div>
                                    <label>Description:</label>
                                    <p><strong>{movie.description}</strong></p>
                                </div>
                            </section>
                            <section>
                                <span className="m-2 btn btn-dark" onClick={handleFavoriteClick}>Favorite</span>
                                <span className="delete" onClick={handleDeleteClick}>
                                    <input type="button" className="m-2 btn btn-danger" value="Delete" />
                                </span>
                            </section>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        displayFavorites: state.favorites.displayFavorites,
        movies: state.movies.movies // Adjusted according to the structure of your state
    };
};

const mapDispatchToProps = {
    deleteMovie,
    addFavorite
};

export default connect(mapStateToProps, mapDispatchToProps)(Movie);