import React from 'react';
import PropTypes from 'prop-types';
const Button = (props) => {
    const { label, clickFunction } = props;
    return (
        <button onClick={() => clickFunction(label)}>
            {label}
        </button>
    );

};
Button.propTypes = {
    label: PropTypes.string.isRequired,
    clickFunction: PropTypes.func.isRequired
};


export default Button;