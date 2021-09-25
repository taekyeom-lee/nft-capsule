export const ACCOUNT_SET_ADDRESS = 'ACCOUNT_SET_ADDRESS';

export const setAddress = (address) => {
  return {
    type: ACCOUNT_SET_ADDRESS,
    address,
  };
};
