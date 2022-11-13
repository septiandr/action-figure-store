import { Typography } from '@mui/material'
import{ Box, styled } from '@mui/system'
import { Colors } from '../theme'

export const PromotionsContainer = styled(Box)(({ theme }) => ({
    [theme.breakpoints.up('xl')]: {
        padding: '40px 0px 40px 0px'
    },
    [theme.breakpoints.down('md')]: {
        textAlign:'center',
        height:"100px"
    },
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: Colors.secondary
}))

export const MessageText = styled(Typography)(({theme}) => ({
    fontFamily: '"Montez", "cursive"',
    [theme.breakpoints.up('md')] :{
        fontSize: '3rem',
    },
    color: Colors.white,
    fontSize: '1.5rem'
}))