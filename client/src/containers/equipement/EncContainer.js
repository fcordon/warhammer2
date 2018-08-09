import React, { Component } from 'react';
import { Panel } from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { getCarac } from "../../actions/CaracAction";

class EncContainer extends Component {

  constructor(props) {
    super(props);
    let urlParams = window.location.search.substring(1).split('=');
    let recupUser = urlParams[1].split('&');
    let user = recupUser[0];
    let perso = urlParams[2];

    this.state = {
      user: user,
      perso: perso
    }
  }

  componentWillMount() {
    this.props.getCarac(this.state.user, this.state.perso);
  }

  encArme() {
    const arme = this.props.arme;
    let total = 0;

    for (let i = 0; i < arme.length; i++) {
      total += arme[i].encombrement;

      if (i === arme.length - 1) {
        return total;
      }
    }

    if (total === "unfedfined") {
      return 0;
    } else {
      return total;
    }
  }

  encArmure() {
    const armure = this.props.armure;
    let total = 0;

    for (let i = 0; i < armure.length; i++) {
      total += armure[i].encombrement;

      if (i === armure.length - 1) {
        return total;
      }
    }

    if (total === "unfedfined") {
      return 0;
    } else {
      return total;
    }
  }

  encInventaire() {
    const inventaire = this.props.inventaire;
    let total = 0;

    for (let i = 0; i < inventaire.length; i++) {
      total += inventaire[i].encombrement;

      if (i === inventaire.length - 1) {
        return total;
      }
    }

    if (total === "unfedfined") {
      return 0;
    } else {
      return total;
    }
  }

  render() {
    let total = this.encArme() + this.encArmure() + this.encInventaire();
    let max = this.props.carac.length > 0 && this.props.carac[2].f * 10;
    let encombrement = total + " sur " + max;
    return (
      <Panel className="enc">
        <Panel.Heading>
          <Panel.Title componentClass="h2">Encombrement</Panel.Title>
        </Panel.Heading>
        <Panel.Body className={total < max ? "default" : "danger"}>
          {encombrement}
        </Panel.Body>
      </Panel>
    )
  }
}

function mapStateToProps(state){
  return {
    carac: state.carac.carac,
    arme: state.arme.arme,
    armure: state.armure.armure,
    inventaire: state.inventaire.inventaire
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    getCarac
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(EncContainer);
