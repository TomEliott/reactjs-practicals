import React from 'react';

const Button = ({
  children,
  size = 'default',
  type = 'neutral',
  isFull = false,
  disabled = false,
  rounded = true,
  className = '',
  onClick = () => {},
  ...props
}) => {
  const paddingClasses = (() => {
    switch (size) {
      case 'small':
        return 'px-2 py-1';
      default:
        return 'px-4 py-2';
    }
  })();

  const colorName = (() => {
    switch (type) {
      case 'danger':
        return 'red';
      case 'primary':
        return 'indigo';
      case 'success':
        return 'green';
      case 'warning':
        return 'yellow';
      case 'neutral':
      default:
        return 'gray';
    }
  })();

  const disabledClassName = `${
    disabled
      ? 'opacity-50 cursor-not-allowed'
      : `${
          isFull ? `hover:bg-${colorName}-500` : `hover:text-${colorName}-500`
        }`
  }`;

  const roundedClassName = rounded ? 'rounded-md' : '';

  const colorsClassName = isFull
    ? ` border-transparent text-white bg-${colorName}-600 focus:outline-none focus:shadow-outline-${colorName} focus:border-${colorName}-700 active:bg-${colorName}-700`
    : ` border-${colorName}-300 text-${colorName}-700 bg-white focus:outline-none focus:shadow-outline-blue focus:border-blue-300 active:text-${colorName}-800 active:bg-${colorName}-50`;

  const finalClassName = `inline-flex items-center ${paddingClasses} border ${disabledClassName} text-sm font-medium ${roundedClassName} ${colorsClassName} border transition duration-150 ease-in-out ${className}`;

  return (
    <button
      type="button"
      className={finalClassName}
      onClick={disabled ? () => {} : onClick}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
