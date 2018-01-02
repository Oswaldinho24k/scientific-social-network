import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import './post_card.css';
import {MiAvatar} from "../../organisms/index";

const PostCard = ({image, text, user}) => {
    return (
        <div className="post-card">
            <Card>
                <CardHeader
                    title={user}
                    subtitle="Fecha del post"
                    avatar="https://static.pexels.com/photos/355956/pexels-photo-355956.jpeg"
                />
                <MiAvatar
                    link={'/avatar'}
                    component={<button>lol</button>}
                    name={'Oswaldinho'}
                    title={'backend developer'}
                    image={"https://avatars2.githubusercontent.com/u/20528181?s=460&v=4"}/>
                <CardMedia>
                    <img src={image} alt="" />
                </CardMedia>

                <CardText>
                    {text}
                </CardText>

            </Card>

        </div>
    )
};

export default PostCard;