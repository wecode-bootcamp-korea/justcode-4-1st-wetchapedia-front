import styles from './CommentCard.module.scss';

const CommentCard = props => {
  let shortCommentContent = '';

  function cutCommentContent(inputText) {
    if (inputText.length > 200) {
      for (let i = 0; i < 200; i++) {
        shortCommentContent += inputText[i];
      }
      shortCommentContent += '...';
    } else {
      shortCommentContent = inputText;
    }
  }

  cutCommentContent(props.commentContent);

  return (
    <div className={styles.CommentCardWrapper}>
      <div className={styles.NameAndWantsWrapper}>
        <div className={styles.Name}>{props.userName}</div>
        <button className={styles.Want}>보고싶어요</button>
      </div>
      <div className={styles.Line} />
      <div className={styles.CommentContentWrapper}>{shortCommentContent}</div>
      <div className={styles.Line} />
      <div className={styles.CommentLikeWrapper}>
        <div className={styles.LikeCount}>{props.likeCount}</div>
      </div>
      <div className={styles.Line} />
      <div className={styles.CommentLikeWrapper}>
        <div className={styles.LikeButton}>좋아요</div>
      </div>
    </div>
  );
};

export default CommentCard;
