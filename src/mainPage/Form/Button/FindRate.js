import React from 'react';

const FindRate = props => (
    <>
        {
            props.show ?
            <button type="submit" className="btn form__button">
                <span className="form__button-visible">Find Currency</span>
                <span className="form__button-invisible">Find it Now</span>
            </button>
            :
            <button className="btn form__button" disabled>
                Select a Currency
            </button>
        }
    </>
);

export default FindRate;