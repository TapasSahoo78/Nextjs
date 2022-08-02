import React, { useState } from 'react';
import { Button, Input } from '@nextui-org/react';

function CommentPage() {
    const [comments, setComments] = useState([]);
    const [text, setText] = useState('');
    const fetchComments = async () => {
        const response = await fetch('api/comments');
        const data = await response.json();
        setComments(data);
    }
    const submitcomments = async () => {
        const response = await fetch('/api/comments', {
            method: 'POST',
            body: JSON.stringify({ text }),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        //console.log(response);
        const data = await response.json();
        console.log(data);
        fetchComments();
    }
    const deletecomments = async commentId => {
        const response = await fetch(`api/comments/${commentId}`, {
            method: "DELETE",
        });
        const data = await response.json();
        //console.log(data)
        fetchComments();
    }
    const editcomments = async commentId => {
        console.log(commentId);
    }
    return (
        <div>
            <Input type='text' value={text} onChange={(e) => setText(e.target.value)} /><br /><br />
            <Button onClick={submitcomments}>Submit Comment</Button><br />
            <Button onClick={fetchComments}>Load Comment</Button>
            {
                comments.map((cmnt) => {
                    return (
                        <div key={cmnt.id}>
                            {cmnt.id}{cmnt.text}
                            <span><Button onClick={() => deletecomments(cmnt.id)} className="bg-warning" >Delete</Button></span>
                            <span><Button onClick={() => editcomments(cmnt.id)} className="bg-warning" >Update</Button></span>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default CommentPage;

