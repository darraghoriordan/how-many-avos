import React, { PropTypes } from 'react';
import Cleave from 'cleave.js/react';

const TextInput = ({ name, label, additionalClasses, onChange, placeholder, value, error }) => {
  let wrapperClass = 'form-group';
  if (additionalClasses)
    wrapperClass += " " + additionalClasses;
  if (error && error.length > 0) {
    wrapperClass += " has-error";
  }

  return (
    <div className={wrapperClass}>
      <label htmlFor={name}>{label}</label>
      <div className="field">
        <Cleave
          type="text"
          name={name}
          options={{ numeral: true}}
          className="form-control"
          placeholder={placeholder}
          value={value}
          onChange={onChange} />
        {error && <div className="alert alert-danger">{error}</div>}
      </div>
    </div>
  );
};

TextInput.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  error: PropTypes.string
};

export default TextInput;
