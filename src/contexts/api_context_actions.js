// make an error
const makeError = dispatch => {
    return (errorMsg) => {
        dispatch({
            type: "makeError",
            val: {
                errorMsg: errorMsg
            }
        });
    };
};

// remove the error
const removeError = dispatch => {
    return () => {
        dispatch({
            type: "removeError"
        });
    };
};

export default {
    makeError,
    removeError
};