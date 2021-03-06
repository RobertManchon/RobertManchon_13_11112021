import 'components/Button/Button.css';
import PropTypes from 'prop-types';
import React from 'react';

/**
 *
 * @param className
 * @param text
 * @param action
 * @returns {JSX.Element}
 * @constructor
 */
const Button = ({ className, text, action}) => {
    return (
        <button className={className} onClick={action} >
            {text}
        </button>
    );
}

Button.propTypes = {
    className : PropTypes.string.isRequired,
    text : PropTypes.string.isRequired,
    action: PropTypes.func,
}

export default Button;
