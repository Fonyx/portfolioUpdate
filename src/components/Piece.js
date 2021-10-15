//eslint-disable-next-line
import Materialize from 'materialize-css/dist/css/materialize.min.css';
import '../App.css';
import '../index.css';
//eslint-disable-next-line
import "materialize-css/dist/js/materialize.min.js";
import React from 'react';
import {Row, Col, Card, Icon, CardTitle} from 'react-materialize'


const Piece = ({showGifUrl, title, repoUrl, deploymentUrl}) => {
    return(
        <Row>
            <Col
                m={6}
                s={12}
            >
                <Card
                actions={[
                    <a key="1" href={`${repoUrl}`} target="_blank">Repo</a>,
                    <a key="2" href={`${deploymentUrl}`} target="_blank">Deployment</a>
                ]}
                closeIcon={<Icon>close</Icon>}
                header={<CardTitle image={`${showGifUrl}`} />}
                horizontal
                revealIcon={<Icon>more_vert</Icon>}
                >
                {title}
                </Card>
            </Col>
        </Row>
    )
}


export default Piece