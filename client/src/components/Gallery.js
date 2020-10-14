import React,{useState} from 'react'
//EMgFpxzZC2oncpdkUIXxyktYUAnz_MXbM5oW_eBjgWg 

const Gallery =()=>{

    
   const [data,setData]=useState("")
   const [gallery,setGallery]=useState([])
   

   const SearchImage=()=>
   { 
     
    

   
  
    const url=`https://api.unsplash.com/search/photos/?client_id=qCtLFtf5OZXL5zBw4uHFIUU-YE9NdqgtUbgpSWaqopw&query=${data}&orientation=squarish`
    fetch(url)
    .then(res=>res.json())
    .then(res2=>
      {
        console.log(res2)

        setGallery(res2.results)
       })

   } 
  
 

      
  return(
      <div className="maindiv">
        <div className="my-div">
          
          <span>Search</span>
           <input
           value={data}
           onChange={(e)=>{setData(e.target.value)}}
            type="text" />
           <button
           onClick={()=>SearchImage()}
           >Search</button> 

           
        </div>

        <div className="gallery">
              {
                gallery.map((item)=>{

                  return <img style={{width:"30%"}} src={item.urls.regular} />
                })
              }

        </div>
      </div>

  )
}
export default Gallery