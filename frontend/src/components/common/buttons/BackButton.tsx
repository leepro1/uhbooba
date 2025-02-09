import React from 'react';
import { useNavigate } from 'react-router-dom';

type BackButtonProps = {
  onClick?: () => void;
  className?: string;
};

const BackButton: React.FC<BackButtonProps> = ({ onClick, className }) => {
  const navigate = useNavigate();

  const handleBack = () => {
    if (onClick) {
      onClick();
    }
    navigate(-1);
  };

  return (
    <button onClick={handleBack} className={className}>
      <svg
        xmlns='http://www.w3.org/2000.svg'
        fill='none'
        viewBox='0 0 24 24'
        strokeWidth={2}
        stroke='black'
        className='h-7 w-7'
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          d='M15 19l-7-7 7-7'
        />
      </svg>
    </button>
  );
};

export default BackButton;
