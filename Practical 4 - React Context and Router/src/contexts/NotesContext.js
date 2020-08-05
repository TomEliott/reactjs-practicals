import React, { useReducer, useEffect } from 'react'

export const NotesContext = React.createContext({
    notes: [],
    dispatch: () => {}
});

let id = 0;

const get_id = () => {
    id = id + 1;
    return id;
}

const create_new_date = (day) => {
    return day.getFullYear()
        + '/' + (day.getMonth() + 1)
        + '/' + day.getDate();
}

const reducer = (notes, action) => {
    let day = new Date();
    switch (action.type) {
        case ('ADD'):
            return [...notes, { date: create_new_date(day), text: action.text, id: get_id(id) }];
        case ('UPDATE'):
            return notes.map(note => {
                if (note.id === action.id)
                    return {...note, date: create_new_date(day), text: action.text};
                else
                    return note;
            });
        case ('DELETE'):
            return notes.filter(note => {return note.id !== action.id});
        default:
            return notes;
    }
}

export const NotesContextProvider = ({ children }) => {
    let storage = localStorage.getItem('notes');
    if (storage === "null" || storage === null)
        storage = JSON.stringify([]);

    const [notes, dispatch] = useReducer(reducer, JSON.parse(storage));

    useEffect(() => {
        localStorage.setItem('notes', JSON.stringify(notes));
    }, [notes])

    return (
        <NotesContext.Provider value = {{ notes, dispatch }}>
            {children}
        </NotesContext.Provider>
    );
};