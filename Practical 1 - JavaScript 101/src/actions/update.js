/* FIXME:
*
* export a function that updates a single element from the store.
*
* Rules:
* - you must use the functions from "../store"
* - the updated element must not share the same reference as the previous one.
*
*/

import {getState, setState} from "../store";
import remove from "./remove";

const update = (oldElt, newElt) => {
    if (newElt !== "") {
        let list = getState();
        let length = list.length;
        let oldIndex = list.indexOf(oldElt);
        remove(oldElt);

        // Creating a new ID (with the given URL)
        const updateElt = {
            id: length + 1,
            data: newElt
        };

        // Inserting in old index (but with a different ID and data)
        list.splice(oldIndex, 0, updateElt);
        setState(list);
    }
};

export default update;