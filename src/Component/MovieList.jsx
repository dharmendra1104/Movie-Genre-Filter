import React from 'react';

function MovieList({ movies, selectedGenre }) {
  const filteredMovies = selectedGenre ? movies.filter(movie => movie.genre === selectedGenre) : movies;

  return (
    <div className='border-collapse border border-slate-400 p-10rem w-100 mt-4'>
      <table className="w-full">
        <thead className="bg-blue-500 text-white">
          <tr>
            <th className="px-4 py-2">Image</th>
            <th className="px-4 py-2">Title</th>
            <th className="px-4 py-2">Genre</th>
            <th className="px-4 py-2">Year</th>
          </tr>
        </thead>
        <tbody>
          {filteredMovies.map(movie => (
            <tr key={movie.title}>
              <td className="border px-4 py-2">
                <img src={movie.img} alt={movie.title} className="w-20 h-20 object-cover" />
              </td>
              <td className="border px-4 py-2">{movie.title}</td>
              <td className="border px-4 py-2">{movie.genre}</td>
              <td className="border px-4 py-2">{movie.year}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default MovieList;
