'use client';

import SocialTile from '@/components/SocialTile';
import {
  IoLogoInstagram,
  IoLogoFacebook,
  IoLogoTiktok,
  IoLogoYoutube,
} from 'react-icons/io5';
import content from '@/utils/textContent';
import styles from '@/styles/components/socialTiles.module.scss';

const {
  instagram,
  instagramLink,
  facebook,
  facebookLink,
  tiktok,
  tiktokLink,
  youtube,
  youtubeLink,
} = content.social;

const SocialTiles = () => {
  return (
    <ul className={styles.tiles}>
      <SocialTile
        icon={<IoLogoInstagram />}
        text={instagram}
        link={instagramLink}
      />
      <SocialTile
        icon={<IoLogoFacebook />}
        text={facebook}
        link={facebookLink}
      />
      <SocialTile icon={<IoLogoTiktok />} text={tiktok} link={tiktokLink} />
      <SocialTile icon={<IoLogoYoutube />} text={youtube} link={youtubeLink} />
    </ul>
  );
};

export default SocialTiles;
