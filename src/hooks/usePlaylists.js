// import { useState } from "react"
// import GetPlaylist from "../api/api"

import { useState } from "react"
import GetPlaylist from "../api/api"

const usePlaylists=()=>{
const [state,setState]=useState({
    playlists:{},
    recentPlaylists:[],
    favorites:[]

})
    const getPlaylistById=async (playlistId,forch=false)=>{
        if(state.playlists[playlistId] && !forch){
            return
        }
        let result=await GetPlaylist(playlistId)
        let cId,Ct
        result.map(item=>{
            const {channelId,title,description,medium,channelTitle}=item.snippet
            if(!cId){
                cId=channelId
            }
            if(!Ct){
                Ct=channelTitle
            }
            return {
                title,
                description,
                thumbnaile:medium,
                contentDetails:item.contentDetails
            }
        })
        setState(prev=>({
            ...prev,
            playlists:{
                ...prev.playlists,
                [playlistId]:{
                    items:result,
                    playlistId:playlistId,
                    channelId:cId,
                    channelTitle:Ct
                }
            }
        }))
    }
    const addRecentPlaylists=(playlistId)=>{
        setState(prev=>({
            ...prev,
            recentPlaylists:[...playlistId]
        }))
    }
    const addFavorites=(playlistId)=>{
        setState(prev=>({
            ...prev,
            favorites:[...playlistId]
        }))
    }

    const getPlaylistByIds=(ids=[])=>{
        ids.map(id=>state.playlists[id])
    }
    return {
        playlists:state.playlists,
        recentPlaylists:getPlaylistByIds(state.recentPlaylists),
        favorites:getPlaylistByIds(state.favorites),
        getPlaylistById,
        addRecentPlaylists,
        addFavorites
    }
}
export default usePlaylists

/**
 * state:{
 *  playlists:{}
 *  recentPlaylists:[],
 *  favorites:[]
 * }
 * Functionality:[
 * set State Playlists,
 * ]
 */

// const usePlaylists=()=>{
// const [state,setState]=useState({
//     playlists:{},
//     recentPlaylists:[],
//     favorites:[]
// })

// //get all playlists Data from api
// const getPlaylistById=async(playlistId)=>{
//     const result=await GetPlaylist(playlistId)
//     let cid,ct
//     result.map(item=>{
//         let {channelId,title,description,medium,channelTitle}=item.snippet
//         if(!cid){
//             channelId=cid
//         }
//         if (!ct) {
//             channelTitle=ct
//         }
//         return {
//             title,
//             description,
//             thumbnaile:medium,
//             contentDetails:item.contentDetails
//         }
//     })
//     setState(prev=>({
//         ...prev,
//         playlists:{
//             ...prev.playlists,
//             [playlistId]:{
//                 items:result,
//                 playlistId,
//                 channelId:cid,
//                 channelTitle:ct
//             }
//         }
//     }))
// }

// /**
//  * Add Recent Playlists data
//  */
// const addRecentPlaylists=(playlistId)=>{
//     setState(prev=>({
//         ...prev,
//         recentPlaylists:[...playlistId]
//     }))
// }
// /**
//  * Add Favorites Playlists
//  * @param {*} playlistId 
//  */
// const addFavorites=(playlistId)=>{
//     setState(prev=>({
//         ...prev,
//         favorites:[...playlistId]
//     }))
// }
// const getPlaylistByIds=(ids=[])=>{
//     ids.map(id=>state.playlists[id])
// }
// return {
//     playlists:state.playlists,
//     addRecentPlaylists:getPlaylistByIds(state.recentPlaylists),
//     addFavorites:getPlaylistByIds(state.favorites),
//     getPlaylistById,
//     addRecentPlaylists,
//     addFavorites
// }
// }
// export default usePlaylists