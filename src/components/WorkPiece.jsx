import React from 'react'
import {Card, CardTitle} from 'react-materialize'
import '../App.css'

const WorkPiece = ({props}) => {

    return (
        <div className='col s12 l6'>
            <Card
                actions={[
                    <a key="1" href={props.repo} target="_blank" rel="noopener noreferrer">Repo</a>,
                    <a key="2" href={props.deploy} target="_blank" rel="noopener noreferrer">Deployed</a>
                ]}
                className="card transparentBG"
                textClassName={`${props.text_color}`}
                title={props.title}
                header={<CardTitle image={props.img} />}
                horizontal
                >
                <div className='card-details'>
                    <p className="card-blurb">A budgeting app built</p>
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

export default WorkPiece