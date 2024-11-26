import axios from "axios";
/**
 * Get youtube playlist data from youtube data api
 */
const key = import.meta.env.VITE_YOUTUBE_API;
const GetPlaylistItem = async (playlistId, PageToken = "", result = []) => {
  const Url = `https://www.googleapis.com/youtube/v3/playlistItems?key=${key}&part=id,contentDetails,snippet,status&nextPageToken=${PageToken}&maxResults=50&playlistId=${playlistId}`;
  const { data } = await axios.get(Url);

  result = [...result, ...data.items];

  if (data.nextPageToken) {
      result= GetPlaylistItem(playlistId, data.nextPageToken, result);
      console.log('iam arry',result)
}
return result;
};

const GetPlaylist = async (playlistId) => {
  const Url = `https://www.googleapis.com/youtube/v3/playlists?part=snippet&id=${playlistId}&maxResults=100&key=${key}`;
  const { data } = await axios.get(Url);
  let playlists = await GetPlaylistItem(playlistId);
    const {channelId,channelTitle,title:playlistTitle,description:playlistDescription,thumbnails}=data?.items[0]?.snippet
  playlists.map((item) => {
    const { title, description, medium } = item.snippet;

    return {
      title,
      description,
      thumbnaile: medium,
      contentDetails: item.contentDetails,
    };
  });
  return {
    channelId,
    channelTitle,
    playlistId,
    playlistTitle,
    playlistDescription,
    playlistThumbnail:thumbnails.default,
    playlists
  }
};
export default GetPlaylist;
