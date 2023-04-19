import { useEffect, useState } from 'react';
import { MovieObject } from '../../types/movies';

import MovieTags from './card-elements/MovieTags';
import MovieReleaseDate from './card-elements/MovieReleaseDate';
import MoviePoster from './card-elements/MoviePoster';
import { Rate, Typography } from 'antd';

import './movie-card.scss';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { addRate, selectRated } from '../../store/slices/rated-slice';
import { truncate } from 'lodash';
import { RatingRing } from '../rating-stars/RatingStars';

const { Title, Paragraph } = Typography;

type Props = MovieObject;

const MovieCard = (props: Props) => {
  const { title, overview, genreIds, posterPath, releaseDate, usersRating, id } = props;
  const ratedMovies = useAppSelector(selectRated);
  const dispatch = useAppDispatch();

  const [rating, setRating] = useState<number>(0);

  useEffect(() => {
    const rating = ratedMovies[id]?.rate || 0;

    setRating(rating);
  }, [ratedMovies]);

  const rateMovieChange = (rate: number) => {
    const ratedMovie = {
      ...props,
      rate,
    };

    dispatch(addRate(ratedMovie));
    setRating(rate);
  };

  const overviewContent = truncate(overview, { length: 90, separator: ' ' });
  const path = `https://image.tmdb.org/t/p/w500${posterPath}`;

  return (
    <div className="movie-card">
      <MoviePoster path={path} />
      <div className="movie-card__content">
        <div className={'movie-card__mobile-info'}>
          <Title level={4} style={{ marginTop: 10, paddingRight: 34 }}>
            {title}
          </Title>
          <MovieReleaseDate releaseDate={releaseDate} />
          <MovieTags genreIds={genreIds} />
        </div>
        <Paragraph>{overviewContent}</Paragraph>
        <Rate value={rating} style={{ fontSize: 20 }} count={10} allowHalf onChange={rateMovieChange} />
        <RatingRing
          rating={usersRating}
          style={{
            position: 'absolute',
            top: '12px',
            right: '12px',
          }}
        />
      </div>
    </div>
  );
};

export default MovieCard;
