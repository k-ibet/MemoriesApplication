//this is where UI is affected from, uses req.params or req....
import { CREATE, FETCH_ALL, UPDATE, LIKE, DELETE } from '../constants/actionTypes';
export default (posts=[], action) => {
    switch (action.type) {
        case DELETE:
            return posts.filter((post) => post._id !== action.payload);
        case LIKE:
            return posts.map((post) => post._id === action.payload._id ? action.payload : post);
        case UPDATE:
            return posts.map((post) => post._id === action.payload._id ? action.payload : post);
        case FETCH_ALL:
            return action.payload;
        case CREATE:
            return [...posts, action.payload];
        default:
            return posts;
    }
}