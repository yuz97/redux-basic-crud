import {
  CREATE_USER,
  DELETE_USER,
  EDIT_USER,
  UPDATE_USER,
  GET_USER_DETAIL,
  GET_USERS_DATA,
} from "../actions/userAction";

const initialState = {
  title: "List Users",
  // data:[

  //     {
  //       "id": 1,
  //       "name": "Claude",
  //       "address": "Sukarara Utara",
  //       "phone": "(181) 7735727"
  //     },
  //     {
  //       "id": 2,
  //       "name": "Enrica",
  //       "address": "Puerto Eldorado",
  //       "phone": "(448) 8241080"
  //     },
  //     {
  //       "id": 3,
  //       "name": "Tabbie",
  //       "address": "Muesanaik",
  //       "phone": "(486) 9745151"
  //     },
  //     {
  //       "id": 4,
  //       "name": "Nils",
  //       "address": "Mirošov",
  //       "phone": "(549) 1751206"
  //     },
  //     {
  //       "id": 5,
  //       "name": "Corney",
  //       "address": "Moanemani",
  //       "phone": "(486) 6128380"
  //     }
  // ],
  getUsersList: [],
  getUserDetail: [],
  editUserList: [],
  createUser: [],
  errosUserList: false,
};

function users(state = initialState, action) {
  switch (action.type) {
    case GET_USERS_DATA:
      return {
        ...state,
        getUsersList: action.payload.data,
        errorUserList: action.payload.errorMessage,
      };

    case CREATE_USER:
      return {
        ...state,
        createUser: action.payload.data,
        errorUserList: action.payload.errorMessage,
      };

    case EDIT_USER:
      return {
        ...state,
        editUserList: action.payload.data,
        errorUserList: action.payload.errorMessage,
      };

    case UPDATE_USER:
      return {
        ...state,
        editUserList: state.editUserList.map((user) =>
          user.id === action.payload.data.id ? action.payload : user
        ),
      };

    case GET_USER_DETAIL:
      return {
        ...state,
        getUserDetail: action.payload.data,
        errorUserList: action.payload.errorMessage,
      };

    case DELETE_USER:
      return {
        ...state,
        getUsersList: state.getUsersList.filter(
          (user) => user.id !== action.payload.id
        ),
      };

    default:
      return state;
  }
}

export default users;
