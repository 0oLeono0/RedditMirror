import React, { FormEvent, ChangeEvent } from 'react';
import { EIcon, Icons } from '../Icon';
import styles from './commentform.css';

interface ICommentFormProps {
  value: string;
  onChange: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
  ref: React.RefObject<HTMLTextAreaElement>;
  answerName?: string;
}

export function CommentForm({ value, onChange, onSubmit, ref }:ICommentFormProps) {
  return (
    <div className={styles.formWrapper}>
      <form action="" className="commentForm" onSubmit={onSubmit}>
        <textarea name="" id="" className={styles.commentInput} onChange={onChange} value={value} ref={ref}></textarea>
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
