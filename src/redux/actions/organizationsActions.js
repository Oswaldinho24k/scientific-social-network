import firebase from '../../firebase';
const db = firebase.database().ref();



export const GET_ORGANIZATIONS_SUCCESS = 'GET_ORGANIZATIONS_SUCCESS';
export function getOrganizationsSuccess(organization){
    return {
        type:GET_ORGANIZATIONS_SUCCESS, organization
    }
}

export const getOrganizations=()=>(dispatch, getState)=>{
    db.child('dev').child('organizations').on('child_added', snap=>{
        dispatch(getOrganizationsSuccess(snap.val()))
    })
};

export const SAVE_ORGANIZATION_SUCCESS = 'SAVE_ORGANIZATION_SUCCESS';
export function saveOrganizationSuccess(organization){
    return{
        type:SAVE_ORGANIZATION_SUCCESS, organization
    }
}

export const saveOrganization=(organization)=>(dispatch, getState)=>{
  let updates = {};
  let user = getState().usuario;
    let key;
    if(organization.id) key = organization.id;
    else key = db.push().key;
  organization['id'] = key;
  updates[`dev/organizations/${organization.id}`] = organization;
  updates[`dev/users/${user.id}/organizations/${organization.id}/`] = true;
  return db.update(updates)
      .then((snap)=>{
        return Promise.resolve(snap)
      }).catch(e=>{
          return Promise.reject(e)
  })
};

export const DELETE_ORGANIZATION_SUCCESS = 'DELETE_ORGANIZATION_SUCCESS';
export function deleteOrganizationSuccess(organization){
    return{
        type: DELETE_ORGANIZATION_SUCCESS, organization
    }
}

export const deleteOrganization=(organization)=>(dispatch, getState)=>{
  let updates={};
    let user = getState().user;
    updates[`dev/organizations/${organization.id}`] = null;
    updates[`dev/users/${user.id}/organizations/${organization.id}/`] = null;
    return db.update(updates)
        .then(r=>{
            return Promise.resolve(r)
        }).catch(e=>{
            return Promise.reject(e)
    })
};

