import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import moment from 'moment';

// Mock any POST request
const mock = new MockAdapter(axios);
mock.onPost(/.*/).reply(config => [201]);

const post = (fields, dispatch, props) => {
    fields.dob = moment(fields.dob, "DD/MM/YYYY").format('YYYY-MM-DD');

    axios.post(props.url).then(response => {
        if (response.status >= 200 && response.status < 300) {
            console.log('successful post');
            console.log(JSON.stringify(fields, null, 2));
            dispatch(props.callback(props.pageNumber));
        }
    }).catch((error) => {
        console.log(error);
    });
};

export default post;