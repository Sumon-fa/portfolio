import {
  CLEAR_ERRORS,
  RESUME_DATA_FAIL,
  RESUME_DATA_REQUEST,
  RESUME_DATA_SUCCESS,
} from '../constants/headerConstant';
const resumeData = {
  email: 'fakirsumon78@gmail.com',
  linkedin: 'https://www.linkedin.com/in/sumon-fakir-362765214/',
  github: 'https://github.com/Sumon-fa',
  city: 'Helsinki, Finland',
  phone: '+358442422379',
  website: 'www.portfolio.com',
};
export const getResumeData = () => (dispatch) => {
  try {
    dispatch({ type: RESUME_DATA_REQUEST });

    const data = [resumeData];

    dispatch({
      type: RESUME_DATA_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: RESUME_DATA_FAIL,
      payload: 'No data found',
    });
  }
};

export const clearErrors = () => (dispatch) => {
  dispatch({
    type: CLEAR_ERRORS,
  });
};
