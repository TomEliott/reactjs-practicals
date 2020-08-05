/* FIXME:
*
* export a function that adds a new element to the store.
*
* Rules:
* - add must be able to take either a single element
* or an array of new elements
* - you must use the functions from "../store"
*
*/
import { getState, setState } from "../store";

const add = (arg) => {
    if (arg !== "") {
        let list = getState();
        let length = list.length;

        const newArg = {
            id: length + 1,
            data: arg
        };

        list.push(newArg);
        setState(list);
    }
}

export default add;