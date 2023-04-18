import { Card, Typography } from 'antd';
import { Link } from 'react-router-dom';
import { Movie } from '../../types/movie';
import { truncateText } from '../../utils/textUtils';

type MovieListItemProps = {
  movie: Movie;
};

const MovieListItem: React.FC<MovieListItemProps> = ({ movie }) => {
  const { Title, Year, Poster, imdbID, Plot, Genre } = movie;

  return (
    <Card cover={<img alt={Title} src={Poster} />} actions={[<Link to={`/movies/${imdbID}`}>Подробнее</Link>]}>
      <Card.Meta
        title={Title}
        description={
          <>
            <Typography.Paragraph ellipsis={{ rows: 2, expandable: true }}>
              {truncateText(Plot, 150)}
            </Typography.Paragraph>
            <Typography.Text>{Genre}</Typography.Text>
            <Typography.Text>{Year}</Typography.Text>
          </>
        }
      />
    </Card>
  );
};

export default MovieListItem;
