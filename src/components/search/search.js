import React from 'react'
import { IconButton, Slide } from '@mui/material'
import { useUIContext } from "../../store/context"
import { SearchBoxContainer, SearchField } from '../../styles/search/search'
import SearchIcon from "@mui/icons-material/Search"
import CloseIcon from "@mui/icons-material/Close"


function Search() {
    const { showSearchBox, setShowSearchBox } = useUIContext()
    console.log(showSearchBox)
    return (
        <Slide direction='down' in={showSearchBox} timeout={500}>
            <SearchBoxContainer>
                <SearchField
                    variant="standard"
                    placeholder='Search ... '
                />
                <IconButton>
                    <SearchIcon
                        sx={{
                            fontSize: { xs: "2rem", md: '3rem' }
                        }}
                        color="secondary"
                    />
                </IconButton>
                <IconButton
                    onClick={() => setShowSearchBox(false)}
                    sx={{
                        position: 'absolute',
                        top: 10,
                        right: 10,
                    }}
                >
                    <CloseIcon
                        sx={{ fontSize: '4rem' }} color="secondary"
                    />
                </IconButton>
            </SearchBoxContainer>
        </Slide>
    )
}

export default Search