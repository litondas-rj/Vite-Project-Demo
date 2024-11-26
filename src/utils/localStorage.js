class SaveYoutubeData{
    saveData(key,data){
        localStorage.setItem(key,JSON.stringify(data))
    }
    getData(key){
       const json= localStorage.getItem(key)
       return JSON.parse(json)
    }
}
const storage=new SaveYoutubeData()
export default storage