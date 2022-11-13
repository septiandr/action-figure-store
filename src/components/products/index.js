import React from 'react'
import { useTheme } from "@mui/material/styles"
import { Container, Grid, useMediaQuery } from "@mui/material"
import  products from "../../data/product.json"
import SingleProduct from '../singleProduct'
import SingleProductDesktop from "../singleProductDestop"

function Product() {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('md'))
    
    const renderProduct = products.products.map(products =>(
        <Grid item 
            key={products.id} 
            display = "flex" 
            flexDirection={ "column" }
            alignItems = {"center"}
        >
        {matches 
            ? (<SingleProduct product={products} matches ={matches}/>) 
            : (<SingleProductDesktop product={products} matches ={matches}/>)
        }
        </Grid>
    ))
    return (
        <Container maxWidth="100vh">
            <Grid
                container
                justifyContent={"center"}
                sx = {{ margin: "20px 4px 10px 4px" }}
            >
                {renderProduct}
            </Grid>
        </Container>
    )
}

export default Product