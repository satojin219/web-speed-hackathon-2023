import type { FC } from 'react';
import { useEffect, useState } from 'react';

import type { MediaFileFragmentResponse } from '../../../../graphql/fragments';
import { getMediaType } from '../../../../utils/get_media_type';
import { Image } from '../../../foundation/Image';

import * as styles from './MediaItem.styles';
import { loadThumbnail } from './loadThumbnail';

type Props = {
  file: MediaFileFragmentResponse;
};

export const MediaItem: FC<Props> = ({ file }) => {
  const [imageSrc, setImageSrc] = useState<string>();
  const mediaType = getMediaType(file.filename);

  useEffect(() => {
    if (mediaType === 'image') {
      return setImageSrc(file.filename);
    }
    loadThumbnail(file.filename).then((url) => setImageSrc(url));
  }, [file.filename, mediaType]);

  if (imageSrc === undefined) {
    return null;
  }

  return (
    <div className={styles.container()}>
      <Image fill loading='eager'  src={imageSrc.replace('jpg', 'avif')} />
      {mediaType === 'video' && (
        <div  className={styles.playIcon()}>
          <img alt="プレイ" height={16} loading="lazy" src="/icons/play-solid.svg" width={16} />
        </div>
      )}
    </div>
  );
};
