import axios from "../axios";
import { FETCH_LABELS, ADD_LABEL } from "../contants/actionTypes";

export const fetchLabelsData = payload => ({ type: FETCH_LABELS, payload });

export const fetchLabels = () => async dispatch => {
  try {
    let { data } = await axios.get("/labels");
    dispatch(fetchLabelsData(data));
  } catch (err) {
    console.error(err.message);
  }
};

export const postLabel = title => async dispatch => {
  try {
    let { data } = await axios.post("/labels", { title });

    dispatch({
      type: ADD_LABEL,
      payload: data
    });
  } catch (err) {
    console.error(err.message);
  }
};
