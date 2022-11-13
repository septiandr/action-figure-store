import React from 'react'
import { 
    MyList, 
    ActionIconContainerDesktop, 
    ActionIconContainerMobile 
} from "../../styles/appBarContainer"
import ShoppingCardIcon from '@mui/icons-material/ShoppingCart'
import PersonIcon from "@mui/icons-material/Person"
import FavoriteIcon from "@mui/icons-material/Favorite"
import {Divider, ListItemButton, ListItemIcon} from '@mui/material'
import { Colors } from '../../styles/theme'

function Actions({matches}) {
    const Components = matches
    ? ActionIconContainerMobile
    : ActionIconContainerDesktop

    return (
        <Components>
            <MyList type = "row">
            <Divider orientation='vertical' flexItem/>
            <ListItemButton
                sx ={{
                    justifyContent:'center'
                }}
            >
                <ListItemIcon
                sx={{
                    display:'flex',
                    justifyContent:'center',
                    color: matches && Colors.secondary
                }}
                >
                    <ShoppingCardIcon/>
                </ListItemIcon>
            </ListItemButton>
            <Divider orientation='vertical' flexItem/>
            <ListItemButton
                sx ={{
                    justifyContent:'center'
                }}
            >
                <ListItemIcon
                    sx={{
                        display:'flex',
                        justifyContent:'center',
                        color: matches && Colors.secondary
                    }}
                >
                    <FavoriteIcon/>
                </ListItemIcon>
            </ListItemButton>
            <Divider orientation='vertical' flexItem/>
            <ListItemButton
                sx ={{
                    justifyContent:'center'
                }}
            >
                <ListItemIcon
                    sx={{
                        display:'flex',
                        justifyContent:'center',
                        color: matches && Colors.secondary
                    }}
                >
                    <PersonIcon/>
                </ListItemIcon>
            </ListItemButton>
            <Divider orientation='vertical' flexItem/>
        </MyList>
    </Components>
  )
}

export default Actions