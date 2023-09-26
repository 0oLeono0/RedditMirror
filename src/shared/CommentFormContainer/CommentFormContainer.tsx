import React, { ChangeEvent, useEffect, useRef } from 'react';
import { CommentForm } from '../CommentForm';
import { useStore } from '../../store/zustandStore';

interface ICommentFormContainerProps {
  answerName?: string;
}


export function CommentFormContainer({ answerName }: ICommentFormContainerProps) {
  const commentValue = useStore(state => state.commentText);
  const { updateComment } = useStore();
  const areaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    updateComment(`${answerName ? answerName : name}, оставьте ваш комментарий`);
    if (answerName && areaRef.current) {
      areaRef.current.focus();
    }
  }, [answerName]);

  function handleSubmit(values: { comment: string }) {
    console.log(values.comment);
  }

  function handleChange(event: ChangeEvent<HTMLTextAreaElement>) {
    updateComment(event.target.value);
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
