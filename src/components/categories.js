import React, { useEffect } from 'react';
import PropTypes, { func } from 'prop-types';
import Statuscheck from './status';

function Categories({ statechange }) {
  useEffect(() => {
    statechange(false);
  }, [statechange]);
  return (
    <div className="category">
      <Statuscheck />
    </div>
  );
}
Categories.propTypes = {
  statechange: PropTypes.func,
};
Categories.defaultProps = {
  statechange: func,
};
export default Categories;
