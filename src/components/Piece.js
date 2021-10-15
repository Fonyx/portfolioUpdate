//eslint-disable-next-line
import Materialize from 'materialize-css/dist/css/materialize.min.css';
import '../App.css';
import '../index.css';
//eslint-disable-next-line
import "materialize-css/dist/js/materialize.min.js";
import React from 'react';
import {Card, Icon, CardTitle} from 'react-materialize'


const WorkCard = ({showGifUrl, title, repoUrl, deploymentUrl}) => {
    return(
        <Card
        actions={[
            <a key="1" href={`${repoUrl}`} target="_blank" rel="noopener noreferrer">Repo</a>,
            <a key="2" href={`${deploymentUrl}`} target="_blank" rel="noopener noreferrer">Deployment</a>
        ]}
        closeIcon={<Icon>close</Icon>}
        header={<CardTitle image={`${showGifUrl}`} />}
        horizontal
        revealIcon={<Icon>more_vert</Icon>}
        >
        {title}
        </Card>
    )
}


export default WorkCard