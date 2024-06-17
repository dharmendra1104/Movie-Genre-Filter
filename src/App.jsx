import React, { useState } from 'react';
import MovieList from './Component/MovieList';
import GenreFilter from './Component/GenreFilter';
import './App.css'

const movies = [
  { title: 'The Shawshank Redemption', genre: 'Drama', year: 1994, img: 'src/Component/Images/Swashank.jpg' },
  { title: 'The Godfather', genre: 'Crime', year: 1972, img: 'src/Component/Images/Godfather.jpg' },
  { title: 'The Dark Knight', genre: 'Action', year: 2008, img: 'src/Component/Images/DarkNight.jpg' },
  { title: '12 Angry Men', genre: 'Drama', year: 1957, img: 'src/Component/Images/angry_man.jpg' },
  { title: 'Schindler', genre: 'Drama', year: 1993, img: 'src/Component/Images/scindler_.jpg' },
  { title: 'The Lord of the Rings: The Return of the King', genre: 'Fantasy', year: 2003, img: 'src/Component/Images/lord_of_rings_.jpg' },
  { title: 'The Good, the Bad and the Ugly', genre: 'Western', year: 1966, img: 'src/Component/Images/Good_the_bad_and_the_ugly_poster.jpg' },
  { title: 'Forrest Gump', genre: 'Drama', year: 1994, img: 'src/Component/Images/ForrestGump.jpg' },
  { title: 'Inception', genre: 'Science Fiction', year: 2010, img: 'src/Component/Images/inception.jpg' },
  { title: 'The Matrix', genre: 'Science Fiction', year: 1999, img: 'src/Component/Images/matrix.jpg' },
  { title: 'The Silence of the Lambs', genre: 'Thriller', year: 1991, img: 'src/Component/Images/TheSilence.jpg' },
  { title: 'Saving Private Ryan', genre: 'War', year: 1998, img: 'src/Component/Images/saving.jpg' },
  { title: 'Jurassic Park', genre: 'Science Fiction', year: 1993, img: 'src/Component/Images/jurashic_.jpg' },
  { title: 'Terminator 2: Judgment Day', genre: 'Science Fiction', year: 1991, img: 'src/Component/Images/Terminater.jpg' },
  { title: 'The Lion King', genre: 'Animation', year: 1994, img: 'src/Component/Images/Thelion.jpg' }
];

const genres = [
  "Drama", "Crime", "Action", "Fantasy", "Western",
  "Science Fiction", "Thriller", "War", "Animation"
];

function App() {
  const [selectedGenre, setSelectedGenre] = useState('');

  const handleGenreSelect = (genre) => {
    console.log(`Selected genre: ${genre}`);
    setSelectedGenre(genre);
  };

  return (
    <div className="bg-zinc-300">
      <h1 className='text-center font-bold text-5xl p-2'>Movie List</h1>
      <GenreFilter genres={genres} onGenreSelect={handleGenreSelect} />
      <MovieList movies={movies} selectedGenre={selectedGenre} />
    </div>
  );
}

export default App;
