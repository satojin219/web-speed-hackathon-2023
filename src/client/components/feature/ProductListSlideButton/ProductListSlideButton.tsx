import classNames from 'classnames';
import type { FC } from 'react';

import * as styles from './ProductListSlideButton.styles';

export const ArrowType = {
  LEFT: 'LEFT',
  RIGHT: 'RIGHT',
} as const;
export type ArrowType = typeof ArrowType[keyof typeof ArrowType];

type Props = {
  arrowType: ArrowType;
  disabled: boolean;
  onClick: () => void;
};

export const ProductListSlideButton: FC<Props> = ({ arrowType, disabled, onClick }) => {
  return (
    <button
      className={classNames(styles.container(), {
        [styles.container__disabled()]: disabled,
      })}
      disabled={disabled}
      onClick={onClick}
    >
      {arrowType === ArrowType.LEFT ? (
        <img alt="左矢印" height={16} loading="lazy" src="/public/icons/arrow-left-solid.svg" width={16} />
      ) : (
        <img alt="右矢印" height={16} loading="lazy" src="/icons/arrow-right-solid.svg" width={16} />
      )}
    </button>
  );
};
