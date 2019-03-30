import React from 'react';

import videoMP4 from './New-jumbo.mp4';
import videoWEBM from './New-jumbo.mp4';
import videoOGV from './New-jumbo.mp4';

const BackgroundVideo = () => (
    <div className="bg-video">
        <video className="bg-video__content" autoPlay muted loop>
            <source src={videoMP4} type="video/mp4" />
            <source src={videoOGV} type="video/ogv" />
            <source src={videoWEBM} type="video/webm" />
            Your browser is not supported!
          </video>
    </div>
);

export default BackgroundVideo;