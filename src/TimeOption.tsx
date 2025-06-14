import styles from './TimeOption.module.pcss';

export default function TimeOption() {
  return (
    <div className="rounded-[40px] bg-black-15 w-[340px] h-[60px] flex justify-evenly items-center px-4 mx-auto ">
      <p className={styles.option}>Pomodoro</p>
      <p className={styles.option}>Short Break</p>
      <p className={styles.option}>Long Break</p>
    </div>
  );
};