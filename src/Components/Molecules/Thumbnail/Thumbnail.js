import React from 'react';
import ThumbnailStyle from './Thumbnail.module.scss';
import RssFeedIcon from '@material-ui/icons/RssFeed';
import EventIcon from '@material-ui/icons/Event';
import LaptopMacIcon from '@material-ui/icons/LaptopMac';
import VideocamIcon from '@material-ui/icons/Videocam';
import loginVector from '../../../assets/images/login-vector.jpg';
import thumbnail1 from '../../../assets/thumbnail/puzzle-img1.jpg';
import thumbnail2 from '../../../assets/thumbnail/puzzle-img2.jpg';
import thumbnail3 from '../../../assets/thumbnail/puzzle-img3.jpg';
import thumbnail4 from '../../../assets/thumbnail/puzzle-img4.jpg';
import thumbnail5 from '../../../assets/thumbnail/puzzle-img5.jpg';
import thumbnail6 from '../../../assets/thumbnail/puzzle-img6.jpg';
import thumbnail7 from '../../../assets/thumbnail/puzzle-img7.jpg';
import thumbnail8 from '../../../assets/thumbnail/puzzle-img8.jpg';

export const Thumbnail = (...props) => {

    return (
        <React.Fragment>
            <div className={ThumbnailStyle.loginVectorWrapper}>
                <div className={ThumbnailStyle.thumbnailWrapper}>
                    <div>
                        <a href="#">
                            <span className={ThumbnailStyle.green}><RssFeedIcon /> Live</span>
                            <img src={thumbnail1} alt="Thumbnail" title="Thumbnail" />
                        </a>
                        <a href="#">
                            <span className={ThumbnailStyle.orange}><EventIcon /> Event</span>
                            <img src={thumbnail2} alt="Thumbnail" title="Thumbnail" />
                        </a>
                        <a href="#">
                            <span className={ThumbnailStyle.blue}><VideocamIcon /> Recorded Show</span>
                            <img src={thumbnail3} alt="Thumbnail" title="Thumbnail" />
                        </a>
                    </div>
                    <div className={ThumbnailStyle.secondRow}>
                        <a href="#">
                            <span className={ThumbnailStyle.pink}><LaptopMacIcon /> Classes</span>
                            <img src={thumbnail4} alt="Thumbnail" title="Thumbnail" />
                        </a>
                        <a href="#">
                            <span className={ThumbnailStyle.orange}><EventIcon /> Event</span>
                            <img src={thumbnail5} alt="Thumbnail" title="Thumbnail" />
                        </a>
                        <a href="#">
                            <span className={ThumbnailStyle.blue}><VideocamIcon /> Recorded Show</span>
                            <img src={thumbnail6} alt="Thumbnail" title="Thumbnail" />
                        </a>
                    </div>
                    <div className={ThumbnailStyle.others}>
                        <a href="#">
                            <span className={ThumbnailStyle.pink}><LaptopMacIcon /> Classes</span>
                            <img src={thumbnail7} alt="Thumbnail" title="Thumbnail" />
                        </a>
                        <img src={thumbnail8} alt="Thumbnail" title="Thumbnail" />
                    </div>
                </div>
                <img src={loginVector} alt="" />
            </div>
        </React.Fragment>
    )
}

export default Thumbnail;
