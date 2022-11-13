import { ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import React from 'react'
import Actions from '../actions/actions'
import {
    AppBarContainer, 
    AppBarHeader, 
    MyList, 
} from '../../styles/appBarContainer'
import SearchIcon from "@mui/icons-material/Search"
import { useUIContext } from '../../store/context'

function AppBarDesktop({matches}) {

    const { setShowSearchBox } = useUIContext()

    return (
        <AppBarContainer>
            <AppBarHeader>My Action Figure</AppBarHeader>
            <MyList type="row">
                <ListItemText primary = "Home"/>
                <ListItemText primary = "Categories"/>
                <ListItemText primary = "Products"/>
                <ListItemText primary = "Contact Us"/>
                <ListItemButton>
                    <ListItemIcon>
                        <SearchIcon onClick = {()=>setShowSearchBox(true)}/>
                    </ListItemIcon>
                </ListItemButton>
                <Actions matches={ matches }/>
            </MyList>
        </AppBarContainer>
    )
}

export default AppBarDesktop