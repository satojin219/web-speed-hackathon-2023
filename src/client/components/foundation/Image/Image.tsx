import classNames from 'classnames';
import type { ComponentProps, FC } from 'react';

import * as styles from './Image.styles';

type Props = Omit<ComponentProps<'img'>, 'className'> & {
  className?: string;
  fill?: boolean;
};

export const Image: FC<Props> = ({ className,fill, ...rest }) => {
  return (
    <img
      className={classNames(styles.container(), {
        [styles.container__fill()]: fill === true,
      },className)}
      loading="lazy"
      {...rest}
    />
  );
};
