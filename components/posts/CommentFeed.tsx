import CommentItem from "./CommentItem";

interface CommentFeedProps {
  comments?: Record<string, any>[];
}

const CommentFeed: React.FC<CommentFeedProps> = ({ comments }) => {
  return (
    <>
      {comments?.map((comment: Record<string, any>) => (
        <CommentItem data={comment} key={comment.id} />
      ))}
    </>
  );
};

export default CommentFeed;
