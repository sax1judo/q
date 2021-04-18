
const initialState = {
  user:'',
  cards:['visa','master','paypal'],
}

// Reducer
const reducer = (state = initialState, action) => {

    switch (action.type) {
		case 'SET_CARDS':
			return {
				...state,
                cards: action.data
			};
		case 'UPDATE_CARDS':

			localStorage.setItem('cards',JSON.stringify(action.data))

			return {
				...state,
				cards: action.data
			};
		
		default:
			return state;
	}
};

export default reducer;