import { styled } from "@mui/material/styles";
import { Typography,List, IconButton } from "@mui/material";
import { Box } from "@mui/system";
import { Colors } from "../theme";

//Container
export const AppBarContainer = styled(Box)(()=>({
     display:'flex',
     marginTop: 4,
     justifyContent:'center',
     alignItems:'center',
     padding:'2px 8px',
     background:Colors.primary,
     color : Colors. body_bg
}));

//header
export const AppBarHeader = styled(Typography)(({theme})=>({
    padding:'4px',
    flexGrow:1,
    fontSize:'4em',
    fontFamily:'"Montez", "cursive"',
    color:Colors.warning,
    [theme.breakpoints.down('md')]:{
        fontSize: "30px"
    }
}))

export const MyList = styled(List)(({type}) =>({
    display: type === 'row' ? 'flex' : 'block',
    flexGrow: 3 ,
    justifyContent: 'center',
    alignItems: 'center'
}))

export const ActionIconContainerDesktop = styled(Box)(()=>({
    flexGrow:0
}))

export const ActionIconContainerMobile = styled(Box)(()=>({
    flexGrow:0,
    display:'flex',
    background: Colors.shaft,
    position:'fixed',
    bottom: 0,
    left: 0,
    width: '100%',
    alignItems: 'center',
    zIndex: 99,
    borderTop: `1px solid ${Colors.border}`
}))

export const DrawerCloseButton = styled(IconButton)(()=>({
    position: 'absolute',
    top: 10,
    left: '250px',
    zIndex: 1999
}))