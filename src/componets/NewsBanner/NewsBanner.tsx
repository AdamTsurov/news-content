import { formatTimeAgo } from '../../helpers/formatTimeAgo';
import type { INews } from '../../interfaces';
import Image from '../Image/Image';
import styles from './styles.module.css';

interface Props {
  item: INews;
}

const NewsBanner = ({ item }: Props) => {
  if (!item) {
    return <div>Нет новостей</div>;
  }

  return (
    <div className={styles.banner}>
      <Image image={item?.urlToImage} />
      <h3 className={styles.title}>{item.title}</h3>
      <p className={styles.extra}>
        {formatTimeAgo(item.publishedAt)} by {item.author}
      </p>
    </div>
  );
};

export default NewsBanner;
