import { createTheme} from "@mui/material/styles";
import {lighten } from 'polished'
export const Colors = {
    primary: "#d90429",
    secondary: "#ef233c",
    success: "#4CAF50",
    info: "#00a2ff",
    danger: "#FF5722",
    warning: "#FFC107",
    dark: "#0e1b20",
    light: "#aaa",
    muted: "#abafb3",
    border: "#DDDFE1",
    inverse: "#2F3D4A",
    shaft: "#333",
    ///////////////
    // Grays
    ///////////////
    dim_grey: "#696969",
    dove_gray: "#d5d5d5",
    body_bg: "#f3f6f9",
    light_gray: "#fed9b7",
    ///////////////
    // Solid Color
    ///////////////
    white: "#fff",
    black: "#000",
  };
  const theme = createTheme({
    palette:{
        primary:{
            main :Colors.primary
        },
        secondary:{
            main :Colors.secondary
        }
    },
    components:{
        MuiButton:{
            defaultProps:{
                disableRipple:true,
                disableElevation: true
            }
        },
        MuiDrawer : {
            styleOverrides:{
                paper:{
                    width: 250,
                    background:Colors.primary,
                    color:Colors.secondary,
                    borderRadius:'0px 100px 0px 0px',
                    borderRight:`1px solid ${Colors.primary}`
                }
            }
        },
        MyShopButton: {
            styleOverrides: {
                root: {
                    color: Colors.white,
                },
                primary: {
                    background: Colors.primary,
                    "&:hover": {
                        background: lighten(0.05, Colors.primary),
                },
                },
                secondary: {
                    background: `${Colors.secondary}`,
                    "&:hover": {
                        background: lighten(0.05, Colors.primary),
                    },
                },
            },
        },
        MuiTooltip: {
            defaultProps:{
                arrow: true,
            },
        }
    }
  })
export default theme