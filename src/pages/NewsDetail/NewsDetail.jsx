import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { newsData } from 'constants/news';

export const NewsDetail = () => {
  // const params = useParams();
  const { pageAddress } = useParams();

  // const data = newsData.find((el) => el.slug === params.pageAddress);
  const data = newsData.find((el) => el.slug === pageAddress);

  if (!data) return <div>Новость не найдена</div>;

  return (
    <div>
      <h2>{data.title}</h2>
      <p>{data.detailText}</p>
      <Link to="/news">Назад</Link>
    </div>
  );
};
