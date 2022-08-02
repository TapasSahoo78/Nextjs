import { comments } from "../../../data/comments";

export default function handler(req, res) {
    const { commentId } = req.query;
    if (req.method === 'GET') {
        const comment = comments.find((comments) => comments.id === parseInt(commentId));
        res.status(200).json(comment);
    } else if (req.method === 'DELETE') {
        const deletecomment = comments.find((comments) =>
            comments.id === parseInt(commentId));
        console.log(deletecomment);
        const index = comments.findIndex((comments) => comments.id === parseInt(commentId));
        comments.splice(index, 1);
        //console.warn(index);
        res.status(200).json(deletecomment);
    } else if (req.method === 'PUT') {
        const updatecomment = comments.find((comments) =>
            comments.id === parseInt(commentId));
        console.log(deletecomment);
        //const index = comments.findIndex((comments) => comments.id === parseInt(commentId));
        // const text = req.body.text;
        // console.log(text);
        // const newComment = {
        //     id: Date.now(),
        //     text: text,
        // }
        // comments.push(newComment);

        //comments.splice(index, 1);
        //console.warn(index);
        res.status(200).json(updatecomment);
    }

}