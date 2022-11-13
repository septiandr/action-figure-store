import { Slide } from '@mui/material';
import { Box } from '@mui/system'
import { useEffect, useState } from 'react';
import { MessageText, PromotionsContainer } from '../../styles/promotions';

const messages = [
    "20% off on your first order!",
    "Summer sale starts now, visit any store",
    "Grab it Now !!",
];

export default function Promotions(){
    const [messageIndex, setMessageIndex] = useState(0)
    const [show, setShow] = useState(true);

    useEffect(()=>{
        setTimeout(() => {
            setShow(false)
        }, 3000)

        const intervalId = setInterval(()=> {
            setMessageIndex(i => ( i + 1 ) % messages.length)

            setShow(true)

            setTimeout(() => {
                setShow(false)
            }, 3000)
        }, 4000)

        return () =>{
            clearInterval(intervalId);
        }
    },[])

    return(
        <PromotionsContainer>
            <Slide direction={show ? "left" : "right"} in={show}
                timeout ={{
                    enter: 500,
                    exit: 100
                }}
            >
                <Box display={'flex'} justifyContent="center" alignItems={"center"}>
                    <MessageText>
                        {messages[messageIndex]}
                    </MessageText>
                </Box>
            </Slide>
        </PromotionsContainer>
    )
}