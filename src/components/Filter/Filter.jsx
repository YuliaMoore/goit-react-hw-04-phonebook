import React from 'react';
import PropTypes from 'prop-types';
import { Label } from './Filter.styled';

function Filter({ onChange }) {
  return (
    <Label>
      Find contacts by name
      <input onChange={onChange} />
    </Label>
  );
}

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChangeFilter: PropTypes.func.isRequired,
};

export default Filter;
