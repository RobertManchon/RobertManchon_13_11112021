import 'components/Input/Input.css';
import PropTypes from 'prop-types';
import React from 'react';

/**
 *
 * @param className
 * @param type
 * @param placeholder
 * @param autoComplete
 * @param value
 * @param action
 * @returns {JSX.Element}
 * @constructor
 */
const Input = ({ className, type, placeholder, autoComplete, value, action}) => {
    return (
        <input 
            className={className} 
            type={type} 
            placeholder={placeholder} 
            autoComplete={autoComplete}
            value={value}
            onChange={action}
        />
    );
}

Input.propTypes = {
    className : PropTypes.string.isRequired,
    type : PropTypes.string.isRequired,
    placeholder : PropTypes.string,
    autoComplete : PropTypes.string,
    value : PropTypes.string,
    action: PropTypes.func,
}

export default Input;
