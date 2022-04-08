import React from 'react';
import Post from "./Post";
import NewPost from "./NewPost";
import {useState, useEffect} from 'react';
import axios from 'axios';

const Feed = () => {
  /*
  const data = [
    {
      "id": 1,
      "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
      "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
    },
    {
      "id": 2,
      "title": "qui est esse",
      "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
    },
    {
      "id": 3,
      "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
      "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
    },
  ]
  */
  
  const [data, setData] = useState();
  const getPostData = () => {
    axios
      .get('http://localhost:3002/posts')
      .then((res) => setData(res.data))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getPostData();
    console.log('a');
  }, []);

  return (
    <div style={{ maxWidth: '600px', marginLeft: 'auto', marginRight: 'auto'}}>
      {
        data?.map(d =>
          <Post title={d.title} body={d.body} comments={d.comments} key={d.id} postId={d.id} />
        )
      }

      <NewPost/>
    </div>
  )

}


export default Feed;
