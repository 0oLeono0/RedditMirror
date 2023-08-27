import React, { useState } from 'react';
import { EIcon, Icons } from '../../../Icon';
import styles from './comment.css';
import { CommentFormContainer } from '../../../CommentFormContainer';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../store';
import { IUserData } from '../../../../store/me/actions';

interface IReplice {
  data: {
    children: Array<IRepliceChildren>
  }
}

interface IRepliceChildren {
  data: ICommentProps
}

interface ICommentProps {
  author: string
  body?: string
  replies?: "" | IReplice
}

export function Comment(props:ICommentProps) {
  const data = useSelector<RootState, IUserData>(state => state.me.data);
  const {author, body, replies} = props;
  const [isAnswer, setAnswer] = useState(false);
  return (
    <div className={styles.commentWrapper}>
      <div className={styles.counter}> 
        <button className={styles.counterUp}><Icons name={EIcon.karma}/></button>
        <button className={styles.counterDown}><Icons name={EIcon.karma}/></button>
      </div>
      <div className={styles.commentatorWrapper}>
          <div className={styles.avatarWrapper}>
            <Icons size={20} name={EIcon.anon}/>
          </div>
          <span className={styles.username}>{author} </span>
      </div>
      <p className={styles.commentText}>
      {body}
      </p>
      <div className={styles.control}>
        <ul className={styles.controlList}>
          <li>
            <button className={styles.controlBtn}
            onClick={() => {setAnswer(!isAnswer)}}>
              <Icons size={14} name={EIcon.comment}/>
              <span className={styles.buttonText}>Ответить</span>
            </button>
          </li>
          <li>
            <button className={styles.controlBtn}>
              <Icons name={EIcon.share}/>
              <span className={styles.buttonText}>Поделиться</span> 
            </button>
          </li>
          <li>
            <button className={styles.controlBtn}>
              <Icons name={EIcon.warning}/>
              <span className={styles.buttonText}>Пожаловаться</span> 
            </button>
          </li>
        </ul>
      </div>
      {isAnswer && <CommentFormContainer answerName={data.name}/>}
      {
      replies !== '' && 
      replies?.data.children.map((replie) => {
        if (typeof replie.data.body === "undefined") return;
        return (
        <div>
          <Comment {...replie.data}/>
        </div>)
      })
    }
    </div>
  );
}
