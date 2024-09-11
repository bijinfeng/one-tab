/* eslint-disable */

import React from 'react';
import { getIconColor } from './helper';

const DEFAULT_STYLE = {
  display: 'block',
};

const IconComma = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'px'} height={size + 'px'} style={style} {...rest}>
      <path
        d="M614.4 153.6v460.8h102.4v307.2h102.4l102.4-358.4V153.6h-307.2zM102.4 153.6v460.8h102.4v307.2h102.4l102.4-358.4V153.6H102.4z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </svg>
  );
};

IconComma.defaultProps = {
  size: 18,
};

export default IconComma;
