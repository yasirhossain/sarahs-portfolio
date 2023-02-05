import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { DateTime } from 'luxon'
import CircularProgress from '@mui/material/CircularProgress'
import Alert from '@mui/material/Alert'
import styles from '@/styles/Videos.module.css'
import VideoCard from '@/components/VideoCard'

const Videos = () => {
    const [videoCards, setVideoCards] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);

    const channelId = 'UCnxK7GR9aJCyM7RwwtDH95Q';
    const playlistId = 'PLTJ3DQXWYBuKxQdNHqhepUsIqeYtEL_CA';
    const YOUTUBE_API_KEY = 'AIzaSyDpdzBkltzfutKSsnWNbvcVQqnRutGcrQY';

    useEffect(() => {
        // https://www.googleapis.com/youtube/v3/playlistItems?part=snippet%2CcontentDetails&maxResults=50&playlistId=PLTJ3DQXWYBuKxQdNHqhepUsIqeYtEL_CA&key=AIzaSyDpdzBkltzfutKSsnWNbvcVQqnRutGcrQY
        // https://www.googleapis.com/youtube/v3/channels?part=snippet&id=UCnxK7GR9aJCyM7RwwtDH95Q&key=AIzaSyDpdzBkltzfutKSsnWNbvcVQqnRutGcrQY
        // const channelAPI = `https://www.googleapis.com/youtube/v3/channels?part=snippet&id=${channelId}&key=${YOUTUBE_API_KEY}`

        axios
          .get(`https://www.googleapis.com/youtube/v3/playlistItems?part=snippet%2CcontentDetails&maxResults=50&playlistId=${playlistId}&key=${YOUTUBE_API_KEY}`)
          .then(response => {
            // console.log(response.data.items)
            //console.log(response.data.items[0].snippet.thumbnails.medium.url);
            createVideoCards(response.data.items);
          })
          .catch(error => {
            console.log(error);
            setIsError(true);
          })
      }, []);

      async function createVideoCards(videoItems) {
        let newVideoCards = [];
        videoItems.map((video, i) => {
          const videoId = video.id;
          const snippet = video.snippet;    
          const image = snippet.thumbnails.medium === undefined ? '' : snippet.thumbnails.medium.url;
          const title = snippet.title;
          const timestamp = DateTime.fromISO(snippet.publishedAt).toRelative();
          const channel = snippet.channelTitle;
  
          newVideoCards.push({
            videoId,
            title,
            channel,
            timestamp,
            image
          });
        });

        setVideoCards(newVideoCards);
        setIsLoading(false);
      }
  
      if(isError) {
        return <Alert severity="error" className={styles.loading}>No Results found!</Alert>
      }
      return (
          
          <div className={styles.videos}>
              { isLoading ? <CircularProgress className='loading' color='secondary' /> : null }
              <div className={styles.videos__videos}>
                  {
                    videoCards.map(item => {
                      return (
                          <VideoCard key={item.videoId}
                              title={item.title}
                              image={item.image}
                              timestamp={item.timestamp}
                              channel={item.channel}
                              channelImage={item.channelImage}
                          />
                      )
                    })
                  }
              </div>
          </div>
      )
  }
  
  export default Videos;