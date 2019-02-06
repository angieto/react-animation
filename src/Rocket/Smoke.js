import React from 'react';
import styles from './Smoke.module.css';

export default class Smoke extends React.Component {
  render() {
    return (
      <div className={styles.smoke}>
        <video src="/smoke.mov" autoPlay loop className={styles.video}></video>
      </div>
    );
  }
}
