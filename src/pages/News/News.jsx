import React from 'react';
import { newsData } from 'constants/news';
import { Link } from 'react-router-dom';

export const News = () => {
  return (
    <div>
      <ul>
        {newsData.map(({ id, title, detailText, slug }) => (
          <li key={id}>
            <h4>{title}</h4>
            <p>{detailText}</p>
            <Link to={`/news/${slug}`}>Подробнее</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
