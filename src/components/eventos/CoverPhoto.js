import React from 'react';
import {CircularProgress} from "material-ui";

let theInput;

const CoverPhoto = ({event, loading}) => {
    return (
        <div>
            <div className="cover-photo" style={{backgroundImage:`url('${event.image}')`}}>
                <button
                    //onClick={clickCover}
                >
                    {loading ? <CircularProgress/> : "Editar evento"}
                </button>
                <input
                    accept="image/*"
                    ref={input=>theInput=input}
                    //onChange={changeCover}
                    hidden
                    type="file"
                />
            </div>
        </div>
    );
};

export default CoverPhoto;