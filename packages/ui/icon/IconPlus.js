/* eslint-disable */

import React from 'react';
import { getIconColor } from './helper';

const DEFAULT_STYLE = {
  display: 'block',
};

const IconPlus = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'px'} height={size + 'px'} style={style} {...rest}>
      <path
        d="M512 85.333333a42.666667 42.666667 0 0 1 42.666667 42.666667v341.333333h341.333333a42.666667 42.666667 0 0 1 0 85.333334h-341.333333v341.333333a42.666667 42.666667 0 0 1-85.333334 0v-341.333333H128a42.666667 42.666667 0 0 1 0-85.333334h341.333333V128a42.666667 42.666667 0 0 1 42.666667-42.666667z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </svg>
  );
};

IconPlus.defaultProps = {
  size: 18,
};

export default IconPlus;
