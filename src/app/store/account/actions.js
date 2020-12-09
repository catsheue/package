import * as actionTypes from "./actionTypes";

export const clearAccountImage = () => ({
  type: actionTypes.CLEAR_ACCOUNT_IMAGE,
});

export const fetchAccountImageFails = () => ({
  type: actionTypes.GET_ACCOUNT_IMAGE_FAILS,
});

export const saveAddress = (address) => ({
  type: actionTypes.GET_ACCOUNT_IMAGE,
  address,
});

export const startFetchAccountImage = () => ({
  type: actionTypes.START_FETCH_ACCOUNT_IMAGE,
});

export const getAccountImage = (url) => async (dispatch) => {
  startFetchAccountImage();
  try {
    const res = await fetch(url, {
      method: "GET",
    });
    const address = await res.json();
    saveAddress(address);
  } catch (err) {
    fetchAccountImageFails();
  }
};
