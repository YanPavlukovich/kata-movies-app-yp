import React from 'react';
import { useAppSelector } from '../../hooks/hooks';
import { selectError } from '../../store/slices/error-slice';

import { Alert } from 'antd';

import './error-text.scss';

const ErrorText = () => {
  const { active, description, text } = useAppSelector(selectError).error;

  if (!active) {
    return null;
  }

  return (
    <div className={'error-text'}>
      <Alert message={text} type="error" description={description} />
    </div>
  );
};

export default ErrorText;
