import { useParams } from 'react-router-dom';

import { useGetMovieQuery } from '../redux';
import { FavoriteButton, Spinner } from '../components';

import NotFoundPage from './NotFoundPage';

export default function SinglePage() {
  const { id = '' } = useParams();
  const { data: movie, isLoading, isError } = useGetMovieQuery(id);

  return (
    <div>
      {isError && <NotFoundPage />}
      {isLoading && <Spinner />}
      <div>
        <FavoriteButton id={id} movie={movie} />
        <div>
          <img src={movie?.image} alt={movie?.title} />
        </div>
        <div>
          <h2>{movie?.title}</h2>
          <h3>{movie?.year}</h3>
          <p>{movie?.countries}</p>
          <p>{movie?.genres}</p>
          <p>{movie?.time}</p>
          <p>{movie?.companies}</p>
          <p>{movie?.directors}</p>
          <p>
            {movie?.actors?.map((item: string, index: number) => (
              <span key={index}>{item}</span>
            ))}
          </p>
          <p>{movie?.plot}</p>
          <p>{movie?.rating}</p>
        </div>
      </div>
    </div>
  );
}
