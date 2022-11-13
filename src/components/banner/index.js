import React from 'react'
import { Typography, useMediaQuery } from '@mui/material'
import { useTheme } from "@mui/material/styles"
import { 
    BannerContainer, 
    BannerContent, 
    BannerDescription, 
    BannerImage, 
    BannerShopButton, 
    BannerTitle 
} from "../../styles/banner";
import banner from "../../images/banner.png"

const bannerDescription = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."

function Banner() {
    const theme = useTheme()
    const matches = useMediaQuery(theme.breakpoints.down("md"))
    return (
        <BannerContainer>
            <BannerImage src={banner}/>
            <BannerContent>
                <Typography variant = "h6">Huge Collection</Typography>
                <BannerTitle variant = "h2">New Figure</BannerTitle>
                <BannerDescription variant="subtitle">
                    {bannerDescription}
                </BannerDescription>
                <BannerShopButton color="primary">Shop Now</BannerShopButton>
            </BannerContent>
        </BannerContainer>
    )
}

export default Banner