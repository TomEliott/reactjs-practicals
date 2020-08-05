import React from 'react';

const HorizontalGroup = ({ children, className = '', ...props }) => {
  return (
    <div className={`inline-flex ${className}`} {...props}>
      {React.Children.map(children, (child, index) => {
        if (index === 0) {
          return React.cloneElement(child, {
            rounded: false,
            className: `${
              child.props.className ? child.props.className : ''
            } rounded-l`,
          });
        }

        if (index === React.Children.count(children) - 1) {
          return React.cloneElement(child, {
            rounded: false,
            className: `${
              child.props.className ? child.props.className : ''
            } rounded-r`,
            style: {
              borderLeft: 'none',
            },
          });
        }

        return React.cloneElement(child, {
          rounded: false,
          style: {
            borderLeft: 'none',
          },
        });
      })}
    </div>
  );
};

export default HorizontalGroup;
