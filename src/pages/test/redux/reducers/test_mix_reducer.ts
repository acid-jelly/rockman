
import { TestMixActionTypes, TestMixState } from '../types/test_mix_types';

const initialState: TestMixState = {
    id: "",
    name: '',
    data: [],
    test_mixs: [],
    error: null,
    message: '',
    loading: false,
    deleted: null,
    new_one: null,
    new_ones: [],
};

const TestMixReducer = (state = initialState, action: TestMixActionTypes) => {
    switch (action.type) {

        case 'QUERY':
            return {...state, test_mixs: action.payload.test_mixs, error: null, message: action.payload.message};
        case 'QUERY_SUCCESS':
            return {...state, error: null, message: action.payload.message};
        case 'QUERY_FAIL':
            return {...state, error: action.payload, message: 'QUERY_FAIL'};

        case 'UPLOAD':
            return {...state, test_mixs: action.payload.test_mixs, error: null, message: action.payload.message};
        case 'UPLOAD_SUCCESS':
            return {...state, error: null, message: action.payload.message};
        case 'UPLOAD_FAIL':
            return {...state, error: action.payload, message: 'UPLOAD_FAIL'};

        case 'POST':
            return {...state, test_mixs: action.payload.test_mixs, error: null, message: action.payload.message};
        case 'POST_SUCCESS':
            return {...state, error: null, message: action.payload.message};
        case 'POST_FAIL':
            return {...state, error: action.payload, message: 'POST_FAIL'};

        case 'GET':
            return {...state, test_mixs: action.payload.test_mixs, error: null, message: action.payload.message};
        case 'GET_SUCCESS':
            return {...state, error: null, message: action.payload.message};
        case 'GET_FAIL':
            return {...state, error: action.payload, message: 'GET_FAIL'};

        case 'PUT':
            return {...state, test_mixs: action.payload.test_mixs, error: null, message: action.payload.message};
        case 'PUT_SUCCESS':
            return {...state, error: null, message: action.payload.message};
        case 'PUT_FAIL':
            return {...state, error: action.payload, message: 'PUT_FAIL'};

        case 'DELETE':
            return {...state, test_mixs: action.payload.test_mixs, error: null, message: action.payload.message};
        case 'DELETE_SUCCESS':
            return {...state, error: null, message: action.payload.message};
        case 'DELETE_FAIL':
            return {...state, error: action.payload, message: 'DELETE_FAIL'};

        case 'ITEM':
            return {...state, test_mixs: action.payload.test_mixs, error: null, message: action.payload.message};
        case 'ITEM_SUCCESS':
            return {...state, error: null, message: action.payload.message};
        case 'ITEM_FAIL':
            return {...state, error: action.payload, message: 'ITEM_FAIL'};

        case 'GET_PRODUCT':
            return {...state, test_mixs: action.payload.test_mixs, error: null, message: action.payload.message};
        case 'GET_PRODUCT_SUCCESS':
            return {...state, error: null, message: action.payload.message};
        case 'GET_PRODUCT_FAIL':
            return {...state, error: action.payload, message: 'GET_PRODUCT_FAIL'};

        case 'DELETE_PRODUCT':
            return {...state, test_mixs: action.payload.test_mixs, error: null, message: action.payload.message};
        case 'DELETE_PRODUCT_SUCCESS':
            return {...state, error: null, message: action.payload.message};
        case 'DELETE_PRODUCT_FAIL':
            return {...state, error: action.payload, message: 'DELETE_PRODUCT_FAIL'};
// [ANCHOR_1]









        case 'START_LOADING':
            return {...state, loading: true};
        case 'END_LOADING':
            return {...state, loading: false};
        default:
            return state;
    }
};

export default TestMixReducer;
    