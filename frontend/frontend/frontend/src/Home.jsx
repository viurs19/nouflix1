import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get('https://your-backend-url.com/api/movies')
      .then(res => setMovies(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-4">🎬 Nouflix</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {movies.map(movie => (
          <Link to={`/watch/${movie._id}`} key={movie._id}>
            <img src={movie.poster} alt={movie.title} className="rounded-md" />
            <p className="mt-2 text-center">{movie.title}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Home;
