import React from 'react';

function GenreFilter({ genres, onGenreSelect }) {
  // console.log(genres)
  // console.log(onGenreSelect)
  return (
    <>
  <div className="border border-solid-600">
        <h2 className="text-xl font-bold mb-2 text-center">Genres</h2>
      <div className="p-10rem flex justify-center p-2 ">
        <div className="flex flex-wrap gap-2">
          {genres.map(genre => (
            <button
              key={genre}
              onClick={() => onGenreSelect(genre)}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              {genre}
            </button>
          ))}
        </div>
      </div>
      </div>
    </>
  );
}

export default GenreFilter;