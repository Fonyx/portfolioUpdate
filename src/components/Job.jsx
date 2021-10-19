import React from 'react'

function Job(props) {

    return (
        <div className='job align-center'>
            <h2 className='job-company'>II-VI</h2>
            <p className='job-title'>Calibration Process</p>
            <p className='job-description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam odio tempore commodi? Iusto incidunt harum aliquid corrupti ad sequi labore mollitia sed eaque rem delectus doloremque porro fugit, omnis obcaecati?</p>
            <div className="links">
                <p className='link-item job-website'>website</p>
                <p className='link-item job-product'>product</p>
            </div>
        </div>
    )

}

export default Job
