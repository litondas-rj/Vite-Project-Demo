import { useEffect, useState } from "react";
import GetPlaylist from "../api/api";
import storage from "../utils/localStorage";
const INIT_DATA={
    playlists: {},
    recentPlaylists: [],
    favorites: [],
  }
const STORAGE_KEY='clen_youtube_Playlist_state'
const usePlaylists = () => {
  const [state, setState] = useState(INIT_DATA);
  const [isLoding, setLoding] = useState(false);

  useEffect(()=>{
    const state=storage.getData(STORAGE_KEY)
    if(state){
        setState({...state})
    }
    
  },[])
  useEffect(()=>{
    if(state!==INIT_DATA){

        storage.saveData(STORAGE_KEY,state)
    }
  },[state])

  const getPlaylistById = async (playlistId, forch = false) => {
    if (state.playlists[playlistId] && !forch) {
      return;
    }
    try {
      setLoding(true)
      const playlist = await GetPlaylist(playlistId);
      setState((prev) => ({
        ...prev,
        playlists: {
          ...prev.playlists,
          [playlistId]: playlist,
        },
      }));
    } catch (error) {
        throw new Error("Somthing went worng");
        
    } finally {
        setLoding(false)
    }
  };

  const addRecentPlaylists = (playlistId) => {
    setState((prev) => ({
      ...prev,
      recentPlaylists: [...playlistId],
    }));
  };
  const addFavorites = (playlistId) => {
    setState((prev) => ({
      ...prev,
      favorites: [...playlistId],
    }));
  };

  const getPlaylistByIds = (ids = []) => {
    ids.map((id) => state.playlists[id]);
  };
  return {
    playlists: state.playlists,
    recentPlaylists: getPlaylistByIds(state.recentPlaylists),
    favorites: getPlaylistByIds(state.favorites),
    getPlaylistById,
    addRecentPlaylists,
    addFavorites,
  };
};
export default usePlaylists;
