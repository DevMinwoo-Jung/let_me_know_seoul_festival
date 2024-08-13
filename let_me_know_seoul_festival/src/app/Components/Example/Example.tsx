'use client'
import React, { useEffect, useState } from 'react'

export default function Example(props) {

  const [ex, setEx] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    if(props !== null){
      setEx([...props.props.value]);
      setLoading(false);
    }

  }, [])

  if (loading) {
    return <div>Loading...</div>;
  }


  return (
    <div>
      {
        ex && ex.map((ele) => {
          
          const { CODENAME, GUNAME, TITLE, DATE, PLACE, ORG_NAME } = ele;
          
          return (
            <>
              <p>{ORG_NAME}</p>
              <p>{CODENAME}</p>
              <p>{GUNAME}</p>
              <p>{TITLE}</p>
              <p>{DATE}</p>
              <p>{PLACE}</p>
            </>
          )
        })
      }
    </div>
  )
}
