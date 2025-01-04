import React, { useEffect } from 'react'
import { use } from 'react'

export default function BlogPage() {
  const[blogs,setBlogs]=React.useState([])
  useEffect(()=>{
    async function fetchBlogs(){
      const response=await fetch('https://jsonplaceholder.typicode.com/posts')
      const data=await response.json()
      setBlogs(data)
     
    }fetchBlogs();
  },[])
  return (
    <div>
     {/* cateegory section  */}
     <div>Page Category</div>

      {/* blog section */}
      <div></div>
      
      {/* pagination section */}
      <div></div>
    </div>
  )
}
