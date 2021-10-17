import React, { useState, useEffect } from 'react'
import M from 'materialize-css';
import {Card, Icon, CardTitle, Button} from 'react-materialize'
import '../App.css'


const WorkPiece = ({img, title, bg_color, text_color, tags}) => {


    // initialize materialize sidenav on attach
    useEffect(() => {
        document.addEventListener('DOMContentLoaded', function() {
            var options = {};
            var elems = document.querySelectorAll('.sidenav');
            var instances = M.Sidenav.init(elems, options);
          });
    }, [])

    var tagHtml = tags.split(',').map((tag, index) => {
        return <Button key={`${index}`} className='card-tag'>{tag}</Button>
    });

    return (
        <Card 
            actions={[
                <a key="1" href="https://github.com/Fonyx/budgie" target="_blank">Repo</a>,
                <a key="2" href="https://fonyx-budgie.herokuapp.com/" target="_blank">Deployed</a>
            ]}
            className={`${bg_color} darken-1`}
            closeIcon={<Icon>close</Icon>}
            revealIcon={<Icon>more_vert</Icon>}
            textClassName={`${text_color}`}
            title={title}
            header={<CardTitle image={img} />}
            horizontal
            >
            <div className='card-details'>
                <p className="card-blurb">A budgeting app built </p>
                <div className='tags'>
                    {tagHtml}
                </div>
            </div>
        </Card>
    )
    
}

export default WorkPiece