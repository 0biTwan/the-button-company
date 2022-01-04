import Button from '@mui/material/Button';
import PaidOutlinedIcon from '@mui/icons-material/PaidOutlined';
import * as React from 'react';

function MoneyButton ({nbreCoins, setNbreCoins}) {
    function handleClick (e) {
        setNbreCoins(nbreCoins+1)
    }
    return (
        <Button 
            startIcon = {<PaidOutlinedIcon />}
            variant   = "contained"
            endIcon   = {<PaidOutlinedIcon />}
            onClick   = {handleClick}
        >
            Click me!
        </Button>
    );
}
export default MoneyButton;