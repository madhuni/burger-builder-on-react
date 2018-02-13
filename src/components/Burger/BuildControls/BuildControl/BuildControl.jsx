import React from 'react';

const buildControl = (props) => (
  <div className="build-control">
    <div className="build-control__label">{ props.label }</div>
    <div className="build-control__btn-container">
      <button className="btn btn--less" onClick={props.removed} disabled={props.disabled}>Less</button>
      <button className="btn btn--more" onClick={props.added}>More</button>
    </div>
  </div>
);

export default buildControl;