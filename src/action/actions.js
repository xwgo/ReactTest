const fetch = require('isomorphic-fetch');

// 查询发送
const PRICING_PRINCIPLE_QUERY_FORM_SUBMIT = 'PRICING_PRINCIPLE_QUERY_FORM_SUBMIT';
// 查询成功
const PRICING_PRINCIPLE_QUERY_FORM_SUBMIT_SUCCESS = 'PRICING_PRINCIPLE_QUERY_FORM_SUBMIT_SUCCESS';

export const QUERY_SUCCESS = 'QUERY_SUCCESS';
export const QUERY_KEYVALUEITEMS = 'QUERY_KEYVALUEITEMS';
export const ERROR = 'ERROR';

const querySucceed =(json) => {
    return {
        type: QUERY_SUCCESS,
        json
    };
};

const queryKeyValueItems =(keyValueItems) => {
    return {
        type: QUERY_KEYVALUEITEMS,
        keyValueItems
    };
};

const repairorderquery = files => dispatch => {
    fetch('../data/repairorder.json')
        .then(response => response.json())
        .then(json => {
            dispatch({
                type: QUERY_SUCCESS,
                files,
                json: json
            });
            //dispatch(querySucceed(json));
        });
};

const getKeyValueItems = files => dispatch => {
    fetch('../data/keyValueitems.json')
        .then(response => response.json())
        .then(keyValueItems => {
            dispatch(queryKeyValueItems(keyValueItems));
        });
};

export default {
    repairorderquery,
    getKeyValueItems
}