import { useState } from 'react'
import styles from '@/styles/VideoCard.module.scss'
import { VideoContext } from '@/context/VideoContext'

const VideoCard = (props) => {
    const handleVideoClick = (e, videoId) => {
      props.setVideoRef(videoId);
      props.setDialogOpen(true);
    }

    return (
        <div className={styles.videocard} key={props.videoId} onClick={(e) => handleVideoClick(e, props.videoId)}>
          <img className={styles.videocard__image} src={props.image} alt={props.image} />
          <div className={styles.videocard__info}>
            <div className={styles.videocard__text}>
              <h4>{props.title}</h4>
              <div className={styles.divider}></div>
              <p>{props.channel}</p>
            </div> 
          </div>
        </div>
    )
}

export default VideoCard;