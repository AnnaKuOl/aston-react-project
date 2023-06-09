import { useParams } from 'react-router-dom';
import cn from 'classnames';

import { useGetMovieQuery } from '../../redux';
import { FavoriteButton, Spinner, Title } from '../../components';
import { useTheme } from '../../hooks/useTheme';
import { ShortMovieDataClient } from '../../types/types';

import NotFoundPage from '../NotFoundPage';

import s from './index.module.css';

export default function SinglePage() {
  const { id = '' } = useParams();
  const { data: movie, isLoading, isError } = useGetMovieQuery(id);

  const favoriteMovie: ShortMovieDataClient = {
    id: id,
    title: movie?.title,
    image: movie?.image,
  };

  return (
    <div>
      {isError && <NotFoundPage text="This page does not exist. Go " />}
      {isLoading && <Spinner />}
      <div className={s.wrapper}>
        <div className={s.img}>
          <FavoriteButton movie={favoriteMovie} />
          <img src={movie?.image} alt={movie?.title} />
        </div>
        <div>
          <Title text={movie?.title} />
          <p className={cn(s.content, s[useTheme('content')])}>
            <span className={s.bold}>Rating:</span> {movie?.rating}
          </p>
          <p className={cn(s.content, s[useTheme('content')])}>
            <span className={s.bold}>Year: </span>
            {movie?.year}
          </p>
          <p className={cn(s.content, s[useTheme('content')])}>
            <span className={s.bold}>Genres:</span> {movie?.genres}
          </p>
          <p className={cn(s.content, s[useTheme('content')])}>
            <span className={s.bold}>Time:</span> {movie?.time}
          </p>
          <p className={cn(s.content, s[useTheme('content')])}>
            <span className={s.bold}>Countries: </span>
            {movie?.countries}
          </p>
          <p className={cn(s.content, s[useTheme('content')])}>
            <span className={s.bold}>Companies:</span> {movie?.companies}
          </p>
          <p className={cn(s.content, s[useTheme('content')])}>
            <span className={s.bold}>Directors:</span> {movie?.directors}
          </p>
          <p className={cn(s.content, s[useTheme('content')])}>
            <span className={s.bold}>Actors:</span>
            {movie?.actors?.map((item: string, index: number) => (
              <span key={index}>{item}, </span>
            ))}
          </p>
          <p className={cn(s.content, s[useTheme('content')])}>
            <span className={s.bold}>Plot: </span>
            {movie?.plot}
          </p>
        </div>
      </div>
    </div>
  );
}
