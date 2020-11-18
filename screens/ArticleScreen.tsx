import React from 'react';
import { ArticleProps } from '../types';
import Article from '../components/articles/Article';

export default function ArticleScreen({ route }: ArticleProps): React.ReactElement {
  return (
    <Article articleData={route.params} />
  );
}
