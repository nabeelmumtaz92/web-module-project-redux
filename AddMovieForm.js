import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addMovie } from './../actions/movieActions';

const AddMovieForm = ({ addMovie, history }) => {
    const [movie, setMovie] = useState({
        title: '',
        director: '',
        genre: '',
        metascore: '',
        description: ''
    });

    const handleChange = (e) => {
        setMovie({
            ...movie,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        addMovie(movie);
        history.push('/movies');
    };

    return (
        <div>
            <h2>Add New Movie</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Title</label>
                    <input
                        type="text"
                        name="title"
                        value={movie.title}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Director</label>
                    <input
                        type="text"
                        name="director"
                        value={movie.director}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Genre</label>
                    <input
                        type="text"
                        name="genre"
                        value={movie.genre}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Metascore</label>
                    <input
                        type="text"
                        name="metascore"
                        value={movie.metascore}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Description</label>
                    <textarea
                        name="description"
                        value={movie.description}
                        onChange={handleChange}
                    />
                </div>
                <button type="submit">Add Movie</button>
            </form>
        </div>
    );
};

export default connect(null, { addMovie })(AddMovieForm);
