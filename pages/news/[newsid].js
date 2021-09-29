

import {useRouter} from 'next/router'


function Details(){
     const router= useRouter()

     const ID = router.query.newsid
     console.log(ID)
    return <h1> Details</h1>
    
  }
  
  
  export default Details