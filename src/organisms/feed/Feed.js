import React from 'react';
import {MiAvatar, Card} from "../index";
import NewPost from "../../components/newsfeed/NewPost";

export const Feed = ({posts, uploadPhoto, handleText, text, image, addPost, loader}) => {
    return (
        <div className={'feed-container'}>
            <NewPost
                uploadPhoto={uploadPhoto}
                handleText={handleText}
                text={text}
                image={image}
                addPost={addPost}
                loader={loader}/>

            {posts.map((p, key)=>{
                return(
                    <div key={key}>
                        <Card
                            title={<MiAvatar
                                link={`users/${p.user}`}
                                image={p.user_photo}
                                name={p.username}/>}
                            image={p.image}
                            body={p.text}
                            date={p.date}/>
                    </div>

                )
            })}
        </div>
    )
};
