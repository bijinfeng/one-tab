/* eslint-disable */

import React from 'react';
import IconPlus from './IconPlus';
import IconComma from './IconComma';
export { default as IconPlus } from './IconPlus';
export { default as IconComma } from './IconComma';

const IconFont = ({ name, ...rest }) => {
  switch (name) {
    case 'plus':
      return <IconPlus {...rest} />;
    case 'comma':
      return <IconComma {...rest} />;

  }

  return null;
};

export default IconFont;
