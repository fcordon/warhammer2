import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Panel, Table } from 'react-bootstrap';

import { ProfilUpdate } from "../../components/update/ProfilUpdate";
import { getProfile, updateProfile } from '../../actions/ProfilAction';
import { updateMessage } from "../../hocs/updateMessage";

class ProfilTableUpdate extends Component {

  render() {
    return (
      <Panel collapsible header="Personnage">
        <Table condensed bordered hover striped fill>
          <thead>
            <tr>
              <th>Carrière Actuelle</th>
              <th>Ancienne Carrière</th>
              <th>Update</th>
            </tr>
          </thead>
          <tbody>
            {this.props.profile.map((perso, i) => <ProfilUpdate key={i}
            getProfile={this.props.getProfile}
            updateProfile={this.props.updateProfile}
            {...perso} />)
          }
        </tbody>
      </Table>
    </Panel>
  )
}
}

function mapStateToProps(state){
  return {
    profile: state.profile.profile,
    msg: state.profile.msg,
    style: state.profile.style
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    getProfile,
    updateProfile
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(updateMessage(ProfilTableUpdate));
