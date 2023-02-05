import React from 'react'
import Avatar from '@mui/material/Avatar'
import styles from '@/styles/VideoCard.module.css'

const VideoCard = ({ image, title, channel, views, timestamp }) => {
    return (
        <div className={styles.videocard}>
          <img className={styles.videocard__image} src={image} alt='' />
          <div className={styles.videocard__info}>
            <div className={styles.videocard__text}>
              <h4>{title}</h4>
              <p>{channel}</p>
              <p>{timestamp}</p>
            </div> 
          </div>
        </div>
    )
}

export default VideoCard;