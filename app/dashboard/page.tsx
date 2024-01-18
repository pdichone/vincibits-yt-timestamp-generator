'use client'
import React from 'react'
import { Button, TextField } from '@radix-ui/themes'

const Dashboard = () => {
  return (
   <div className='max-w-xl space-y-3'>
    <TextField.Root>
    <TextField.Input placeholder="Enter a youtube video URL" /> 
    </TextField.Root>
    <Button>Generate Time Stamps</Button>
       
   </div> 
   
  )
}

export default Dashboard