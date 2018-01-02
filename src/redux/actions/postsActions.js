import firebase from '../../firebase';



const db = firebase.database().ref();

export const NEW_POST_SUCCESS = 'NEW_POST_SUCCESS';

export function newPostSuccess(post){
    return{
        type:NEW_POST_SUCCESS, post
    }
}

export function savePost(post){
    return function(dispatch, getState){
        let updates = {};
        let key;
        if(post.id) key = post.id;
        else key = db.push().key;

        let user = getState().usuario;
        post['id'] = key;
        post['user'] = user.id;
        post['date'] = Date.now();
        if(user.photoURL && user.displayName) {
            post['user_photo'] = user.photoURL;
            post['username'] = user.displayName;
        }
        updates[`dev/posts/${key}`] = post;
        updates[`dev/users/${user.id}/posts/${post.id}`] = true;
        if(post.group) updates[`dev/groups/${post.group}/posts/${post.id}`] = true;
        if(post.event) updates[`dev/events/${post.event}/posts/${post.id}`] = true;
        if(post.organization) updates[`dev/organizations/${post.organization}/posts/${post.id}`] = true;
        return db.update(updates)
            .then(snap=>{
                return Promise.resolve(snap)
            }).catch(error=>{
                console.log(error);
                return Promise.reject(error.message)
            })
    }
}
export const deletePost=(post)=>(dispatch, getState)=>{
    const uid = getState().usuario.uid;
    let updates = {};
    updates[`dev/posts/${post.id}`] = null;
    updates[`dev/users/${uid}/posts/${post.id}`] = null;
    if(post.group) updates[`dev/groups/${post.group}/posts/${post.id}`] = null;
    if(post.event) updates[`dev/events/${post.event}/posts/${post.id}`] = null;
    if(post.organization) updates[`dev/organizations/${post.organization}/posts/${post.id}`] = null;

    return db.update(updates)
        .then(snap=>{
            return Promise.resolve(snap)
        }).catch(error=>{
            console.log(error);
            return Promise.reject(error.message)
        })

};


export const newPost=()=>(dispatch, getState)=>{
    db.child('dev/posts/').on('child_added', snap=>{
        dispatch(newPostSuccess(snap.val()))
    })
};

