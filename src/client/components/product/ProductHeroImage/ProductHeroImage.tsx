import classNames from 'classnames';
import { memo, useEffect, useState } from 'react';
import type { FC } from 'react';

// import { AspectRatio } from '../../foundation/AspectRatio';
import type { ProductFragmentResponse } from '../../../graphql/fragments';
import { Anchor } from '../../foundation/Anchor';
import { DeviceType, GetDeviceType } from '../../foundation/GetDeviceType';
import { Image } from '../../foundation/Image';
import { WidthRestriction } from '../../foundation/WidthRestriction';

import * as styles from './ProductHeroImage.styles';

type Props = {
  product: ProductFragmentResponse;
  title: string;
};

export const ProductHeroImage: FC<Props> = memo(({ product, title }) => {
  const thumbnailFile = product.media.find((productMedia) => productMedia.isThumbnail)?.file;

  const [imageDataUrl, setImageDataUrl] = useState<string>();

  useEffect(() => {
    if (thumbnailFile == null) {
      return;
    }
    setImageDataUrl(thumbnailFile.filename.replace('jpg', 'avif'));
  }, [thumbnailFile]);

  if (imageDataUrl === undefined) {
    return null;
  }

  return (
    <GetDeviceType>
      {({ deviceType }) => {
        return (
          <WidthRestriction>
            <Anchor href={`/product/${product.id}`}>
              <div className={styles.container()}>
                <Image className={styles.image()} loading="eager" src={imageDataUrl} />
                <div className={styles.overlay()}>
                  <p
                    className={classNames(styles.title(), {
                      [styles.title__desktop()]: deviceType === DeviceType.DESKTOP,
                      [styles.title__mobile()]: deviceType === DeviceType.MOBILE,
                    })}
                  >
                    {title}
                  </p>
                  <p
                    className={classNames(styles.description(), {
                      [styles.description__desktop()]: deviceType === DeviceType.DESKTOP,
                      [styles.description__mobile()]: deviceType === DeviceType.MOBILE,
                    })}
                  >
                    {product.name}
                  </p>
                </div>
              </div>
            </Anchor>
          </WidthRestriction>
        );
      }}
    </GetDeviceType>
  );
});

ProductHeroImage.displayName = 'ProductHeroImage';
