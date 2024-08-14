'use client'
import React from 'react'

export default function Example({DataType}:any) {

  console.log(DataType)

  const test = JSON.parse(DataType.value).culturalEventInfo.row;

  return (
    <div>
      {
        test && test.map((ele: any) => {
          
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