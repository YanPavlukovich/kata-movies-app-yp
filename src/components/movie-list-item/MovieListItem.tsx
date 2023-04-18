import { Card, Typography } from 'antd';
import { Link } from 'react-router-dom';
import { Movie } from '../../types/movie';
import { truncateText } from '../../utils/textUtils';

type MovieListItemProps = {
  movie: Movie;
};

const MovieListItem: React.FC<MovieListItemProps> = ({ movie }) => {
  const { title, release_date: year, poster_path: poster, overview: plot, genres: genre, id } = movie;

  return (
    <Card cover={<img alt={title} src={poster ?? ''} />} actions={[<Link to={`/movies/${id}`}>Подробнее</Link>]}>
      <Card.Meta
        title={title}
        description={
          <>
            <Typography.Paragraph ellipsis={{ rows: 2, expandable: true }}>
              {truncateText(plot, 150)}
            </Typography.Paragraph>
            <Typography.Text>{genre.join(', ')}</Typography.Text>
            <Typography.Text>{year?.split('-')[0]}</Typography.Text>
          </>
        }
      />
    </Card>
  );
};

export default MovieListItem;
