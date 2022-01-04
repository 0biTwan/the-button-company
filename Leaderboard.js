import React from 'react';
import './Leaderboard.css';
import MoneyButton from './MoneyButton'

function Leaderboard({nbreCoins, setNbreCoins}) {
    return (
        <div className='leaderboard-container'>
            <h1>1 clic = 1 coin</h1>
            <label>
                Vous avez généré: 
                <input readOnly="readOnly" value={nbreCoins} />
            </label>
            
            <MoneyButton nbreCoins = {nbreCoins} setNbreCoins={setNbreCoins}/>
        </div>
    );
}
export default Leaderboard;