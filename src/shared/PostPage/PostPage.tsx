import React from 'react';
import styles from './postpage.css';
import { CardsList } from '../CardsList';
import { Post } from '../Post';

export function PostPage() {
  return (
    <div>
      <CardsList />
      <Post />
    </div>
  );
}
