import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
import { Competence } from "../../components/personnage/Competence";
import Wolfgang from '../../data/Wolfgang.json';

export class CompetenceAvanceM extends Component {
    render() {
        return (
            <Table condensed hover striped className="border">
                <thead>
                    <tr>
                        <th className="text-center">Compétences avancées</th>
                        <th className="text-center">Carac.</th>
                        <th className="text-center">Ac.</th>
                        <th className="text-center">+10</th>
                        <th className="text-center">+20</th>
                        <th className="text-center">Bon.</th>
                        <th className="text-center">Tot.</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        Wolfgang.competenceA.map((competenceA, i) =>
                            <Competence key={i} {...competenceA}/>
                        )
                    }
                </tbody>
            </Table>
        )
    }
}