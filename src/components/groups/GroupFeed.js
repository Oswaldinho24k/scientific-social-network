import React from 'react';
import NewPost from "../newsfeed/NewPost";
import PostCard from "../newsfeed/PostCard";
import {Feed} from "../../organisms/index";

const GroupFeed = ({handleText, addPost, uploadPhoto, newPost, posts, loader}) => {
    return (
        <div>
            <Feed
                handleText={handleText}
                addPost={addPost}
                uploadPhoto={uploadPhoto}
                text={newPost.text}
                image={newPost.image}
                posts={posts}
                loader={loader}
            />


        </div>
    )
};

export default GroupFeed;