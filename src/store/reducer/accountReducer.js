import * as accountAction from '../action/accountAction';

const initState = {
  address: '',
};

const accountReducer = (state = initState, action) => {
  switch (action.type) {
    case accountAction.ACCOUNT_SET_ADDRESS:
      return {
        ...state,
        address: action.address,
      };
    default:
      return state;
  }
};

export default accountReducer;
