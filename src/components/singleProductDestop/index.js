import { Stack } from "@mui/material"
import { useState } from "react"
import { 
    Product,
    ProductActionButton,
    ProductActionsWrapper,
    ProductAddToCart,
    ProductFavButton,
    ProductImage } from "../../styles/products"
import ProductMeta from "../productMeta"
import FavoriteIcon from "@mui/icons-material/Favorite"
import ShareIcon from "@mui/icons-material/Share"
import { FitScreen } from "@mui/icons-material"

export default function SingleProductDesktop({ product, matches }){
    const [showOptions, setShowOptions] = useState(false)

    const handleMouseEnter = () => {
        setShowOptions(true);
    }

    const handleMouseLeave = () => {
        setShowOptions(false)
    }
    return(
        <>
        <Product onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <ProductImage src={require(`../../images/products/${product.image}`)}/>
            <ProductFavButton isfav={0}>
                <FavoriteIcon/>
            </ProductFavButton>
            {showOptions && 
                <ProductAddToCart show ={showOptions} variant = "outlined">
                    Add to Cart
                </ProductAddToCart>}
            <ProductMeta product={product} matches={matches}/>
            <ProductActionsWrapper show ={showOptions}>
                <Stack direction="column">
                    <ProductActionButton>
                        <ShareIcon/>
                    </ProductActionButton>
                    <ProductActionButton>
                        <FitScreen/>
                    </ProductActionButton>
                </Stack>
            </ProductActionsWrapper>
        </Product>
        </>
    )
}