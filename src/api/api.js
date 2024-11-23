import axios from "axios";
/**
 * Get youtube playlist data from youtube data api
 */
const key=import.meta.env.VITE_YOUTUBE_API;
const GetPlaylist=async(playlistId,PageToken='',result=[])=>{
    const Url=`https://www.googleapis.com/youtube/v3/playlistItems?key=${key}&part=id,contentDetails,snippet,status&nextPageToken=${PageToken}&maxResults=50&playlistId=${playlistId}`
    const {data}=await axios.get(Url)
    result=[...result,...data.items]
    if(data.nextPageToken){
        GetPlaylist(playlistId,data.nextPageToken.result)
    }
    return result
}
export default GetPlaylist