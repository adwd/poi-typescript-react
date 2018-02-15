import * as React from 'react'
import * as styles from './hello.scss';

const Hello = () => (
  <div className={styles.hello}>
    hello <span className={styles.inside}>poi typescript react</span>
  </div>
)

export default Hello
