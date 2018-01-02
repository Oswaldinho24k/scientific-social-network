import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as organizationActions from '../../redux/actions/organizationsActions';
import {Paper, FloatingActionButton, Dialog, FlatButton, Avatar, GridTile, GridList} from 'material-ui';
import ContentAdd from 'material-ui/svg-icons/content/add';
import {Link} from 'react-router-dom';
import Work from 'material-ui/svg-icons/action/work';
import './organizations.css'
import toastr from 'toastr';
import OrganizationForm from "./OrganizationForm";


class OrganizationsPage extends Component {

    state={
      newOrg:{},
      open:false,
    };

    //newOrganization
    handleText=(e)=>{
      let newOrg = this.state.newOrg;
      let field = e.target.name;
      newOrg[field] = e.target.value;
      this.setState({newOrg});
        console.log(newOrg)
    };

    saveOrganization=()=>{
        this.props.organizationActions.saveOrganization(this.state.newOrg)
            .then(r=>{
                toastr.success('Añadido con éxito');
                this.setState({open:false, newOrg:{}});
            }).catch(e=>{
                toastr.error('Hubo un problema')
        })

    };
    //Modal
    handleOpen = () => {
        this.setState({open: true});
    };

    handleClose = () => {
        this.setState({open: false});
    };

    render() {
        const actions = [
            <FlatButton
                label="Cancel"
                primary={true}
                onClick={this.handleClose}
            />,
            <FlatButton
                label="Submit"
                primary={true}
                keyboardFocused={true}
                onClick={this.saveOrganization}
            />,
        ];
        return (
            <div className="organizations-page">
                <h1>Organizations</h1>
                <GridList cellHeight={'auto'} cols={3}>
                    {this.props.organizations.map((o, key)=>{
                        return(
                            <GridTile cols={1}
                                      className="organization-card"
                                      containerElement={<Link to={`/organizations/${o.id}`}/>}>
                                <Paper zDepth={2} key={key} className="organization-card">
                                    <h3>{o.name}</h3>
                                    <div className="organization-content">
                                        <Avatar size={100} icon={<Work/>}/>
                                        <div>
                                            <p>200 Usuarios</p>
                                            <p>500 Seguidores</p>
                                            <p>100 posts</p>
                                        </div>
                                    </div>

                                </Paper>
                            </GridTile>
                        )
                    })}
                </GridList>
                <FloatingActionButton
                    className='floating-button'
                onClick={this.handleOpen}>
                    <ContentAdd />
                </FloatingActionButton>
                <Dialog
                    title="Dialog With Actions"
                    actions={actions}
                    modal={false}
                    open={this.state.open}
                    onRequestClose={this.handleClose}>
                    <OrganizationForm
                        organization={this.state.newOrg}
                        handleText={this.handleText}
                    />
                </Dialog>
            </div>
        );
    }
}


function mapStateToProps(state, ownProps) {
    return {
        organizations: state.organizations.list,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        organizationActions: bindActionCreators(organizationActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(OrganizationsPage);
