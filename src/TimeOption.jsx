import styles from './TimeOption.module.css';


export default function TimeOption() {
  return (
    <div className="rounded-[40px] bg-black-15 w-[340px] h-[60px]    flex       justify-evenly items-center px-4 mx-auto">
      <p className={styles.TimeOption}>Pomodoro</p>
      <p className={styles.TimeOption}>Short Break</p>
      <p className={styles.TimeOption}>Long Break</p>
    </div>
  );
};