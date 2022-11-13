import { ProductMetaWrapper } from "../../styles/products";
import { Typography } from "@mui/material";

export default function ProductMeta ({ product, matches}){
    const convertRupiah = require('rupiah-format')
    return(
        <ProductMetaWrapper>
            <Typography  
                variant = {
                    matches 
                    ? "h6" 
                    : "h5"
                    } 
                lineWeight= {2}>
                {product.name}
            </Typography>
            <Typography variant ={matches ? "caption":"body1"}>
                {convertRupiah.convert(product.price)}
            </Typography>
        </ProductMetaWrapper>
    )
}