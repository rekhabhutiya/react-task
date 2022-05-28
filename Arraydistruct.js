import React from 'react'
function Arraydistruct ()
{
    let user =['abc',25,'Surat']
    let [name,age=20,city] = user
    
    // nested array

    let person = ['pqr',22,'surat',['female',25000]]
    let[pname,page,pcity,[pgen,psalary]] =person
    return (
        <>
            <h1>User Info</h1>
            <h2>{name}</h2>
            <h2>{age}</h2>
            <h2>{city}</h2>
            <h1>Person Info</h1>
            <h2>{pname}</h2>
            <h2>{page}</h2>
            <h2>{pcity}</h2>
            <h2>{pgen}</h2>
            <h2>{psalary}</h2>
        </>
    )
}
export default Arraydistruct