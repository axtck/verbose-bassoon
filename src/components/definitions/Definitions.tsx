import React, { FunctionComponent, MouseEvent } from 'react';
import { useHistory } from 'react-router';
import { DefinitionType } from '../../types';

interface DefinitionProps {
    title: string;
    definitions: DefinitionType[];
};

const Definitions: FunctionComponent<DefinitionProps> = ({ title, definitions }) => {
    const history = useHistory();

    const handleClick = (e: MouseEvent<HTMLLIElement>, did: number, dterm: string) => {
        history.push(`/definition/${dterm}/${did}`);
    }

    const mappedDefinitions = definitions.map((d, i) => {
        return <li key={i} className="list-group-item" onClick={(e) => handleClick(e, d.id, d.term)}>
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
