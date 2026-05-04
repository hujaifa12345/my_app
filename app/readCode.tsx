"use client"

import { useQuery } from "@tanstack/react-query"


export default function Users(){

  const {data,isLoading,error} = useQuery({
    queryKey:["users"],
    queryFn:async()=>{
      const res = await fetch("/")
      return res.json()
    }
  })

  if(isLoading) return <p>Loading...</p>

  if(error) return <p>Error</p>


  return(
    <main>
      <div>
        {data.map((user:any)=>(<div key={user.id}></div>))}
      </div>
    </main>
  )
}
