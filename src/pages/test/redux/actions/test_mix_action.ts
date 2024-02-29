
import { Dispatch } from 'redux';
import { TestMixActionTypes, TestMixRequest, TestMixResponse, TestMixError } from '../types/test_mix_types';
import axios, { AxiosError, AxiosResponse } from "axios";
axios.defaults.withCredentials = true;

export const TestMixQuery =
  (data: TestMixRequest) =>
  async (dispatch: Dispatch<TestMixActionTypes>) => {
    dispatch({
      type: "START_LOADING",
      payload: { ...data, error: null, message: "START_LOADING" },
    });

    axios
      axios.get(`${process.env.REACT_APP_API_URL}{prefix}{api_name}/{model_name_url}?id=${data.fk_id}&name=${data.name}`)
      .then((response: AxiosResponse<TestMixResponse>) => {
        dispatch({ type: "QUERY", payload: response.data });

        dispatch({
        type: "QUERY_SUCCESS",
        payload: {
            ...response.data,
            error: null,
            message: "QUERY_SUCCESS",
        },
        });

        dispatch({
          type: "END_LOADING",
          payload: { ...data, error: null, message: "END_LOADING" },
        });
      })
      .catch((error: AxiosError<TestMixError>) => {
        if (error.response) {
          dispatch({
            type: "QUERY_FAIL",
            payload: error.response.data,
          });
          dispatch({
            type: "END_LOADING",
            payload: { ...data, error: null, message: "END_LOADING" },
          });
        } else if (error.request) {
          console.log("No response received:", error.request);
        } else {
          console.log("Error:", error.message);
        }
      });
  };

export const TestMixUpload =
  (data: TestMixRequest, files: File[]) =>
  async (dispatch: Dispatch<TestMixActionTypes>) => {
    dispatch({
      type: "START_LOADING",
      payload: { ...data, error: null, message: "START_LOADING" },
    });

    const formData = new FormData();
    formData.append("fk_id", data.fk_id ? data.fk_id.toString() : "");
    files.forEach((file) => {
      formData.append("name", file.name);
      formData.append("files", file);
    });

    axios
      .post(`${process.env.REACT_APP_API_URL}{prefix}{enpoint_name}/{model_name_for_url}/`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response: AxiosResponse<TestMixResponse>) => {
        dispatch({ type: "UPLOAD", payload: response.data });

        setTimeout(() => {
          dispatch({
            type: "UPLOAD_SUCCESS",
            payload: {
              ...response.data,
              error: null,
              message: "UPLOAD_SUCCESS",
            },
          });
        }, 3000);

        dispatch({
          type: "END_LOADING",
          payload: { ...data, error: null, message: "END_LOADING" },
        });
      })
      .catch((error: AxiosError<TestMixError>) => {
        if (error.response) {
          dispatch({
            type: "UPLOAD_FAIL",
            payload: error.response.data,
          });
          dispatch({
            type: "END_LOADING",
            payload: { ...data, error: null, message: "END_LOADING" },
          });
        } else if (error.request) {
          console.log("No response received:", error.request);
        } else {
          console.log("Error:", error.message);
        }
      });
  };

export const TestMixPost =
  (data: TestMixRequest) =>
  async (dispatch: Dispatch<TestMixActionTypes>) => {
    dispatch({
      type: "START_LOADING",
      payload: { ...data, error: null, message: "START_LOADING" },
    });

    axios
      axios.post(`${process.env.REACT_APP_API_URL}{prefix}{api_name}/{model_name_url}/`, data)
      .then((response: AxiosResponse<TestMixResponse>) => {
        dispatch({ type: "POST", payload: response.data });

        dispatch({
        type: "POST_SUCCESS",
        payload: {
            ...response.data,
            error: null,
            message: "POST_SUCCESS",
        },
        });

        dispatch({
          type: "END_LOADING",
          payload: { ...data, error: null, message: "END_LOADING" },
        });
      })
      .catch((error: AxiosError<TestMixError>) => {
        if (error.response) {
          dispatch({
            type: "POST_FAIL",
            payload: error.response.data,
          });
          dispatch({
            type: "END_LOADING",
            payload: { ...data, error: null, message: "END_LOADING" },
          });
        } else if (error.request) {
          console.log("No response received:", error.request);
        } else {
          console.log("Error:", error.message);
        }
      });
  };

export const TestMixGet =
  (data: TestMixRequest) =>
  async (dispatch: Dispatch<TestMixActionTypes>) => {
    dispatch({
      type: "START_LOADING",
      payload: { ...data, error: null, message: "START_LOADING" },
    });

    axios
      axios.get(`${process.env.REACT_APP_API_URL}{prefix}{api_name}/{model_name_url}?id=${data.fk_id}&name=${data.name}`)
      .then((response: AxiosResponse<TestMixResponse>) => {
        dispatch({ type: "GET", payload: response.data });

        dispatch({
        type: "GET_SUCCESS",
        payload: {
            ...response.data,
            error: null,
            message: "GET_SUCCESS",
        },
        });

        dispatch({
          type: "END_LOADING",
          payload: { ...data, error: null, message: "END_LOADING" },
        });
      })
      .catch((error: AxiosError<TestMixError>) => {
        if (error.response) {
          dispatch({
            type: "GET_FAIL",
            payload: error.response.data,
          });
          dispatch({
            type: "END_LOADING",
            payload: { ...data, error: null, message: "END_LOADING" },
          });
        } else if (error.request) {
          console.log("No response received:", error.request);
        } else {
          console.log("Error:", error.message);
        }
      });
  };

export const TestMixPut =
  (data: TestMixRequest) =>
  async (dispatch: Dispatch<TestMixActionTypes>) => {
    dispatch({
      type: "START_LOADING",
      payload: { ...data, error: null, message: "START_LOADING" },
    });

    axios
      axios.put(`${process.env.REACT_APP_API_URL}{prefix}{api_name}/{model_name_url}/`, data)
      .then((response: AxiosResponse<TestMixResponse>) => {
        dispatch({ type: "PUT", payload: response.data });

        dispatch({
        type: "PUT_SUCCESS",
        payload: {
            ...response.data,
            error: null,
            message: "PUT_SUCCESS",
        },
        });

        dispatch({
          type: "END_LOADING",
          payload: { ...data, error: null, message: "END_LOADING" },
        });
      })
      .catch((error: AxiosError<TestMixError>) => {
        if (error.response) {
          dispatch({
            type: "PUT_FAIL",
            payload: error.response.data,
          });
          dispatch({
            type: "END_LOADING",
            payload: { ...data, error: null, message: "END_LOADING" },
          });
        } else if (error.request) {
          console.log("No response received:", error.request);
        } else {
          console.log("Error:", error.message);
        }
      });
  };

export const TestMixDelete =
  (data: TestMixRequest) =>
  async (dispatch: Dispatch<TestMixActionTypes>) => {
    dispatch({
      type: "START_LOADING",
      payload: { ...data, error: null, message: "START_LOADING" },
    });

    axios
      axios.delete(`${process.env.REACT_APP_API_URL}{prefix}{api_name}/{model_name_url}?id=${data.fk_id}&name=${data.name}`)
      .then((response: AxiosResponse<TestMixResponse>) => {
        dispatch({ type: "DELETE", payload: response.data });

        dispatch({
        type: "DELETE_SUCCESS",
        payload: {
            ...response.data,
            error: null,
            message: "DELETE_SUCCESS",
        },
        });

        dispatch({
          type: "END_LOADING",
          payload: { ...data, error: null, message: "END_LOADING" },
        });
      })
      .catch((error: AxiosError<TestMixError>) => {
        if (error.response) {
          dispatch({
            type: "DELETE_FAIL",
            payload: error.response.data,
          });
          dispatch({
            type: "END_LOADING",
            payload: { ...data, error: null, message: "END_LOADING" },
          });
        } else if (error.request) {
          console.log("No response received:", error.request);
        } else {
          console.log("Error:", error.message);
        }
      });
  };

export const TestMixItem =
  (data: TestMixRequest) =>
  async (dispatch: Dispatch<TestMixActionTypes>) => {
    dispatch({
      type: "START_LOADING",
      payload: { ...data, error: null, message: "START_LOADING" },
    });

    axios
      axios.get(`${process.env.REACT_APP_API_URL}{prefix}{api_name}/{model_name_url}?id=${data.fk_id}&name=${data.name}`)
      .then((response: AxiosResponse<TestMixResponse>) => {
        dispatch({ type: "ITEM", payload: response.data });

        dispatch({
        type: "ITEM_SUCCESS",
        payload: {
            ...response.data,
            error: null,
            message: "ITEM_SUCCESS",
        },
        });

        dispatch({
          type: "END_LOADING",
          payload: { ...data, error: null, message: "END_LOADING" },
        });
      })
      .catch((error: AxiosError<TestMixError>) => {
        if (error.response) {
          dispatch({
            type: "ITEM_FAIL",
            payload: error.response.data,
          });
          dispatch({
            type: "END_LOADING",
            payload: { ...data, error: null, message: "END_LOADING" },
          });
        } else if (error.request) {
          console.log("No response received:", error.request);
        } else {
          console.log("Error:", error.message);
        }
      });
  };

export const TestMixGetProduct =
  (data: TestMixRequest) =>
  async (dispatch: Dispatch<TestMixActionTypes>) => {
    dispatch({
      type: "START_LOADING",
      payload: { ...data, error: null, message: "START_LOADING" },
    });

    axios
      axios.post(`${process.env.REACT_APP_API_URL}{prefix}{api_name}/{model_name_url}/`, data)
      .then((response: AxiosResponse<TestMixResponse>) => {
        dispatch({ type: "GET_PRODUCT", payload: response.data });

        dispatch({
        type: "GET_PRODUCT_SUCCESS",
        payload: {
            ...response.data,
            error: null,
            message: "GET_PRODUCT_SUCCESS",
        },
        });

        dispatch({
          type: "END_LOADING",
          payload: { ...data, error: null, message: "END_LOADING" },
        });
      })
      .catch((error: AxiosError<TestMixError>) => {
        if (error.response) {
          dispatch({
            type: "GET_PRODUCT_FAIL",
            payload: error.response.data,
          });
          dispatch({
            type: "END_LOADING",
            payload: { ...data, error: null, message: "END_LOADING" },
          });
        } else if (error.request) {
          console.log("No response received:", error.request);
        } else {
          console.log("Error:", error.message);
        }
      });
  };

export const TestMixDeleteProduct =
  (data: TestMixRequest) =>
  async (dispatch: Dispatch<TestMixActionTypes>) => {
    dispatch({
      type: "START_LOADING",
      payload: { ...data, error: null, message: "START_LOADING" },
    });

    axios
      axios.delete(`${process.env.REACT_APP_API_URL}{prefix}{api_name}/{model_name_url}?id=${data.fk_id}&name=${data.name}`)
      .then((response: AxiosResponse<TestMixResponse>) => {
        dispatch({ type: "DELETE_PRODUCT", payload: response.data });

        dispatch({
        type: "DELETE_PRODUCT_SUCCESS",
        payload: {
            ...response.data,
            error: null,
            message: "DELETE_PRODUCT_SUCCESS",
        },
        });

        dispatch({
          type: "END_LOADING",
          payload: { ...data, error: null, message: "END_LOADING" },
        });
      })
      .catch((error: AxiosError<TestMixError>) => {
        if (error.response) {
          dispatch({
            type: "DELETE_PRODUCT_FAIL",
            payload: error.response.data,
          });
          dispatch({
            type: "END_LOADING",
            payload: { ...data, error: null, message: "END_LOADING" },
          });
        } else if (error.request) {
          console.log("No response received:", error.request);
        } else {
          console.log("Error:", error.message);
        }
      });
  };
// [ANCHOR_1]









    