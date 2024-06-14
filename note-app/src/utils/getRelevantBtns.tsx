import { Dispatch } from "@reduxjs/toolkit";
import { Note } from "../types/note";
import { NotesIconBox } from "../styles/styles";
import {
  setArchiveNotes,
  setEditNote,
  setTrashNotes,
  unArchiveNote,
} from "../store/notesList/notesListSlice";
import { RiInboxUnarchiveFill } from "react-icons/ri";
import { FaArchive, FaEdit, FaTrash } from "react-icons/fa";
import { toggleCreateNoteModal } from "../store/modal/modalSlice";

const getRelevantBtns = (type: string, note: Note, dispatch: Dispatch) => {
  const clickHandler = () => {
    dispatch(setEditNote(note));
    dispatch(toggleCreateNoteModal(true));
  };
  if (type === "archive") {
    return (
      <>
        <NotesIconBox
          onClick={() => dispatch(unArchiveNote(note))}
          data-info="Unarchive"
        >
          <RiInboxUnarchiveFill style={{ fontSize: "1rem" }} />
        </NotesIconBox>
        <NotesIconBox
          onClick={() => dispatch(setTrashNotes(note))}
          data-info="Delete"
        >
          <FaTrash />
        </NotesIconBox>
      </>
    );
  } else {
    return (
      <>
        <NotesIconBox data-info="Edit">
          <FaEdit style={{ fontSize: "1rem" }} onClick={clickHandler} />
        </NotesIconBox>
        <NotesIconBox
          onClick={() => dispatch(setArchiveNotes(note))}
          data-info="Archive"
        >
          <FaArchive />
        </NotesIconBox>
        <NotesIconBox
          onClick={() => dispatch(setTrashNotes(note))}
          data-info="Delete"
        >
          <FaTrash />
        </NotesIconBox>
      </>
    );
  }
};

export default getRelevantBtns;
