import axios from "axios";
import React from 'react';
import {useState, useEffect} from 'react';

const Comments = ({comments, postId}) => {
    const [com, setComment] = useState();
    const id = postId;
    const onSubmit = () => {
        console.log(com);
        if(com != undefined){
            axios
                .post(`http://localhost:3002/post/${postId}/comment`, {
                    "newComment": com
                  })
                .then((response) => console.log(response))
                .catch((error) => console.log(error));
        }
    }

    return <div>
        <h5><em>Comments</em></h5>
        {
            comments?.map(c =>
            <p>{c}</p>
            )
        }
        <input type="text" placeholder="New comment" value={com} onChange={(e) => setComment(e.target.value)} />
        <button style={{ marginLeft: '10px', padding: '0px', fontSize: '0.8em'}} onClick={onSubmit}>
        Submit
        </button>
    </div>
};

export default Comments;