import { IComents } from '@/components/fakeData/coments/coments.types';
import styles from './coments.module.scss'


const ComentsItem = ({text, date, name, id}: IComents) => {
  return (
    <div key={id} className={styles.commnetsItems}>
        <div className={styles.date}>{date}</div>    
        <h4 className={styles.name}>{name}</h4>
        <p className={styles.text}>{text}</p>
    </div>
  );
};

export default ComentsItem;
