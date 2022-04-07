import React from 'react';

type Props = {
  label: string;
  onClick: () => void;
};

const Button: React.FC<Props> = ({ label, onClick }) => {
  return (
    <button
      className="rounded-full bg-blue-500 py-2 px-4 font-bold text-white hover:bg-blue-700"
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Button;
