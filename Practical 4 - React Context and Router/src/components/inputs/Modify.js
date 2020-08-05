import React, { useCallback } from 'react';

const Modify = ({
                   value = '',
                   type = 'text',
                   rounded = true,
                   className = '',
                   onChange = () => {},
                   ...props
               }) => {
    const handleOnchange = useCallback((e) => onChange(e.target.value), [
        onChange,
    ]);

    const roundedClassName = rounded ? 'rounded-md' : '';

    return (
        <textarea
            value={value}
            {...props}
            className={`border py-2 px-4 block bg-gray-100 text-sm placeholder-gray-400 text-gray-700 focus:bg-white focus:placeholder-gray-600 hover:border-gray-400 focus:text-gray-700 focus:outline-none ${roundedClassName} transition-colors duration-300 ease-in-out ${className}`}
            type={type}
            onChange={handleOnchange}
        ></textarea>
    );
};

export default Modify;
