/**
 * Created by BlisS on 22/03/17.
 */
import React from 'react';
import PropTypes from 'prop-types';
import './card.css';
import moment from 'moment';
const img = "https://www.w3schools.com/howto/img_avatar.png";


export const Card = ({
                         title,
                         date,
                         body,
                         image,
                         footerColor,
                         footerName,
                         style
}) => {
    return (
        <div className="bliss-card" style={style || null}>
            <article>
                <header>
                    {title}
                    <span>{date ? moment(date).fromNow():null}</span>
                </header>

                <section>

                        {body}

                    {image && <img src={image} alt="principal pic"/>}
                </section>
            </article>
            {footerName && <footer style={{backgroundColor:footerColor?footerColor:"white"}}>

                  <p>
                    <span>
                        {footerName}
                    </span>
                  </p>

            </footer>}
        </div>
    );


};

Card.propTypes = {
    title: PropTypes.string,
    date:PropTypes.string,
    body:PropTypes.element,
   // title: PropTypes.string,
    //date:PropTypes.number,
    //body:PropTypes.string,
    image:PropTypes.string,
    footerColor:PropTypes.string,
    footerNames:PropTypes.array

};

// Card.defaultProps = {
//     title:<h1>BlsiS</h1>,
//     date: moment("04-17-2017").fromNow(),
//     footerName:"BlisS"
// };

const styles = {
    name: {}
};

