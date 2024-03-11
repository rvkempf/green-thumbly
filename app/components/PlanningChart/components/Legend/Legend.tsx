import classNames from 'classnames';
import styles from './Legend.module.css';

export const Legend = () => {
  return (
    <div className={styles.legendContainer}>
      <div className={styles.legendItem}>
        <span>Indoor seeding range:</span>
        <div className={classNames(styles.indoorStartRange, styles.block)} />
      </div>
      <div className={styles.legendItem}>
        <span>Outdoor planting range:</span>
        <div className={classNames(styles.plantingRange, styles.block)} />
      </div>
      <div className={styles.legendItem}>
        <span>Harvest range:</span>
        <div className={classNames(styles.harvestRange, styles.block)} />
      </div>
      <div className={styles.legendItem}>
        <span>Average last spring frost:</span>
        <div className={classNames(styles.lastFrostLine, styles.line)} />
      </div>
      <div className={styles.legendItem}>
        <span>Average first fall frost:</span>
        <div className={classNames(styles.firstFrostLine, styles.line)} />
      </div>
    </div>
  );
};
