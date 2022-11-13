import React from 'react'
import { useTheme } from '@mui/material/styles'
import { useMediaQuery } from '@mui/material'
import AppBarDesktop from '../appBarDesktop'
import AppBarMobile from '../appBarMobile'

function AppBar() {
    const theme = useTheme()
    const matches = useMediaQuery(theme.breakpoints.down('lg')) // for switch for desktop to mobile
  return (
    <div>
        {matches ? (
          <AppBarMobile matches = { matches }/>
        ) : (
          <AppBarDesktop matches = { matches }/>
        )}
    </div>
  )
}

export default AppBar