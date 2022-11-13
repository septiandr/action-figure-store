import React from 'react'
import { Box, Button, Grid, List, ListItemText, Typography} from '@mui/material'
import { FooterTitle, SubscribeTf } from '../../styles/footer'
import { Colors } from '../../styles/theme'
import InstagramIcon from '@mui/icons-material/Instagram'
import FacebookIcon from '@mui/icons-material/Facebook'
import TwitterIcon from '@mui/icons-material/Twitter'
import { Stack } from '@mui/system'
import SendIcon from '@mui/icons-material/Send'

function Footer() {
    return (
        <Box
            sx={{ 
                background: Colors.shaft,
                color: Colors.white,
                mt: 20,
                p: {xs: 4, md: 10},
                pt: 12,
                pb: 12,
                fontSize: { xs: "12px", md: "14px"},
            }}
        >
            <Grid container spacing={2} justifyContent={'center'}>
                <Grid item md={6} lg={4}>
                    <FooterTitle variant='body1'>About Us</FooterTitle>
                    <Typography>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    </Typography>
                    <Box
                        sx = {{
                            mt: 4,
                            color: Colors.dove_gray
                        }}
                    >
                    <FacebookIcon sx={{ mr: 1}}/>
                    <TwitterIcon sx={{ mr: 1}}/>
                    <InstagramIcon/>
                    </Box>
                </Grid>
                <Grid item md={6} lg ={2}>
                    <FooterTitle variant='body1'>Information</FooterTitle>
                    <List>
                        <ListItemText>
                            <Typography lineHeight={2} variant="caption2">
                                About Us
                            </Typography>
                        </ListItemText>
                        <ListItemText>
                            <Typography lineHeight={2} variant="caption2">
                                Order Tracking
                            </Typography>
                        </ListItemText>
                        <ListItemText>
                            <Typography lineHeight={2} variant="caption2">
                                Privacy &amp; Policy
                            </Typography>
                        </ListItemText>
                        <ListItemText>
                            <Typography lineHeight={2} variant="caption2">
                                Terms &amp; Conditions
                            </Typography>
                        </ListItemText>
                    </List>
                </Grid>
                <Grid item md={6} lg={2}>
                    <FooterTitle variant='body1'>
                        my account
                    </FooterTitle>
                    <List>
                        <ListItemText>
                            <Typography lineHeight={2} variant="caption2">
                                Login
                            </Typography>
                        </ListItemText>
                        <ListItemText>
                            <Typography lineHeight={2} variant="caption2">
                                My Cart
                            </Typography>
                        </ListItemText>
                        <ListItemText>
                            <Typography lineHeight={2} variant="caption2">
                                My Account
                            </Typography>
                        </ListItemText>
                        <ListItemText>
                            <Typography lineHeight={2} variant="caption2">
                                Wishlist
                            </Typography>
                        </ListItemText>
                    </List>
                </Grid>
                <Grid item md ={6} lg={4}>
                    <FooterTitle variant='body1'>newsletter</FooterTitle>
                    <Stack>
                        <SubscribeTf 
                            color="primary"
                            label="Email address"
                            variant='standard'/>
                        <Button
                            startIcon={<SendIcon sx={{color:Colors.white}}/>}
                            sx={{ mt:4, mb:4 }}
                            variant="contained">
                                Subscribe
                        </Button>
                    </Stack>
                </Grid>
            </Grid>
        </Box>
    )
}

export default Footer