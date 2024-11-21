import axios from "axios";
const key='AIzaSyBuAVR-0IcuBjDrlmpktdxp8L3mzoZLuWg';
const GetPlaylist=async (playlistId,PageToken='',result=[])=>{
    const Url=(`https://www.googleapis.com/youtube/v3/playlistItems?key=${key}&part=id,contentDetails,snippet&nextPageToken=${PageToken}&maxResults=50&playlistId=${playlistId}`)
    const {data}=await axios.get(Url)
    console.log(data.items);
    
    result=[...result,...data.items]
    if(data.nextPageToken){
         GetPlaylist(playlistId,data.nextPageToken,result)
    }   
    return result
}
export default GetPlaylist