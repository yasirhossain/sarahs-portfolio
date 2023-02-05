import { useEffect, useState } from 'react'
import axios from 'axios'
import { DateTime } from 'luxon'
import CircularProgress from '@mui/material/CircularProgress'
import Alert from '@mui/material/Alert'
import styles from '@/styles/Videos.module.css'
import VideoCard from '@/components/VideoCard'
import { staticVideos, imageSize } from '@/video-portfolio'

const Videos = (props) => {
    const [videoCards, setVideoCards] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);
    const [videos, setVideos] = useState(staticVideos);

    useEffect(() => {
        getStaticVideos();
    }, []);

    function youtubeParser(url){
        var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
        var match = url.match(regExp);
        return (match&&match[7].length==11)? match[7] : false;
    }

    function getStaticVideos() {
        let newVideoCards = [];
        videos.map((videoItem, i) => {
            const videoId = youtubeParser(videoItem.video);
            const image = videoItem.image + imageSize;
            const channel = videoItem.channel;
            const company = videoItem.company;
            const type = videoItem.type;
            const show = videoItem.show;
            const title = videoItem.title;

            newVideoCards.push({
            videoId,
            image,
            channel,
            company,
            type,
            show,
            title
            });
        });

        setVideoCards(newVideoCards);
        setIsLoading(false);
    }

    function getYoutubeVideos() {
        const channelId = 'UCnxK7GR9aJCyM7RwwtDH95Q';
        const playlistId = 'PLTJ3DQXWYBuKxQdNHqhepUsIqeYtEL_CA';
        const YOUTUBE_API_KEY = 'AIzaSyDpdzBkltzfutKSsnWNbvcVQqnRutGcrQY';

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
    }

    async function createVideoCards(videoItems) {
        let newVideoCards = [];
        videoItems.map((videoItem, i) => {
            const videoId = videoItem.id;
            const snippet = videoItem.snippet;    
            const image = snippet.thumbnails.medium === undefined ? '' : snippet.thumbnails.medium.url;
            const title = snippet.title;
            const timestamp = DateTime.fromISO(snippet.publishedAt).toRelative();
            const channel = snippet.channelTitle;

            newVideoCards.push({
            videoId,
            title,
            channel,
            timestamp,
            image,
            type
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
                        <VideoCard key={item.title}
                            title={item.title}
                            company={item.company}
                            image={item.image}
                            channel={item.channel}
                            type={item.type}
                            show={item.show}
                            videoId={item.videoId}
                            setVideoRef={props.setVideoRef}
                            setDialogOpen={props.setDialogOpen} 
                        />
                    )
                })
                }
            </div>
        </div>
    )
  }
  
  export default Videos;