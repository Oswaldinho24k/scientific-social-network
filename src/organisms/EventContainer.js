import React, { Component } from 'react';
import './Event.css'
import {Event} from './Event';

class EventContainer extends Component {
    render() {
        return (
            <div>
                <Event
                    photo={"https://scontent.fmex5-1.fna.fbcdn.net/v/t31.0-8/10750354_709991969096194_3283481255591579394_o.jpg?oh=6f5f6d1fe22325fa8b543a08f330d220&oe=5ACDFF73"}
                    imagen={"https://scontent.fmex5-1.fna.fbcdn.net/v/t31.0-8/10750354_709991969096194_3283481255591579394_o.jpg?oh=6f5f6d1fe22325fa8b543a08f330d220&oe=5ACDFF73"}
                    title={"Compra carne de puerco"}
                    name={"Brendi JS"}
                    descript={"A text (literary theory) is any object that can be read, including: Documents: Religious text, a writing that a religious tradition considers to be sacred; Textbook, a book of instruction in any branch of study. Text may also refer to: Contents. [hide]. 1 Computing and telecommunications; 2 Arts and media; 3 See also. Computing A text (literary theory) is any object that can be read, including: Documents: Religious text, a writing that a religious tradition considers to be sacred; Textbook, a book of instruction in any branch of study. Text may also refer to: Contents. [hide]. 1 Computing and telecommunications; 2 Arts and media; 3 See also. Computing A text (literary theory) is any object that can be read, including: Documents: Religious text, a writing that a religious tradition considers to be sacred; Textbook, a book of instruction in any branch of study. Text may also refer to: Contents. [hide]. 1 Computing and telecommunications; 2 Arts and media; 3 See also. Computing "}
                    day={"12"}
                    month={"JANUARY"}

                />
            </div>


        );
    }
}

export default EventContainer;
