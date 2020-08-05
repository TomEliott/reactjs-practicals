import React, {useCallback, useContext, useState} from 'react';
import {NotesContext} from "../../contexts/NotesContext";
import Button from "../../components/buttons/Button";
import CenteredContentLayout from "../../components/layouts/CenteredContentLayout";
import HorizontalGroup from "../../components/groups/HorizontalGroup";
import Input from "../../components/inputs/Input";
import { Route, Switch, useRouteMatch, useHistory } from 'react-router-dom';
import NoRouteMatchPage from "../_app/NoRouteMatchPage";

const NoteDetail = ({ notes }) => {
    let match = useRouteMatch();
    const index = notes.map(el => el.id).indexOf(Number(match.params.note_id));

    if (index === -1)
        return (<NoRouteMatchPage />);

    const mynote = notes[index];
    
    return (
        <CenteredContentLayout className="text-center">
            <div>
                🔴 ({mynote.date}) {mynote.text}
            </div>
        </CenteredContentLayout>
    )
}

const Note = ({ note, dispatch }) => {
    const history = useHistory();
    const [ hovered, setHovered ] = useState(false);
    const [ noteText, setNoteText ] = useState(note.text);

    const change_handler = useCallback((newNote) => setNoteText(newNote), []);

    const delete_handler = (index) => {
        dispatch({ type: 'DELETE', id: index});
    }

    const update_handler = (index) => {
        dispatch({ type: 'UPDATE', id: index, text: noteText});
    }

    return (
        <div
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            className="mb-8 justify-between"
        >
            {!hovered && (
                <div>
                    {note.date}: {note.text}
                </div>)}
            {hovered && <HorizontalGroup className="flex">
                <Input className="flex-auto" value={noteText} onChange={change_handler}/>

                <Button className="flex-auto" type="primary" isFull onClick={() => update_handler( note.id )}>
                    🔄
                </Button>
                <Button className="flex-auto" type="primary" isFull onClick={() => delete_handler( note.id )}>
                    ❌
                </Button>
                <Button className="flex-auto" type="primary" isFull onClick={() => history.push(`/notes/${ note.id }`)}>
                    Get URL 🔅
                </Button>
            </HorizontalGroup>}
        </div>
    )
}

const NotesPage = () => {
    const {notes, dispatch} = useContext(NotesContext);
    const [currentNote, setCurrentNote] = useState('');

    const add_handler = () => {
        dispatch({ type: 'ADD', text: currentNote});
        setCurrentNote('');
    }

    const change_handler = useCallback((newNote) => setCurrentNote(newNote), []);

    return (
        <Switch>
            <Route exact={true} path={"/notes/:note_id"}>
                <NoteDetail notes={notes} dispatch={dispatch} />
            </Route>

            <Route exact={true} path={"/notes"} render={() => (
                <CenteredContentLayout>
                    <div className="mb-8 items-center justify-between">
                        <HorizontalGroup className="flex">
                            <Input className="flex-auto" placeholder="Add your note here" value={currentNote} onChange={change_handler}/>
                            <Button className="flex-auto" type="primary" isFull onClick={() => add_handler(notes)}>
                                Add a new note 🚀
                            </Button>
                        </HorizontalGroup>
                    </div>
                    <div>
                        {notes.map((note, index) => (
                            <Note key={index} note={note} dispatch={dispatch}/>
                            ))}
                    </div>
                </CenteredContentLayout>)}/>
        </Switch>
    );
};

export default NotesPage;