import React from 'react';
import { useFetchImageURI } from '../hooks/useFetchImageURI';
import styles from './VyktProfile.module.css';

function hash(str: string) {
  let hash = 5381;
  let i = str.length;

  while (i) {
    hash = (hash * 33) ^ str.charCodeAt(--i);
  }

  return hash >>> 0;
}

export type VyktProfileProps = {
  size?: 'sm' | 'md' | 'lg';
  type?: 'square' | 'circle';
  style?: React.CSSProperties;
  address: string;
};

export function VyktProfile({
  size = 'md',
  type = 'circle',
  address,
  style,
}: VyktProfileProps) {
  const { data, isLoading } = useFetchImageURI(address);

  const color: string =
    '#' +
    (parseInt('0x' + hash(address)) & 0xffffff).toString(16).padStart(6, '0');

  return (
    <div
      style={style}
      className={`${type === 'circle' && styles.imageWrapperCircle} ${type ===
        'square' && styles.imageWrapperSquare} ${size === 'md' &&
        styles.md} ${size === 'sm' && styles.sm} ${size === 'lg' && styles.lg}`}
    >
      {isLoading ? (
        <div
          className={styles.image}
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: color,
            opacity: 0.8,
          }}
        >
          <img
            src="https://user-images.githubusercontent.com/76066586/219406726-ed295488-939d-46fd-a85a-1fc163836b18.svg"
            alt="v"
            className={styles.vyktSvg}
          />
        </div>
      ) : (
        <img className={styles.image} src={data as string} alt="Vykt Profile" />
      )}
    </div>
  );
}
