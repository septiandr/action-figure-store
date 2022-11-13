import React, { useEffect } from 'react'
import { ThemeProvider } from '@mui/material/styles'
import { Box, Container, Typography, Stack } from '@mui/material'
import theme from '../styles/theme'
import AppBar from '../components/appBar'
import Banner from '../components/banner'
import Promotions from '../components/promotions'
import Product from '../components/products'
import "./App.css"
import Footer from '../components/footer'
import AppDrawer from '../components/drawer/drawer'
import { UIProvider } from "../store/context"
import Search from '../components/search/search'

function App() {
    useEffect(() => {
        document.title = "React Material UI"
    }, [])
    return (
        <ThemeProvider theme={theme}>
          <Stack>
            <UIProvider>
              <AppBar />
              <Banner />
              <Promotions />
              <Box display="flex" justifyContent="center" sx={{ p: 4 }}>
                <Typography variant="h4">Our Products</Typography>
              </Box>
              <Product />
              <Footer />
              <AppDrawer />
              <Search/>
            </UIProvider>
          </Stack>
      </ThemeProvider>
    )
}

export default App