import React, { useState } from 'react';
import '../App.css';
const AddMovie = ({ addMovie }) => {
  const [newMovie, setNewMovie] = useState({
    title: '',
    description: '',
    posterURL: '',
    rating: '',
    trailerLink: '',
  });

  const [showForm, setShowForm] = useState(false); // State to toggle form visibility

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewMovie({ ...newMovie, [name]: value });
  };

  const handleAddMovie = () => {
    if (newMovie.title && newMovie.description && newMovie.posterURL && newMovie.rating) {
      addMovie(newMovie);
      setNewMovie({
        title: '',
        description: '',
        posterURL: '',
        rating: '',
        trailerLink: '',
      });
      setShowForm(false); // Hide the form after adding a movie
    }
  };

  return (
    <div className="add-movie">
     
      <button onClick={() => setShowForm(!showForm)}>
        {showForm ? 'hide' : 'add movie'}
      </button>
      {showForm && (
        <div className="form-content">
          <input
            type="text"
            name="title"
            placeholder="Title"
            value={newMovie.title}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="description"
            placeholder="Description"
            value={newMovie.description}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="posterURL"
            placeholder="Poster URL"
            value={newMovie.posterURL}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="rating"
            placeholder="Rating"
            value={newMovie.rating}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="trailerLink"
            placeholder="trailerLink"
            value={newMovie.trailerLink}
            onChange={handleInputChange}
          />
          <button onClick={handleAddMovie}>Submit</button>
        </div>
      )}
    </div>
  );
};

export default AddMovie;

