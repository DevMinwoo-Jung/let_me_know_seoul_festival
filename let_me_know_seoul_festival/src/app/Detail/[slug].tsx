import { useRouter } from 'next/router'
import React from 'react'

export default function DetailPage() {

  const router = useRouter();

  console.log(router);

  return (
    <div>[slug]</div>
  )
}
