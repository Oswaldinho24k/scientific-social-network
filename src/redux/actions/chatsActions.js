import firebase from '../../firebase';

const db = firebase.database().ref("dev");

//get the chats

export const ADD_CHAT_SUCCESS = "ADD_CHAT_SUCCESS";

function addChatSuccess(chat){
    return {
        type:ADD_CHAT_SUCCESS,
        chat
    }
}

export const getUserChats = () => (dispatch, getState) => {
    firebase.auth().onAuthStateChanged(user=>{
        if(!user) return null;
        //console.log(user.uid)
        db.child("users").child(user.uid)
            .on("value", snap=>{
                if(!snap.val()) return false;
                const profile = snap.val();
                const chats = Object.keys(profile.chats);
                //agregamos los chats al reducer
                for (let c of chats){
                    db.child("chats").child(c)
                        .once("value")
                        .then(snap=>{
                            const chat = snap.val();
                            dispatch(addChatSuccess(chat))
                        })
                }
            })
    });
};


//submit message to chat
export const submitMessage = (message, userId, currentChat) => (dispatch) => {
    let updates = {};
    const messages = currentChat.messages;
    messages.push({date:new Date(), message, read:false, user: userId});
    updates[`/chats/${currentChat.id}/messages/`] = messages;
    db.update(updates);
};