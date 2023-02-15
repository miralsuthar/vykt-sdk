import React from 'react';
import styles from './VyktProfile.module.css';
import { useFetchImageURI } from '../hooks/useFetchImageURI';

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
  const { data } = useFetchImageURI(address);
  return (
    <div
      style={style}
      className={`${type === 'circle' && styles.imageWrapperCircle} ${type ===
        'square' && styles.imageWrapperSquare} ${size === 'md' &&
        styles.md} ${size === 'sm' && styles.sm} ${size === 'lg' && styles.lg}`}
    >
      <img className={styles.image} src={data as string} alt="Vykt Profile" />
    </div>
  );
}
