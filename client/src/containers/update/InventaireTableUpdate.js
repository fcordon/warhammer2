import React, { Component } from 'react';
import { Col, Panel, Table, FormControl, FormGroup, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { findDOMNode } from 'react-dom';

import { postInventaire, getInventaire } from "../../actions/InventaireAction";
import InventaireUpdate from '../../components/update/InventaireUpdate';

class InventaireTableUpdate extends Component {
    componentDidMount() {
        this.props.getInventaire();
    }

    handleSubmit() {
        const inventaire = {
            nom: findDOMNode(this.refs.nomPostInventaire).value,
            quantite: findDOMNode(this.refs.quantitePostInventaire).value,
            encombrement: findDOMNode(this.refs.encPostInventaire).value
        };
        this.props.postInventaire(inventaire);
        this.props.getInventaire();
    }

    render() {
        return (
            <Col xs={12} md={6}>
                <Panel collapsible header="Inventaire">
                    <Table condensed bordered hover striped fill>
                        <thead>
                            <tr>
                                <th>Nom</th>
                                <th>Quantité</th>
                                <th>Encombrement</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            { this.props.inventaire.map((inventaire) => <InventaireUpdate key={inventaire._id} {...inventaire} getInventaire={this.props.getInventaire} />) }
                            <tr>
                                <td>
                                    <FormGroup controlId="nomPostInventaire">
                                        <FormControl
                                            type='text'
                                            placeholder='Nom'
                                            ref='nomPostInventaire' />
                                    </FormGroup>
                                </td>
                                <td>
                                    <FormGroup controlId="quantitePostInventaire">
                                        <FormControl
                                            type='number'
                                            placeholder='Quantité'
                                            ref='quantitePostInventaire' />
                                    </FormGroup>
                                </td>
                                <td>
                                    <FormGroup controlId="encPostInventaire">
                                        <FormControl
                                            type='number'
                                            placeholder='Encombrement'
                                            ref='encPostInventaire' />
                                    </FormGroup>
                                </td>
                                <td><Button bsStyle='primary' onClick={this.handleSubmit.bind(this)}>Add</Button></td>
                            </tr>
                        </tbody>
                    </Table>
                </Panel>
            </Col>
        )
    }
}

function mapStateToProps(state) {
    return {
        inventaire: state.inventaire.inventaire
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        getInventaire:getInventaire,
        postInventaire:postInventaire
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(InventaireTableUpdate);
