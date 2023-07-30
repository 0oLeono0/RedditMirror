import React from 'react';
import { EIcon, Icons } from '../Icon';
import styles from './commentform.css';
import { Formik, Form, Field } from 'formik';

interface ICommentFormProps {
  value: string;
  onSubmit: (values: { comment: string }) => void;
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  answerName?: string;
}

export function CommentForm({onChange, onSubmit, answerName, value }: ICommentFormProps) {
  return (
    <div className={styles.formWrapper}>
      <Formik
        initialValues={{ comment: '' }}
        onSubmit={(values, { resetForm }) => {
          onSubmit(values);
          resetForm();
        }}
      >
        {() => (
          <Form className="commentForm">
            <Field
              as="textarea"
              name="comment"
              className={styles.commentInput}
              placeholder={`${answerName ? answerName : name}, оставьте ваш комментарий`}
              onChange={onChange}
              value={value}
            />
            <div className={styles.formControls}>
              <ul className={styles.controlList}>
                <li className={styles.controlItem}><button className={styles.controlBtn} onClick={(e) => { e.preventDefault() }}><Icons name={EIcon.code} /></button></li>
                <li className={styles.controlItem}><button className={styles.controlBtn} onClick={(e) => { e.preventDefault() }}><Icons size={18} name={EIcon.image} /></button></li>
                <li className={styles.controlItem}><button className={styles.controlBtn} onClick={(e) => { e.preventDefault() }}><Icons name={EIcon.document} /></button></li>
                <li className={styles.controlItem}><button className={styles.controlBtn} onClick={(e) => { e.preventDefault() }}><Icons name={EIcon.donwload} /></button></li>
                <li className={styles.controlItem}><button className={styles.controlBtn} onClick={(e) => { e.preventDefault() }}><Icons size={18} name={EIcon.profile} /></button></li>
                <li className={styles.controlItem}><button className={styles.controlBtn} onClick={(e) => { e.preventDefault() }}><Icons name={EIcon.update} /></button></li>
                <li className={styles.controlItem}><button className={styles.controlBtn} onClick={(e) => { e.preventDefault() }}><Icons name={EIcon.link} /></button></li>
                <li className={styles.controlItem}><button className={styles.controlBtn} onClick={(e) => { e.preventDefault() }}><Icons name={EIcon.micro} /></button></li>
                <li className={styles.controlItem}><button className={styles.controlBtn} onClick={(e) => { e.preventDefault() }}><Icons size={20} name={EIcon.discuss} /></button></li>
                <li className={styles.controlItem}><button className={styles.controlBtn} onClick={(e) => { e.preventDefault() }}><Icons size={19} name={EIcon.pen} /></button></li>
                <li className={styles.controlItem}><button className={styles.controlBtn} onClick={(e) => { e.preventDefault() }}><Icons name={EIcon.translite} /></button></li>
                <li className={styles.controlItem}><button className={styles.controlBtn} onClick={(e) => { e.preventDefault() }}><Icons size={20} name={EIcon.PDF} /></button></li>
              </ul>
              <button className={styles.formBtn} type="submit">
                Комментировать
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}
