import React from 'react'
function Ifelsedemo(props)
{
        const isLoggedIn = props.isLoggedIn;
        return (
          <>
        {
     
            isLoggedIn?<h1>LoggedIn</h1>:<h1>Please Login</h1>
            
        }
    </>
        )
      
}
export default Ifelsedemo