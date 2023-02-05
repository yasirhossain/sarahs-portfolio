import React from 'react'
import Avatar from '@mui/material/Avatar'
import styles from '@/styles/VideoCard.module.css'

const VideoCard = ({ channel, company, image, show, title, type, video }) => {
    return (
        <div className={styles.videocard} key={title}>
          <img className={styles.videocard__image} src={image} alt='' />
          <div className={styles.videocard__info}>
            <div className={styles.videocard__text}>
              <h4>{title}</h4>
              <p>{channel}</p>
              <p>{type}</p>
            </div> 
          </div>
        </div>
    )
}

export default VideoCard;