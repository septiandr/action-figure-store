import { Stack } from "@mui/material"
import { Product, ProductActionButton, ProductActionsWrapper, ProductAddToCart, ProductFavButton, ProductImage } from "../../styles/products"
import ProductMeta from "../productMeta"
import FavoriteIcon from "@mui/icons-material/Favorite"
import ShareIcon from "@mui/icons-material/Share"
import { FitScreen } from "@mui/icons-material"

export default function SingleProduct({ product, matches }){
    return(
        <>
        <Product>
            <ProductImage src={require(`../../images/products/${product.image}`)}/>
            <ProductMeta product={product} matches={matches}/>
            <ProductActionsWrapper>
                <Stack direction="row">
                    <ProductFavButton isFav={0}>
                        <FavoriteIcon/>
                    </ProductFavButton>
                    <ProductActionButton>
                        <ShareIcon/>
                    </ProductActionButton>
                    <ProductActionButton>
                        <FitScreen/>
                    </ProductActionButton>
                </Stack>
            </ProductActionsWrapper>
        </Product>
        <ProductAddToCart variant ="contained">Add to Cart</ProductAddToCart>
        </>
    )
}