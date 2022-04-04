import styles from './Comment_popup.module.scss';

function Comment_popup() {
  return (
    <div className="Comment_popup">
      <section className={styles.comment}>
        <header className={styles.comment__header}>
          <main className={styles.comment__main}>
            <input
              className={styles.comment__input}
              placeholder="이 작품에 대한 생각을 자유롭게 표현해주세요."
            />
          </main>
        </header>
      </section>
    </div>
  );
}

export default Comment_popup;
