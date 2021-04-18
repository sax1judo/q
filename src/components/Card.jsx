import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import '../style/Card.scss'
import { formatCreditCardNumber,formatDate }  from '../scripts/utils';

const Card = props => {

    useEffect(() => {
       
    }, []);

    return (
       <div className='card' key={props.idx}>
         <div className='cardType' >
             <div className='cardTypeIcon' style={{ backgroundImage: `url(${require(`../assets/`+ props.card.type + `.png`)})` }}></div>
         </div>
        
         <div className='cardChip'></div>
         
         <div className='cardNumber'>{formatCreditCardNumber(props.card.cardNumber)}</div>
        
         <div className='cardUserDate'>
            <div>{props.card.userName}</div>
            <div>{formatDate(props.card.expDate)}</div>
         </div>

       </div>
    )
}

const mapStateToProps = state => {
    return {
        cards: state.reducer.modalTerminalMessage,
        
    };
};

export default connect(mapStateToProps)(Card);