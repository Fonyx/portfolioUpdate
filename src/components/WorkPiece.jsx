import React from 'react'
import {Card, Icon, CardTitle, Row, Col} from 'react-materialize'
import '../App.css'
import Title from 'react-vanilla-tilt'

const WorkPiece = ({props}) => {

    // return (
    //     <Row>
    //         <Card 
    //             actions={[
    //                 <a key="1" href={props.repo} target="_blank" rel="noopener noreferrer">Repo</a>,
    //                 <a key="2" href={props.deploy} target="_blank" rel="noopener noreferrer">Deployed</a>
    //             ]}
    //             className={`${props.bg_color} darken-1`}
    //             closeIcon={<Icon>close</Icon>}
    //             revealIcon={<Icon>more_vert</Icon>}
    //             textClassName={`${props.text_color}`}
    //             title={props.title}
    //             header={<CardTitle image={props.img} />}
    //             horizontal
    //             >
    //             <div className='card-details'>
    //                 <p className="card-blurb">A budgeting app built </p>
    //             </div>
    //         </Card>
    //     </Row>
    // )
    console.log(props)
    let styleObj = {
        backgroundImage: `url(${props.img})`,
        
    }
    return (
        <Title>
            <div className="my_card data-tilt">
                <div className="my_card-image" style={styleObj}></div>
                <div className="my_card-text">
                    <h2>Post</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim accusantium quibusdam</p>
                    <span className="date">4 days ago</span>
                </div>
                <div className="my_card-stats">
                    <div className="stat borderY">
                        <div className='value'>4<sup>m</sup></div>
                        <div className='type'>read</div>
                    </div>
                    <div className="stat borderX borderY">
                        <div className='value'>5123</div>
                        <div className='type'>views</div>
                    </div>
                    <div className="stat borderY">
                        <div className='value'>32</div>
                        <div className='type'>comments</div>
                    </div>
                </div>
            </div>
        </Title>
    )
    
}

export default WorkPiece