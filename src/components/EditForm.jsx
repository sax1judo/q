import React, { useEffect,useState } from 'react';
import { connect } from 'react-redux';
import Card from './Card';
import  '../style/EditForm.scss';
import DatePicker from "react-datepicker";
//I had a problem with datepicker css, and I fond this solution on stackoverflow
//I used datepicker before but never had this problem
require('react-datepicker/dist/react-datepicker.css')

const EditForm = props => {

const[validationErrors,setValidationErrors]=useState({
    cardNumber:false,
    expDate:false
});
const[selectedCard,setSelectedCard]=useState(null);
const [startDate, setStartDate] = useState(null);

    useEffect(() => {
       let filteredCards = props.cards.filter(card => {
        return card.id == parseFloat(props.match.params.id);
        });
    setSelectedCard(filteredCards[0])
    setStartDate(new Date(filteredCards[0].expDate))
    }, []);



    const handleCreditCardNumberChange=(value)=> {
        if(value.length>16)return;
        let parsedValue = parseFloat(value[0])
        if(parsedValue==4 || parsedValue==5 || parsedValue==6){
            setValidationErrors({...validationErrors, cardNumber:false})
        }else {
            setValidationErrors({...validationErrors, cardNumber:true})
        }
        setSelectedCard({...selectedCard,cardNumber:value})
    }

    const handleCreditCardNameChange=(value)=> {
        setSelectedCard({...selectedCard,userName:value})
    }
    const submitCard=()=>{

        let allCards = props.cards
        for(let card of allCards){
            if(card.id == selectedCard.id){
                Object.keys(selectedCard).forEach(key=>card[key]=selectedCard[key]);
            }
        }
        props.upadateCards(allCards)
    }
    return (
       <div className='editForm'>
       {selectedCard===null? 'Loading':
         <div >
            <Card card={selectedCard} key={selectedCard.id}/>
            <div>Name</div>
            <input value={selectedCard.userName} onChange={(e)=>handleCreditCardNameChange(e.target.value)}/>
            <div>Card number</div>
            <input type='number' maxLength="16" value={selectedCard.cardNumber} onChange={(e)=>handleCreditCardNumberChange(e.target.value)}/>
            {validationErrors.cardNumber?<div className='validationError'>Card number must start with  4,5 of 6</div>:null}
            <div>Exp Date</div>
            {/* <input type='month' value={selectedCard.expDate} /> */}
            <DatePicker
                selected={startDate}
                onChange={date => {setStartDate(date),setSelectedCard({...selectedCard,expDate:date}) }}
                dateFormat="MM/yy"
                minDate={new Date()}
                showMonthYearPicker
                showFullMonthYearPicker
                showFourColumnMonthYearPicker
                />
            <div className={validationErrors.cardNumber || validationErrors.expDate? 'saveButton disabled':'saveButton active'} onClick={()=>submitCard()}>Save</div>
        </div>
       }

       </div>
    )
}

const mapStateToProps = state => {
    return {
         cards: state.reducer.cards,   
    };
};
const mapDispatchToProps = dispatch => {
	return {
		upadateCards: (data) => dispatch({ type: 'UPDATE_CARDS', data:data}),
	};
};
export default connect(mapStateToProps,mapDispatchToProps)(EditForm);