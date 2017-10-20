import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
import Wolfgang from "../../data/Wolfgang.json";
import {CaracBase} from "../../components/personnage/CaracBase";
import {CaracAvance} from "../../components/personnage/CaracAvance";
import {CaracActuel} from "../../components/personnage/CaracActuel";


export class CaracTable extends Component {
    render() {
        return (
            <Table condensed bordered hover striped>
                <thead>
                    <tr><th colSpan="17" className="text-center">Profil du Personnage</th></tr>
                </thead>
                <tbody>
                    <tr>
                        <td>&nbsp;</td>
                        <td colSpan="8">Profil Principal</td>
                        <td colSpan="8">Profil Secondaire</td>
                    </tr>
                    <tr className="text-center profilHeader">
                        <td>&nbsp;</td>
                        <td>CC</td>
                        <td>CT</td>
                        <td>F</td>
                        <td>E</td>
                        <td>Ag</td>
                        <td>Int</td>
                        <td>FM</td>
                        <td>Soc</td>
                        <td>A</td>
                        <td>B</td>
                        <td>BF</td>
                        <td>BE</td>
                        <td>M</td>
                        <td>Mag</td>
                        <td>PF</td>
                        <td>PD</td>
                    </tr>
                    { Wolfgang.base.map((caracBase, i) => <CaracBase key={i} {...caracBase}/>) }
                    { Wolfgang.base.map((caracAvance, i) => <CaracAvance key={i} {...caracAvance}/>) }
                    { Wolfgang.base.map((caracActuel, i) => <CaracActuel key={i} {...caracActuel}/>) }
                </tbody>
            </Table>
        )
    }
}
