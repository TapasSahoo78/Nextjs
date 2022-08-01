import React, { useState } from 'react';
import { Button } from '@nextui-org/react';

function CommentPage() {
    const [comments, setComments] = useState([]);
    const fetchComments = async () => {
        const response = await fetch('api/comments');
        const data = await response.json();
        setComments(data);
    }
    return (
        <div>
            <Button onClick={fetchComments}>Load Comment</Button>
            {
                comments.map((cmnt) => {
                    return (
                        <div key={cmnt.id}>
                            {cmnt.id}{cmnt.text}
                        </div>
                    )
                })
            }
        </div>
    )
}

export default CommentPage;

