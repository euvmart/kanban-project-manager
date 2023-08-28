import { useState, useEffect } from "react"

function useMediaQuery(query) {
  const [isQueryCertain, setIsQueryCertain] = useState((window.innerWidth >= query));
  

  useEffect(() => {
    const onResize = ({target}) => {
      if((target.innerWidth >= query )){
        setIsQueryCertain(true)
      }else if(target.innerWidth <query ){
        setIsQueryCertain(false)
      }
    }
      
    window.addEventListener('resize', onResize);
    
    return () => {
      window.removeEventListener('resize', onResize);
    }
  }, []);

  return isQueryCertain
}

export {useMediaQuery}