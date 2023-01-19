import {
  CLEAR_ERRORS,
  RESUME_DATA_FAIL,
  RESUME_DATA_REQUEST,
  RESUME_DATA_SUCCESS,
} from '../constants/headerConstant';

export const resumeReducer = (state = { resumeData: [] }, action) => {
  switch (action.type) {
    case RESUME_DATA_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case RESUME_DATA_SUCCESS:
      return {
        resumeData: action.payload,
        isLoading: false,
      };
    case RESUME_DATA_FAIL:
      return {
        ...state,
        error: action.payload,
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };

    default:
      return state;
  }
};
