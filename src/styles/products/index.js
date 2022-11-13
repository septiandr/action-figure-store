import { styled, Box } from "@mui/system"
import { Colors } from "../theme"
import { IconButton, Button } from "@mui/material"
import { slideInBottom, slideInRight } from '../../animation'

export const Product = styled(Box)(({theme}) => ({
    display:'flex',
    margin:'50px 2px 80px 2px',
    justifyContent:'center',
    alignItems:'center',
    flexDirection:'column',
    [theme.breakpoints.up('md')]:{
        position : "relative"
    }
}))

export const ProductImage = styled('img')(({ src, theme}) => ({
    src:`url(${src})`,
    width: '300px',
    height:'300px',
    background: Colors.light_gray,
    padding: '10px',
    [theme.breakpoints.down('md')]: {
        width :'80%',
        padding: '24px',
    }
}))

export const ProductActionButton = styled(IconButton)(()=>({
    background: Colors.white,
    margin: 4,
}))

export const ProductFavButton = styled(ProductActionButton)(({isFav, theme })=>({
    color : isFav ? Colors.primary : Colors.light,
    [theme.breakpoints.up('md')] :{
        position : "absolute",
        right : 0,
        top: 0,
    }
}))

export const ProductAddToCart = styled(Button)(({show, theme})=>({
    background: Colors.secondary,
    width: '200px',
    fontSize: '15px',
    fontWeight:600,
    top:'-10%',
    color:Colors.white,
    opacity:0.9,
    [theme.breakpoints.up('md')]:{
        background: Colors.secondary,
        top:'80%',
        position:'absolute',
        fontWeight:'bold',
        color:Colors.white,
        width:'300px',
        height:'50px',
        padding: '10px 5px',
        animation : show && `${slideInBottom} 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both`,
        
     },

}))
export const ProductMetaWrapper = styled(Box)(({theme}) => ({
    width:'300px',
    textAlign:'center',
    [theme.breakpoints.up('md')]:{
        position:'absolute',
        marginTop:'10px',
        top:'100%',
        width:'300px',
        textAlign:'center',
    }
}))

export const ProductActionsWrapper = styled(Box)(({ show, theme})=> ({
    [theme.breakpoints.up("md")] : {
        display: show ? "visible" : "none",
        position: "absolute",
        right: 0,
        top:"50px",
        animation: 
            show && `${slideInRight} 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both`,
    }
}))