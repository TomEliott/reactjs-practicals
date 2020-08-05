/* FIXME:
*
* export a function that gets a single element from the store.
*
* Rules:
* - you must use the functions from "../store"
*
*/
import { getState } from "../store";

const get = (elt) => {
    getState([elt]);
};

export default get;
