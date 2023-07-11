import React, { FormEvent, ChangeEvent, useState, useContext, useEffect, useRef } from 'react';
import { userContext } from '../context/userContext';
import { EIcon, Icons } from '../Icon';
import styles from './commentform.css';

interface ICommentFormProps {
  answerName?: string
}

export function CommentForm({answerName}:ICommentFormProps) {
  const {name} = useContext(userContext);
  const [commentValue, setCommentValue] = useState('');
  const areaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    setCommentValue(`${answerName? answerName : name}, оставьте ваш комментарий`);
    if (answerName) {
      if (!areaRef.current) return
      else areaRef.current.focus();
    }
  }, [name]);

  function hendleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    console.log(commentValue);
  }

  function hendleChange(event: ChangeEvent<HTMLTextAreaElement>) {
    setCommentValue(event.target.value);
  }

  return (
    <div className={styles.formWrapper}>
      <form action="" className="commentForm" onSubmit={hendleSubmit}>
        <textarea name="" id="" className={styles.commentInput} onChange={hendleChange} value={commentValue} ref={areaRef}></textarea>
        <div className={styles.formControls}>
          <ul className={styles.controlList}>
            <li className={styles.controlItem}><button className={styles.controlBtn} onClick={(e) => {e.preventDefault()}}><Icons name={EIcon.code}/></button></li>
            <li className={styles.controlItem}><button className={styles.controlBtn} onClick={(e) => {e.preventDefault()}}><Icons size={18} name={EIcon.image}/></button></li>
            <li className={styles.controlItem}><button className={styles.controlBtn} onClick={(e) => {e.preventDefault()}}><Icons name={EIcon.document}/></button></li>
            <li className={styles.controlItem}><button className={styles.controlBtn} onClick={(e) => {e.preventDefault()}}><Icons name={EIcon.donwload}/></button></li>
            <li className={styles.controlItem}><button className={styles.controlBtn} onClick={(e) => {e.preventDefault()}}><Icons size={18} name={EIcon.profile}/></button></li>
            <li className={styles.controlItem}><button className={styles.controlBtn} onClick={(e) => {e.preventDefault()}}><Icons name={EIcon.update}/></button></li>
            <li className={styles.controlItem}><button className={styles.controlBtn} onClick={(e) => {e.preventDefault()}}><Icons name={EIcon.link}/></button></li>
            <li className={styles.controlItem}><button className={styles.controlBtn} onClick={(e) => {e.preventDefault()}}><Icons name={EIcon.micro}/></button></li>
            <li className={styles.controlItem}><button className={styles.controlBtn} onClick={(e) => {e.preventDefault()}}><Icons size={20} name={EIcon.discuss}/></button></li>
            <li className={styles.controlItem}><button className={styles.controlBtn} onClick={(e) => {e.preventDefault()}}><Icons size={19} name={EIcon.pen}/></button></li>
            <li className={styles.controlItem}><button className={styles.controlBtn} onClick={(e) => {e.preventDefault()}}><Icons name={EIcon.translite}/></button></li>
            <li className={styles.controlItem}><button className={styles.controlBtn} onClick={(e) => {e.preventDefault()}}><Icons size={20} name={EIcon.PDF}/></button></li>
          </ul>
        <button className={styles.formBtn}>Комментировать</button>
        </div>
      </form>
    </div>
  );
}
