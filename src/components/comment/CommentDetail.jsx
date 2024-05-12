import React from 'react'
import { useParams } from 'react-router-dom'

function CommentDetail() {
  const params = useParams();
  const [comment, setComment] = React.useState(null);
  const commentId = params.id;

  React.useEffect(() => {
    if(!commentId) return;

    async function fetchComment() {
      const res = await fetch(`https://jsonplaceholder.typicode.com/comments/${commentId}`);
      const data = await res.json();
      setComment(data);
    }
    fetchComment();
  }, [commentId])

  console.log("params: ", params)

  if(!comment) return <div>Loading ...</div>

  return (
    <div>
      Email: {comment.email} <br />
      Name: {comment.name} <br />
      Body: {comment.body} <br />
    </div>
  )
}

export default CommentDetail