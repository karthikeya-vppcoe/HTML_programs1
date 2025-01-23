import { useEffect } from "react"
function App() { 
  useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/users").then(
      response=>response.json()
    ).then(json=>console.log(json))
   },[])
    return (
    <div>     
     
    </div>
  )
}
export default App