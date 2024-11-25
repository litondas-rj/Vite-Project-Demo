import { useState } from "react";
import GetPlaylist from "../api/api";

const usePlaylists = () => {
  const [state, setState] = useState({
    playlists: {},
    recentPlaylists: [],
    favorites: [],
  });
  const [isLoding, setLoding] = useState(false);
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
