import React from 'react';
import styles from '../styles/Featured.module.css';
import Image from 'next/image';

const Featured = () => {
  const images = [
    "/img/featured.png",
    "/img/featured2.png",
    "/img/featured3.png",
  ]

  return (
    <div className={styles.container}>
      <Image src="/img/arrow1.png" alt="" />
      <div className={styles.wrapper}>
        <div className={styles.imgContainer}>
          {images.map(img => <Image key={img} src={img} alt="" />)}
        </div>
      </div>
      <Image src="/img/arrowr.png" alt="" />
    </div>
  )
}

export default Featured