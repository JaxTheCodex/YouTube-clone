import React, { useEffect, useState } from 'react'
import './Playvideo.css'
import video1 from '../../assets/video.mp4'
import like from '../../assets/like.png'
import dislike from '../../assets/dislike.png'
import share from '../../assets/share.png'
import save from '../../assets/save.png'
import jack from '../../assets/jack.jpg'
import user_profile from '../../assets/user_profile.jpg'
import { API_KEY, value_converter } from '../../data'
import moment from 'moment'
import { useParams } from 'react-router-dom'

const Playvideo = () => {

    const {videoId}=useParams();

    const [apiData,setApiData]=useState(null);
    const [channelData,setChannelData]=useState(null);
    const [commentData,setCommentData]=useState([]);
    

    const fetchVideoData= async () =>{
        //Fetching data
        const videoDetails_url= `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_KEY}`
        await fetch(videoDetails_url).then(res => res.json()).then(data=> setApiData(data.items[0]))
    }

        // //Fetch Other data like subscribers,channel Logo
        const fetchOtherData= async () =>{
            const channelData_url=`https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${apiData}&key=${API_KEY}`
            await fetch(channelData_url).then(res=>res.json()).then(data=>setChannelData(data.items[0]))
    
            //Fetching comment data
            const comment_url=`https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&videoId=${videoId}&key=${API_KEY}`
            await fetch(comment_url).then(res=>res.json()).then(data=>setCommentData(data.items))
        } 

    useEffect(()=>{
        fetchVideoData();
    },[videoId])
    
    useEffect(()=>{
        fetchOtherData();
    },[apiData])

       
  return (
    <div className='play-video'>
     {/* <video src={video1} controls autoPlay muted></video> */}
      <iframe  src={`https://www.youtube.com/embed/${videoId}?autoplay=1`} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      <h3>{apiData?apiData.snippet.title:"Title Here"}</h3>
      <div className='play-video-info'>
        <p>{apiData?value_converter(apiData.statistics.viewCount):"16k"} Views &bull;{apiData?moment(apiData.snippet.publishedAt).fromNow():"1 day ago"}</p>
        <div>
            <span><img src={like} alt=""/>{apiData?value_converter(apiData.statistics.likeCount):"5k"} </span>
            <span><img src={dislike} alt=""/> </span>
            <span><img src={share} alt=""/>Share </span>
            <span><img src={save} alt=""/>Save</span>
        </div>
      </div>
      <hr/>
      <div className='publisher'>
        <img src={user_profile} alt=''/>
        <div>
            <p>{apiData?apiData.snippet.channelTitle:"Channel Title"}</p>
            <span>{channelData?value_converter(channelData.statistics.subscriberCount):"1M"} Subscribers</span>
        </div>
        <button>Subscribe</button>
      </div>
      <div className='video-description'>
        <p>{apiData?apiData.snippet.description.slice(0,250):"Description Here"}</p>
        <hr/>
        <h4>{apiData?value_converter(apiData.statistics.commentCount):"4k"} comments</h4>
        <div className='comment'>
            <img src={user_profile} alt=''></img>
            <div>
                <h3>Joshep@ewrer1234<span>1 day ago</span></h3>
                <p>This is an amazing channel</p>
                <div className='comment-action'>
                    <img src={like} alt=''/>
                    <span>144</span>&nbsp;&nbsp;
                    <img src={dislike} alt='' />
                </div>
            </div>
        </div>
        <div className='comment'>
            <img src={user_profile} alt=''></img>
            <div>
                <h3>Karansingh@3455<span>5 days ago</span></h3>
                <p>This is an amazing channel</p>
                <div className='comment-action'>
                    <img src={like} alt=''/>
                    <span>354</span>&nbsp;&nbsp;
                    <img src={dislike} alt='' />
                </div>
            </div>
        </div>
        <div className='comment'>
            <img src={user_profile} alt=''></img>
            <div>
                <h3>PeterParker@32344<span>4 days ago</span></h3>
                <p>Way to go my dear ,this the finest video i hv ever seen on youtube so far.</p>
                <div className='comment-action'>
                    <img src={like} alt=''/>
                    <span>44</span>&nbsp;&nbsp;
                    <img src={dislike} alt='' />
                </div>
            </div>
        </div>
        <div className='comment'>
            <img src={user_profile} alt=''></img>
            <div>
                <h3>Joshep@ewrer1234<span>1 day ago</span></h3>
                <p>One day you will be the best youtuber of your time.</p>
                <div className='comment-action'>
                    <img src={like} alt=''/>
                    <span>234</span>&nbsp;&nbsp;
                    <img src={dislike} alt='' />
                </div>
            </div>
        </div>
        <div className='comment'>
            <img src={user_profile} alt=''></img>
            <div>
                <h3>HazelCameron@233<span>1 day ago</span></h3>
                <p>As aspected from this channel</p>
                <div className='comment-action'>
                    <img src={like} alt=''/>
                    <span>34</span>&nbsp;&nbsp;
                    <img src={dislike} alt='' />
                </div>
            </div>
        </div>
        <div className='comment'>
            <img src={user_profile} alt=''></img>
            <div>
                <h3>@User4387<span>2 days ago</span></h3>
                <p>Nice Video</p>
                <div className='comment-action'>
                    <img src={like} alt=''/>
                    <span>45</span>&nbsp;&nbsp;
                    <img src={dislike} alt='' />
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Playvideo
