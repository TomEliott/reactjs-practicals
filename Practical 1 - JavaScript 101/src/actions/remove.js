/* FIXME:
*
* export a function that removes a single element from the store.
*
* Rules:
* - you must use the functions from "../store"
*
*/
import { getState, setState } from "../store";

const remove = (elt) => {
    let list = getState();
    let eltIndex = list.indexOf(elt);

    if (eltIndex > -1) {
        list.splice(eltIndex, 1);
    }
    setState(list);
};

export default remove;