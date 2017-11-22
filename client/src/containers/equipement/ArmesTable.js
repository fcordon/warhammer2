import React, { Component } from 'react';
import { Table, Panel, Button, FormControl, FormGroup } from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { findDOMNode } from 'react-dom';

import { getArme, postArme } from "../../actions/ArmeAction";
import { Armes } from '../../components/equipement/Armes';
import ArmesUpdate from '../../components/update/ArmesUpdate';
import { updateMessage } from "../../hocs/updateMessage";

class ArmesTable extends Component {

    componentWillMount() {
        this.props.getArme();
    }

    constructor(props) {
        super(props);

        this.state = {
            update: false
        }
    }

    showUpdate() {
        this.setState({
            update: !this.state.update
        })
    }

    handleSubmit() {
        const arme = [{
            nom: findDOMNode(this.refs.nomArme).value,
            encombrement: findDOMNode(this.refs.encArme).value,
            degats: findDOMNode(this.refs.degatsArme).value,
            portee: findDOMNode(this.refs.porteeArme).value,
            rechargement: findDOMNode(this.refs.rechargementArme).value,
            attributs: findDOMNode(this.refs.attributsArme).value
        }];
        this.props.postArme(arme);
        this.resetForm();
    }

    resetForm() {
        findDOMNode(this.refs.nomArme).value = "";
        findDOMNode(this.refs.encArme).value = "";
        findDOMNode(this.refs.degatsArme).value = "";
        findDOMNode(this.refs.porteeArme).value = "";
        findDOMNode(this.refs.rechargementArme).value = "";
        findDOMNode(this.refs.attributsArme).value = "";
    }

    render() {
        return (
            <Panel header="Armes" className="noPadding">
                <Button className="showUpdateButton" onClick={this.showUpdate.bind(this)}>Update</Button>
                <Table condensed bordered hover striped fill>
                    <thead>
                        <tr>
                            <th>Nom</th>
                            <th>Enc</th>
                            <th><span className="show-desktop">Dégâts</span><span className="show-mobile">Dég</span></th>
                            <th>Portée</th>
                            <th><span className="show-desktop">Rechargement</span><span className="show-mobile">Recharg</span></th>
                            <th>Attributs</th>
                            {this.state.update && <th>Actions</th>}
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.props.arme.map((armes, i) => this.state.update ?
                                <ArmesUpdate key={armes._id} {...armes} getArme={this.props.getArme} /> :
                                <Armes key={i} {...armes} />)
                        }
                        {this.state.update &&
                        <tr>
                            <td>
                                <FormGroup controlId="nomArme">
                                    <FormControl
                                        type='text'
                                        placeholder='Nom'
                                        ref='nomArme' />
                                </FormGroup>
                            </td>
                            <td>
                                <FormGroup controlId="encArme">
                                    <FormControl
                                        type='number'
                                        placeholder='Encombrement'
                                        ref='encArme' />
                                </FormGroup>
                            </td>
                            <td>
                                <FormGroup controlId="degatsArme">
                                    <FormControl
                                        type='number'
                                        placeholder='Dégâts'
                                        ref='degatsArme' />
                                </FormGroup>
                            </td>
                            <td>
                                <FormGroup controlId="porteeArme">
                                    <FormControl
                                        type='text'
                                        placeholder='Potée'
                                        ref='porteeArme' />
                                </FormGroup>
                            </td>
                            <td>
                                <FormGroup controlId="rechargementArme">
                                    <FormControl
                                        type='number'
                                        placeholder='Rechargement'
                                        ref='rechargementArme' />
                                </FormGroup>
                            </td>
                            <td>
                                <FormGroup controlId="attributsArme">
                                    <FormControl
                                        type='text'
                                        placeholder='Attributs'
                                        ref='attributsArme' />
                                </FormGroup>
                            </td>
                            <td><Button bsStyle='primary' onClick={this.handleSubmit.bind(this)}>Add</Button></td>
                        </tr>
                        }
                    </tbody>
                </Table>
            </Panel>
        )
    }
}

function mapStateToProps(state) {
    return {
        arme: state.arme.arme,
        modified: state.arme.payload,
        msg: state.arme.msg,
        style: state.arme.style
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        getArme,
        postArme
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(updateMessage(ArmesTable));
