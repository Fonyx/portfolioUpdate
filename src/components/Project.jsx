import React from 'react'
import {Card, CardTitle, Icon} from 'react-materialize'
import '../App.css'

const Project = ({props}) => {

    let actionsDeployMarkup = [
        <a className="card-github-icon" key="1" href={props.repo} target="_blank" rel="noopener noreferrer">
            <i className="fab fa-3x fa-github bump_up">
            </i>
        </a>,
        <a key="2" href={props.deploy} target="_blank" rel="noopener noreferrer">
            <Icon medium>language</Icon>
        </a>
    ];
    // if this project isn't deployed, pop the deployed action off the actions list
    if(!props.deploy){
        actionsDeployMarkup.pop();
    }

    return (
        <div className='col s12' data-tile>
            <Card
                actions={actionsDeployMarkup}
                className={`card transparentBG`}
                title={props.title}
                header={<CardTitle image={props.img} />}
                horizontal
                >
                <div className={`card-details`}>
                    <p className="card-text">{props.description}</p>
                </div>
                <div className={`card-tags`}>
                    <p className="card-text">{props.tags.split(',')}</p>
                </div>
            </Card>
        </div>
    )
    
}

export default Project