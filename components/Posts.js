import { collection, onSnapshot, orderBy, query } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { db } from "../firebase";
import Post from './Post';


const posts = [
    {
        id : "123",
        username: "sameer",
        userImg: "https://links.papareact.com/jjm",
        img: "https://links.papareact.com/jjm",
        caption: "I AM HOT NA"
    },
    {
        id : "123",
        username: "sameer",
        userImg: "https://links.papareact.com/jjm",
        img: "https://links.papareact.com/jjm",
        caption: "I AM HOT NA"
    },
    {
        id : "123",
        username: "sameer",
        userImg: "https://links.papareact.com/jjm",
        img: "https://links.papareact.com/jjm",
        caption: "I AM HOT NA"
    },
    {
        id : "123",
        username: "sameer",
        userImg: "https://links.papareact.com/jjm",
        img: "https://links.papareact.com/jjm",
        caption: "I AM HOT NA"
    },
    {
        id : "123",
        username: "sameer",
        userImg: "https://links.papareact.com/jjm",
        img: "https://links.papareact.com/jjm",
        caption: "I AM HOT NA"
    },
];


function Posts() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        return onSnapshot(query(collection(db,'posts'), orderBy('timestamp','desc')), snapshot => {
            setPosts(snapshot.docs);
        });
    },[db]);


  return ( 
  <div>
      {posts.map(post => (
          <Post 
                key={post.id}
                id={post.id}
                username={post.data().username}
                userImg={post.data().profileImg}
                img={post.data().image}
                caption={post.data().caption}

          />
      ))} 
  </div>
  );
}

export default Posts;
