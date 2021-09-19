import React from 'react';
import { useHistory } from 'react-router-dom';
import './success.css';

export const Success = () => {
  const history = useHistory()

  return (
    <div className="successBlock">
      <div className="success">
        Success
      </div>
      <button
        className="home"
        onClick={() => {
          history.push('/')
        }}>
        Back
      </button>
    </div>
  )
}
