/* eslint-disable */

import { SVGAttributes, FunctionComponent } from 'react';
export { default as IconPlus } from './IconPlus';
export { default as IconComma } from './IconComma';

interface Props extends Omit<SVGAttributes<SVGElement>, 'color'> {
  name: 'plus' | 'comma';
  size?: number;
  color?: string | string[];
}

declare const IconFont: FunctionComponent<Props>;

export default IconFont;
