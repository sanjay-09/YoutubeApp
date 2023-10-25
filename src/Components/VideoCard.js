const VideoCard=({info})=>{
    const {snippet,statistics}=info;
    
    const {channelTitle,localized,thumbnails}=snippet;
    return(
        <div className=" w-80 p-2 m-2 shadow-lg">
            <img className=" rounded-md" src={thumbnails.high.url} alt="" />
            <ul>
                <li className="font-bold">{localized.title}</li>
                <li className="text-base">{channelTitle}</li>
                <li className="text-base">{statistics.viewCount} views</li>
            </ul>

        </div>
    )
}
export default VideoCard;