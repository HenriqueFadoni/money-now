import React from 'react';

const FindRate = props => (
    <>
        {
            props.show ?
            <button type="submit">Find Currency</button> :
            <button disabled>Find Currency</button>
        }
    </>
);

export default FindRate;