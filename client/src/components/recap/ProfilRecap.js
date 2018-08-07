import React, { Component } from 'react';
import { Col, Form, FormGroup, FormControl, InputGroup, Button, Panel, Alert } from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { findDOMNode } from 'react-dom';

import { updateProfile, getProfile } from "../../actions/ProfilAction";

class ProfilRecap extends Component {

  constructor(props) {
    super(props);
    let urlParams = window.location.search.substring(1).split('=');
    let recupUser = urlParams[1].split('&');
    let user = recupUser[0];
    let perso = urlParams[2];

    this.state = {
      user: user,
      perso: perso,
      showAlert: false,
      alertStyle: "success",
      alertMessage: ""
    }
  }

  componentWillMount() {
    this.props.getProfile(this.state.user, this.state.perso);
  }

  updateProfile() {
    let id = findDOMNode(this.refs.profileId).value;
    let nomPerso = findDOMNode(this.refs.profileNom).value;
    let newData = {
      nom: findDOMNode(this.refs.profileNom).value,
      race: findDOMNode(this.refs.profileRace).value,
      carriereA: findDOMNode(this.refs.profileCarriereA).value,
      Acarriere: findDOMNode(this.refs.profileAcarriere).value,
      user: this.state.user,
      perso: findDOMNode(this.refs.profileNom).value
    };

    if (findDOMNode(this.refs.profileNom).value !== "" && findDOMNode(this.refs.profileRace).value !== "" && findDOMNode(this.refs.profileCarriereA).value !== "" && findDOMNode(this.refs.profileAcarriere).value !== "") {
      this.props.updateProfile(id, newData);
      this.props.getProfile(this.state.user, nomPerso);

      this.setState({
        showAlert: true,
        alertStyle: "success",
        alertMessage: "Your Profile has been successfully updated"
      })

      setTimeout(() => {
        this.setState({
          showAlert: false
        })
      }, 2500);
    } else {
      this.setState({
        showAlert: true,
        alertStyle: "danger",
        alertMessage: "Oups something went wrong ! Maybe try again ;-)"
      })

      setTimeout(() => {
        this.setState({
          showAlert: false
        })
      }, 2500);
    }
  }

  render() {
    return (
      <Col>
        {this.props.profile.map((perso, i) =>
          <Panel key={i} header={perso.nom}>
            <Form>
              <FormGroup className="hide" controlId="profileId">
                <InputGroup>
                  <InputGroup.Addon>Id :</InputGroup.Addon>
                  <FormControl
                    type='text'
                    name="profileId"
                    defaultValue={perso._id}
                    ref='profileId'
                    />
                  <FormControl.Feedback/>
                </InputGroup>
              </FormGroup>
              <FormGroup className="hide" controlId="profileNom">
                <InputGroup>
                  <InputGroup.Addon>Nom :</InputGroup.Addon>
                  <FormControl
                    type='text'
                    name="profileNom"
                    defaultValue={perso.nom}
                    ref='profileNom'
                    />
                  <FormControl.Feedback/>
                </InputGroup>
              </FormGroup>
              <FormGroup controlId="profileRace">
                <InputGroup>
                  <InputGroup.Addon>Race :</InputGroup.Addon>
                  <FormControl
                    type='text'
                    name="profileRace"
                    defaultValue={perso.race}
                    ref='profileRace'
                    />
                  <FormControl.Feedback/>
                </InputGroup>
              </FormGroup>
              <FormGroup controlId="profileCarriereA">
                <InputGroup>
                  <InputGroup.Addon>Carrière acrtuelle :</InputGroup.Addon>
                  <FormControl
                    type='text'
                    name="profileCarriereA"
                    defaultValue={perso.carriereA}
                    ref='profileCarriereA'
                    />
                  <FormControl.Feedback/>
                </InputGroup>
              </FormGroup>
              <FormGroup controlId="profileAcarriere">
                <InputGroup>
                  <InputGroup.Addon>Ancienne carrière :</InputGroup.Addon>
                  <FormControl
                    type='text'
                    name="profileAcarriere"
                    defaultValue={perso.Acarriere}
                    ref='profileAcarriere'
                    />
                  <FormControl.Feedback/>
                </InputGroup>
              </FormGroup>
              <Button onClick={this.updateProfile.bind(this)}>Modifier</Button>
              <Alert className={this.state.showAlert === true ? "show" : "hide"} bsStyle={this.state.alertStyle}>
                {this.state.alertMessage}
              </Alert>
            </Form>
          </Panel>
        )}
      </Col>
    )
  }
}

function mapStateToProps(state){
  return {
    profile: state.profile.profile
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    updateProfile, getProfile
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfilRecap);