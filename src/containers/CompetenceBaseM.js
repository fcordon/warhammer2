import React, { Component } from 'react';
import { Table } from 'react-bootstrap';

import { Competence } from "../components/Competence";
import Wolfgang from '../data/Wolfgang.json';

export class CompetenceBaseM extends Component {
    render() {
        return (
            <Table condensed hover className="border">
                <thead>
                    <tr>
                        <th className="text-center">Compétences de base</th>
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
                        Wolfgang.competenceB.map((competenceB, i) =>
                            <Competence key={i} {...competenceB}/>
                        )
                    }
                </tbody>
            </Table>
        )
    }
}