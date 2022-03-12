import styles from "./card-cover.module.scss";

type Props = {
  src: string;
  alt?: string;
};

const CardCover = (props: Props) => {
  return (
    <div className={styles.cover}>
      <img src={props.src} alt={props.alt} />
    </div>
  );
};

export { CardCover };
