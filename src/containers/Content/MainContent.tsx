import React, { FunctionComponent } from 'react';
import Bassoon from '../../components/bassoon/Bassoon';
import Verbose from '../../components/verbose/Verbose';
import garfieldbassoon from '../../images/garfieldbassoon.jpg';

interface MainContentProps { };

const MainContent: FunctionComponent<MainContentProps> = () => {

    return (
        <div>
            <h3 className="mb">Welcome!</h3>
            <div className="row">
                <div className="col mt-5">
                    <Verbose />
                    <Bassoon />
                </div>
                <div className="col text-center">
                    <img src={garfieldbassoon} className="img-fluid" alt="garfieldbassoon" />
                </div>
            </div>
        </div>
    );
}

export default MainContent;
