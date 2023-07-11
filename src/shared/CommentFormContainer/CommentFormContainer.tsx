import React, { FormEvent, ChangeEvent, useContext, useEffect, useRef } from 'react';
import { userContext } from '../context/userContext';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, updateComment } from '../../store';
import { CommentForm } from '../CommentForm';

interface ICommentFormContainerProps {
    answerName?: string;
  }

export function CommentFormContainer({answerName}:ICommentFormContainerProps) {
  const commentValue = useSelector<RootState, string>(state => state.commentText);
  const dispath = useDispatch();

  const {name} = useContext(userContext);
  const areaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    dispath(updateComment(`${answerName? answerName : name}, оставьте ваш комментарий`));
    if (answerName) {
      if (!areaRef.current) return
      else areaRef.current.focus();
    }
  }, [name]);

  function hendleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
  }

  function hendleChange(event: ChangeEvent<HTMLTextAreaElement>) {
    dispath(updateComment(event.target.value));
  }
  return (
    <CommentForm
        value={commentValue}
        onChange={hendleChange}
        onSubmit={hendleSubmit}
        ref={areaRef}
    />
  );
}
