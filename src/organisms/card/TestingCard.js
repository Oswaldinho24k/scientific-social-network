/**
 * Created by BlisS on 22/03/17.
 */
import React from 'react';
import {Card} from "./Card";

const texto = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim error est in iusto maiores, nisi odio officia officiis optio quibusdam, quis, quisquam quod repellat? Adipisci culpa nam numquam odio sapiente.\n "
const img = "https://firebasestorage.googleapis.com/v0/b/concamin-c2a9c.appspot.com/o/97tQj9i5mQThSRBG9ZxOgX9ItTC3%2FperfilPic?alt=media&token=6dc397b9-ba07-49d0-bf69-80f8d48a2f31"
export const TestingCard = ({props}) => {
    return (
        <div style={{display:"flex", flexDirection:"column", position:"relative", margin:"0 auto", maxWidth:500}}>
            <Card
                title={<h2>Perro</h2>}
                date={"12-14-2017"}
                body={texto}
                image={"https://firebasestorage.googleapis.com/v0/b/concamin-c2a9c.appspot.com/o/97tQj9i5mQThSRBG9ZxOgX9ItTC3%2FperfilPic?alt=media&token=6dc397b9-ba07-49d0-bf69-80f8d48a2f31"}
            />
            <Card
                title={<h2>Perro</h2>}
                date={"12-14-2017"}
                body={texto}
                image={"https://firebasestorage.googleapis.com/v0/b/concamin-c2a9c.appspot.com/o/97tQj9i5mQThSRBG9ZxOgX9ItTC3%2FperfilPic?alt=media&token=6dc397b9-ba07-49d0-bf69-80f8d48a2f31"}
            />
            <Card
                title={<h2>Perro</h2>}
                date={"12-14-2017"}
                body={texto}
                image={"https://firebasestorage.googleapis.com/v0/b/concamin-c2a9c.appspot.com/o/97tQj9i5mQThSRBG9ZxOgX9ItTC3%2FperfilPic?alt=media&token=6dc397b9-ba07-49d0-bf69-80f8d48a2f31"}
            />
        </div>
    );
};



//TestingCard.propTypes = {};

const styles = {
    name: {}
};

