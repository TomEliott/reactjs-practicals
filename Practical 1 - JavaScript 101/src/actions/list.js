/* FIXME:
*
* export a function that returns all the current elements from the store.
*
* Rules:
* - you must use the functions from "../store"
*
*/
import { getState } from "../store";

const list = () => getState();

export default list;