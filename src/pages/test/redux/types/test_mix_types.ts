
export interface TestMix {
    id: string;
    name: string;
}

export interface TestMixRequest {
    id: string;
    name: string;
    fk_id?: string;
    error?: any;
    message?: string;
}

export interface TestMixError {
    id: [string];
    name: [string];
}

export interface TestMixResponse {
    id: string;
    name: string;
    data: TestMixRequest[];
    error?: TestMixError | null;
    message?: string;
    loading?: boolean;
    deleted?: TestMixRequest | null;
    new_one?: TestMixRequest | null;
    new_ones?: TestMixRequest[];
    test_mixs?: TestMixRequest[];
}

export type TestMixState = TestMixResponse;

export const START_LOADING = 'START_LOADING';
export const END_LOADING = 'END_LOADING';

export const QUERY = 'QUERY';
export const QUERY_SUCCESS = 'QUERY_SUCCESS';
export const QUERY_FAIL = 'QUERY_FAIL';

export const UPLOAD = 'UPLOAD';
export const UPLOAD_SUCCESS = 'UPLOAD_SUCCESS';
export const UPLOAD_FAIL = 'UPLOAD_FAIL';

export const POST = 'POST';
export const POST_SUCCESS = 'POST_SUCCESS';
export const POST_FAIL = 'POST_FAIL';

export const GET = 'GET';
export const GET_SUCCESS = 'GET_SUCCESS';
export const GET_FAIL = 'GET_FAIL';

export const PUT = 'PUT';
export const PUT_SUCCESS = 'PUT_SUCCESS';
export const PUT_FAIL = 'PUT_FAIL';

export const DELETE = 'DELETE';
export const DELETE_SUCCESS = 'DELETE_SUCCESS';
export const DELETE_FAIL = 'DELETE_FAIL';

export const ITEM = 'ITEM';
export const ITEM_SUCCESS = 'ITEM_SUCCESS';
export const ITEM_FAIL = 'ITEM_FAIL';

export const GET_PRODUCT = 'GET_PRODUCT';
export const GET_PRODUCT_SUCCESS = 'GET_PRODUCT_SUCCESS';
export const GET_PRODUCT_FAIL = 'GET_PRODUCT_FAIL';

export const DELETE_PRODUCT = 'DELETE_PRODUCT';
export const DELETE_PRODUCT_SUCCESS = 'DELETE_PRODUCT_SUCCESS';
export const DELETE_PRODUCT_FAIL = 'DELETE_PRODUCT_FAIL';
// [ANCHOR_1]










interface StartLoadingAction {
type: typeof START_LOADING;
payload: TestMixRequest;
}

interface EndLoadingAction {
type: typeof END_LOADING;
payload: TestMixRequest;
}

interface TestMixQueryAction {
type: typeof QUERY;
payload: TestMixResponse;
}
interface TestMixQuerySuccessAction {
type: typeof QUERY_SUCCESS;
payload: TestMixResponse;
}
interface TestMixQueryErrorAction {
type: typeof QUERY_FAIL;
payload: TestMixError;
}

interface TestMixUploadAction {
type: typeof UPLOAD;
payload: TestMixResponse;
}
interface TestMixUploadSuccessAction {
type: typeof UPLOAD_SUCCESS;
payload: TestMixResponse;
}
interface TestMixUploadErrorAction {
type: typeof UPLOAD_FAIL;
payload: TestMixError;
}

interface TestMixPostAction {
type: typeof POST;
payload: TestMixResponse;
}
interface TestMixPostSuccessAction {
type: typeof POST_SUCCESS;
payload: TestMixResponse;
}
interface TestMixPostErrorAction {
type: typeof POST_FAIL;
payload: TestMixError;
}

interface TestMixGetAction {
type: typeof GET;
payload: TestMixResponse;
}
interface TestMixGetSuccessAction {
type: typeof GET_SUCCESS;
payload: TestMixResponse;
}
interface TestMixGetErrorAction {
type: typeof GET_FAIL;
payload: TestMixError;
}

interface TestMixPutAction {
type: typeof PUT;
payload: TestMixResponse;
}
interface TestMixPutSuccessAction {
type: typeof PUT_SUCCESS;
payload: TestMixResponse;
}
interface TestMixPutErrorAction {
type: typeof PUT_FAIL;
payload: TestMixError;
}

interface TestMixDeleteAction {
type: typeof DELETE;
payload: TestMixResponse;
}
interface TestMixDeleteSuccessAction {
type: typeof DELETE_SUCCESS;
payload: TestMixResponse;
}
interface TestMixDeleteErrorAction {
type: typeof DELETE_FAIL;
payload: TestMixError;
}

interface TestMixItemAction {
type: typeof ITEM;
payload: TestMixResponse;
}
interface TestMixItemSuccessAction {
type: typeof ITEM_SUCCESS;
payload: TestMixResponse;
}
interface TestMixItemErrorAction {
type: typeof ITEM_FAIL;
payload: TestMixError;
}

interface TestMixGetProductAction {
type: typeof GET_PRODUCT;
payload: TestMixResponse;
}
interface TestMixGetProductSuccessAction {
type: typeof GET_PRODUCT_SUCCESS;
payload: TestMixResponse;
}
interface TestMixGetProductErrorAction {
type: typeof GET_PRODUCT_FAIL;
payload: TestMixError;
}

interface TestMixDeleteProductAction {
type: typeof DELETE_PRODUCT;
payload: TestMixResponse;
}
interface TestMixDeleteProductSuccessAction {
type: typeof DELETE_PRODUCT_SUCCESS;
payload: TestMixResponse;
}
interface TestMixDeleteProductErrorAction {
type: typeof DELETE_PRODUCT_FAIL;
payload: TestMixError;
}
// [ANCHOR_2]










export type TestMixActionTypes = 
StartLoadingAction
| EndLoadingAction

| TestMixQueryAction 
| TestMixQuerySuccessAction 
| TestMixQueryErrorAction 

| TestMixUploadAction 
| TestMixUploadSuccessAction 
| TestMixUploadErrorAction 

| TestMixPostAction 
| TestMixPostSuccessAction 
| TestMixPostErrorAction 

| TestMixGetAction 
| TestMixGetSuccessAction 
| TestMixGetErrorAction 

| TestMixPutAction 
| TestMixPutSuccessAction 
| TestMixPutErrorAction 

| TestMixDeleteAction 
| TestMixDeleteSuccessAction 
| TestMixDeleteErrorAction 

| TestMixItemAction 
| TestMixItemSuccessAction 
| TestMixItemErrorAction 

| TestMixGetProductAction 
| TestMixGetProductSuccessAction 
| TestMixGetProductErrorAction 

| TestMixDeleteProductAction 
| TestMixDeleteProductSuccessAction 
| TestMixDeleteProductErrorAction 
// [ANCHOR_3]









    