import styles from './Card.module.css'

const Card = (props) => {
  console.log('card' , styles)
  const { title, children } = props;
  return (
    <div className={styles.card}>
      <h1 className={styles.h1}>{title}</h1>
      <div>{children}</div>
    </div>
  );
};
export default Card;
