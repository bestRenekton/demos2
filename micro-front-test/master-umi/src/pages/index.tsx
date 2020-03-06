import React from 'react';
import styles from './index.less';
import { Link } from 'umi'


export default () => {
  return (
    <div>
      <h1 className={styles.title}>Page index</h1>
      <Link to='/app1'>app1</Link>

    </div>
  );
}
