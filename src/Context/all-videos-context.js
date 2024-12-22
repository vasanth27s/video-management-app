import { useState, useContext, createContext, useEffect} from 'react'
import axios from 'axios'

const AllVideosContext = createContext()

let AllVideosProvider = ({children}) => 
{
    const [ allVideosList, setAllVideosList ] = useState([])
    const [ toggleTab, setToggleTab] = useState("all")
    const [ filteredVideosList, setFilteredVideosList ] = useState([])

    useEffect(() => {
        try {
          (async () => {
              const allVideosData = await axios.get('https://videoztron-server.vercel.app/api/home/allVideos')
              setAllVideosList([...allVideosData.data.allvideos])
          }) ()
        }
        catch(error) {
          console.log("Error : ", error)
        }
    },[])

    useEffect(()=>{
        if(toggleTab==="all")
        {
            setFilteredVideosList(allVideosList)
        }
        else
        {
            setFilteredVideosList(prevFilteredList=>
                allVideosList.filter(video=>video.category===toggleTab))
        }
    },[allVideosList, toggleTab])

    return (
        <AllVideosContext.Provider value={{
            allVideosList, 
            setAllVideosList,
            toggleTab,
            setToggleTab,
            filteredVideosList
        }}>
            {children}
        </AllVideosContext.Provider>
    )
}

let useAllVideos = () => useContext(AllVideosContext)

export { AllVideosProvider, useAllVideos }