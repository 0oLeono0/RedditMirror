import React, { ChangeEvent, useContext, useEffect, useRef } from 'react';
import { userContext } from '../context/userContext';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, updateComment } from '../../store';
import { CommentForm } from '../CommentForm';

interface ICommentFormContainerProps {
  answerName?: string;
}

export function CommentFormContainer({ answerName }: ICommentFormContainerProps) {
  const commentValue = useSelector<RootState, string>(state => state.commentText);
  const dispatch = useDispatch();

  const { name } = useContext(userContext);
  const areaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    dispatch(updateComment(`${answerName ? answerName : name}, оставьте ваш комментарий`));
    if (answerName && areaRef.current) {
      areaRef.current.focus();
    }
  }, [name]);

  function handleSubmit(values: { comment: string }) {
    console.log(values.comment);
  }
  
  function handleChange(event: ChangeEvent<HTMLTextAreaElement>) {
    dispatch(updateComment(event.target.value));
  }



  return (
    <CommentForm
      value={commentValue}
      onSubmit={handleSubmit}
      onChange={handleChange}
      answerName={answerName}
    />
  );
}
