import React, { FunctionComponent } from 'react';
import { useHistory, useParams } from 'react-router';

interface DefinitionDetailsProps { };

interface IParams {
    term: string;
    definitionId: string;
}

const DefinitionDetails: FunctionComponent<DefinitionDetailsProps> = () => {
    const history = useHistory();
    const params = useParams<IParams>();

    const handleBack = () => {
        history.goBack();
    }

    return (
        <div>
            <h3 className="mb-5">Details for {params.term} {params.definitionId}</h3>
            <p>Fetch api for /{params.term}/{params.definitionId}.........</p>
            <button className="btn btn-primary" onClick={handleBack}>BACK</button>
        </div>
    )
}

export default DefinitionDetails;
