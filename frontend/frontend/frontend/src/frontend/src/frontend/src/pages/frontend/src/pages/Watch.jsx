import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function Watch() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    axios.get(`https://your-backend-url.com/api/movies/${id}`)
      .then(res => setMovie(res.data))
      .catch(err => console.log(err));
  }, [id]);

  if (!movie) return <p className="p-4">جاري التحميل...</p>;

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-2">{movie.title}</h1>
      <video controls className="w-full rounded-md mb-4">
        <source src={movie.videoUrl} type="video/mp4" />
        متصفحك لا يدعم تشغيل الفيديو.
      </video>
      <p>{movie.description}</p>
    </div>
  );
}

export default Watch;
