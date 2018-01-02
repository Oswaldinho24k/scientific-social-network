import firebase from '../../firebase';

let db = firebase.database().ref();


export const GET_ALL_GROUPS = 'GET_ALL_GROUPS';

export function getAllGroupsSuccess(groups){
    return{
        type:GET_ALL_GROUPS, groups
    }
}

export function getAllGroups(){
    return function(dispatch, getState){
        return db.child('dev').child('groups').once('value', r=>{
            let groups = [];
            for(let i in r.val()){
                let grupo = r.val()[i];
                groups.push(grupo);
            }
            dispatch(getAllGroupsSuccess(groups))
        })
    }
}

export const NEW_GROUP_SUCCESS = 'NEW_GROUP_SUCCESS';

export function newGroupSuccess(group){
    return{
        type:NEW_GROUP_SUCCESS, group
    }
}

export function newGroup(group){
    return function(dispatch, getState){
        let key;
        if(group.id) key = group.id;
        else key = db.push().key;
        group['id'] = key;
        let updates = {};
        updates[`dev/groups/${group.id}`] = group;
        return db.update(updates).then(r=>{

            dispatch(newGroupSuccess(group));
        })
    }
}