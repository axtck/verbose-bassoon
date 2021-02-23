import React, { FunctionComponent } from 'react';
import { DefinitionType } from '../../types';

interface DefinitionProps {
    title: string;
    definitions: DefinitionType[];
};

const Definitions: FunctionComponent<DefinitionProps> = ({ title, definitions }) => {

    const mappedDefinitions = definitions.map((d, i) => {
        return <li key={i} className="list-group-item">
            <b>{d.id}:</b> {d.definition}
        </li>
    });

    return (
        <>
            <h5>{title} definitions</h5>
            <ul className="list-group mb-5 text-center">
                {mappedDefinitions}
            </ul>
        </>
    );
}

export default Definitions;
