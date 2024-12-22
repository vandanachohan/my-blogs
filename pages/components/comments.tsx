// components/Comments.tsx
import { useState } from 'react';

const Comments = () => {
  const [comments, setComments] = useState<string[]>([]);
  const [newComment, setNewComment] = useState<string>('');

  const handleCommentSubmit = () => {
    if (newComment.trim()) {
      setComments((prevComments) => [...prevComments, newComment]);
      setNewComment('');
    }
  };

  return (
    <div className="mt-6">
      <h2 className="text-xl font-semibold text-red-600">Comments</h2>
      <ul className="mt-2 space-y-2">
        {comments.map((comment, index) => (
          <li key={index} className="border border-red-500 rounded-md p-2">
            {comment}
          </li>
        ))}
      </ul>

      <div className="mt-4">
        <textarea
          className="w-full p-2 border border-red-500 rounded-md bg-black text-white"
          placeholder="Write your comment..."
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
        />
        <button
          className="mt-2 bg-red-600 text-white px-4 py-2 rounded-md"
          onClick={handleCommentSubmit}
        >
          Add Comment
        </button>
      </div>
    </div>
  );
};

export default Comments;
