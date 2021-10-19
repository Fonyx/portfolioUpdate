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

    // let styleObj = {
    //     backgroundImage: `url(${props.img})`,
    // }

    // let tiltOptions = {
    //     speed: 200,
    //     scale: 1.2
    // }

    // return (
    //     <div className='col s12 m6'>
    //         <Title options={tiltOptions}>
    //             <div className="my_card center-align">
    //                 <div className="my_card-image" style={styleObj}></div>
    //                 <div className="my_card-text">
    //                     <h2>Budgie</h2>
    //                     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim accusantium quibusdam</p>
    //                     <span className="date">4 days ago</span>
    //                 </div>
    //                 <div className="my_card-stats">
    //                     <div className="stat borderY">
    //                         <div className='value'>4<sup>m</sup></div>
    //                         <div className='type'>read</div>
    //                     </div>
    //                     <div className="stat borderX borderY">
    //                         <div className='value'><Icon>github</Icon></div>
    //                     </div>
    //                     <div className="stat borderY">
    //                         <div className='value'>32</div>
    //                         <div className='type'>comments</div>
    //                     </div>
    //                 </div>
    //             </div>
    //         </Title>
    //     </div>
    // )
    
}

export default Project