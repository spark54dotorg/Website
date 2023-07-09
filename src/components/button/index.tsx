import React from 'react'
import { Button } from '@mui/material'

export const PrimaryButton = ({ children }: any ) => {
  return (
    <>
      <Button 
        size='large' 
        variant='contained'
        sx={{
          background: '#D76A03',
          boxShadow: 'none',
          height: '56px',
          borderRadius: '8px',
          paddingInline: '20px',
          ':hover': {
            bgcolor: "#aa5200",
          }

        }}
      > 
        {children} 
      </Button>
    </>
  )
}

export const SecondaryButton = ({ children }:any) => {
  return (
    <>
      <Button
       className='flex gap-4'
         size='large' 
         sx={{
           boxShadow: 'none',
           height: '56px',
           borderRadius: '8px',
           paddingInline: '20px',
           color: 'grey',
           ':hover': {
             bgcolor: "#d7690310",
             color: '#262626',
           }
 
         }}
      > {children} </Button>
    </>
  );
}