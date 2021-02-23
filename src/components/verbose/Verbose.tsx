import React, { FunctionComponent } from 'react';
import { DefinitionType } from '../../types';
import Definitions from '../definitions/Definitions';

interface VerboseProps { };

const Verbose: FunctionComponent<VerboseProps> = () => {
    const definitions: DefinitionType[] = [
        {
            id: 1,
            definition: "containing more words than necessary",
        },
        {
            id: 2,
            definition: "impaired by wordiness",
        },
        {
            id: 3,
            definition: "given to wordiness",
        },
    ];


    return (
        <>
            <Definitions title="Verbose" definitions={definitions} />
        </>
    );
}

export default Verbose;
