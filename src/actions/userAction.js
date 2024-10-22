const GET_USERS_DATA = "GET_USERS_DATA";
const CREATE_USER = "CREATE_USER";
const EDIT_USER = "EDIT_USER";
const UPDATE_USER = "UPDATE_USER";
const GET_USER_DETAIL = "GET_USER_DETAIL";
const DELETE_USER = "DELETE_USER";

// get all user list
const getUserList = () => {
  return (dispatch) => {
    fetch("http://localhost:3000/users")
      .then((response) => response.json())
      .then((data) =>
        dispatch({
          type: GET_USERS_DATA,
          payload: {
            data,
            errorMessage: false,
          },
        })
      )
      .catch((error) => {
        dispatch({
          type: GET_USERS_DATA,
          payload: {
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};

//create user list
const createUser = (data) => {
  return (dispatch) => {
    fetch("http://localhost:3000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((res) =>
        dispatch({
          type: CREATE_USER,
          payload: {
            data: res,
            errorMessage: false,
          },
        })
      )
      .catch((error) => {
        dispatch({
          type: CREATE_USER,
          payload: {
            data: null,
            errorMessage: error.message,
          },
        });
      });
  };
};

//edit user
const editUser = (id) => {
  return (dispatch) => {
    fetch(`http://localhost:3000/users/${id}`, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((res) =>
        dispatch({
          type: EDIT_USER,
          payload: {
            data: res,
            errorMessage: false,
          },
        })
      )
      .catch((error) =>
        dispatch({
          type: EDIT_USER,
          payload: {
            data: [],
            errorMessage: error.message,
          },
        })
      );
  };
};

const updateUser = (data, id) => {
  return (dispatch) => {
    fetch(`http://localhost:3000/users/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((res) => {
        dispatch({
          type: UPDATE_USER,
          payload: {
            data: res,
            errorMessage: false,
          },
        });
      });
  };
};

//show user detail
const getUserDetail = (id) => {
  return (dispatch) => {
    fetch(`http://localhost:3000/users/${id}`)
      .then((response) => response.json())
      .then((data) =>
        dispatch({
          type: GET_USER_DETAIL,
          payload: {
            data,
            errorMessage: false,
          },
        })
      )
      .catch((error) => {
        dispatch({
          type: GET_USER_DETAIL,
          payload: {
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};

//delete user list
const deleteUser = (id) => {
  return (dispatch) => {
    fetch(`http://localhost:3000/users/${id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => response.json())
      .then((data) => {
        dispatch({
          type: DELETE_USER,
          payload: {
            id: data.id,
          },
        });
      })
      .catch((error) => {});
  };
};

export {
  GET_USERS_DATA,
  CREATE_USER,
  EDIT_USER,
  UPDATE_USER,
  GET_USER_DETAIL,
  DELETE_USER,
  getUserList,
  createUser,
  editUser,
  updateUser,
  getUserDetail,
  deleteUser,
};
