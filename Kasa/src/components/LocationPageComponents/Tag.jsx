import React from "react";
import PropTypes from "prop-types";
// Affichage des "tags" à finir
const Tag = ({value}) => {
  return (
    <div>{value}</div>
  )
}

Tag.propTypes = {
  value: PropTypes.string,
}

export default Tag