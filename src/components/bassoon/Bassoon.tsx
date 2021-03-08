import React, { FunctionComponent } from 'react';
import { DefinitionType } from '../../types';
import Definitions from '../definitions/Definitions';

interface BassoonProps { };

const Bassoon: FunctionComponent<BassoonProps> = () => {
    const definitions: DefinitionType[] = [
        {
            id: 1,
            term: "bassoon",
            definition: "a double-reed woodwind instrument having a long U-shaped conical tube connected to the mouthpiece by a thin metal tube and a usual range two octaves lower than that of the oboe",
        },
    ];


    return (
        <>
            <Definitions title="Bassoon" definitions={definitions} />
        </>
    );
}

export default Bassoon;
