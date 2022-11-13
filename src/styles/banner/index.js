import { styled,} from "@mui/material/styles";
import { Box, Typography, Button } from "@mui/material";
import { Colors } from '../theme'

export const BannerContainer = styled(Box)(({matches, theme})=>({
    display:'flex',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
    padding: '0px 0px',
    background: Colors.light_gray,
    [theme.breakpoints.down('sm')]:{
        flexDirection: 'column',
        alignItems: 'center'
    }
}))

export const BannerContent = styled(Box)(()=>({
    display:'flex',
    flexDirection:'column',
    justifyContent: 'center',
    maxWidth: 420,
    padding:'30px'
}))

export const BannerTitle = styled(Typography)(({matches, theme})=>({
    lineWeight:1.5,
    fontSize:'72px',
    marginBottom:'20px',
    [theme.breakpoints.down('sm')]:{
        fontSize:"42px"
    }
}))

export const BannerDescription = styled(Typography)(({ theme })=>({
    lineWeight: 1.25,
    letterSpacing: 1.25,
    marginBottom: "3em",
    [theme.breakpoints.down("md")]:{
        lineWeight:1.15,
        letterSpacing: 1.15,
        marginBottom:"1.5em"
    }
}))

export const BannerImage = styled('img')(({src, theme})=>({
    src:`url(${src})`,
    width: '150px',
    height:'400px',
    margin:'50px 100px 50px 100px',
    [theme.breakpoints.down('md')]:{
        width: '150px',
        height:'400px'
    },
    [theme.breakpoints.down("sm")]:{
        width: '150px',
        height:'400px',
    }
}))


export const BannerShopButton = styled(Button, {
    // Configure which props should be forwarded on DOM
    shouldForwardProp: (prop) => prop !== "color",
    name: "MyShopButton",
    slot: "Root",
    // We are specifying here how the styleOverrides are being applied based on props
    overridesResolver: (props, styles) => [
      styles.root,
      props.color === "primary" && styles.primary,
      props.color === "secondary" && styles.secondary,
    ],
  })(({ theme }) => ({
    padding: "20px 0px",
    color: Colors.white,
    fontWeight: "bold",
    fontSize: "16px",
    [theme.breakpoints.down("sm")]: {
      padding: "10px 0px",
      fontSize: "14px",
    },
  }));

