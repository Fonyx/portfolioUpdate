import React from 'react'
import {Card, Icon, CardTitle, Row} from 'react-materialize'
import '../App.css'


const WorkPiece = ({props}) => {

    return (
        <Row>
            <Card 
                actions={[
                    <a key="1" href={props.repo} target="_blank" rel="noopener noreferrer">Repo</a>,
                    <a key="2" href={props.deploy} target="_blank" rel="noopener noreferrer">Deployed</a>
                ]}
                className={`${props.bg_color} darken-1`}
                closeIcon={<Icon>close</Icon>}
                revealIcon={<Icon>more_vert</Icon>}
                textClassName={`${props.text_color}`}
                title={props.title}
                header={<CardTitle image={props.img} />}
                horizontal
                >
                <div className='card-details'>
                    <p className="card-blurb">A budgeting app built </p>
                </div>
            </Card>
        </Row>
    )
    
}

export default WorkPiece