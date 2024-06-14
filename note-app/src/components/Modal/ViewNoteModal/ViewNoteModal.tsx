import { FaTimes } from "react-icons/fa";
import { useAppDispatch } from "../../../hooks/redux";
import { readNote } from "../../../store/notesList/notesListSlice";
import { Note } from "../../../types/note";
import { DeleteBox, FixedContainer } from "../Modal.styles";
import { Box } from "./ViewNoteModal.styles";
import parse from "html-react-parser";

interface ViewNoteModalProps {
  note: Note;
  type: string | undefined;
}

const ViewNoteModalProps: FC<ViewNoteModalProps> = ({ note, type }) => {
  const dispatch = useAppDispatch();

  return (
    <FixedContainer>
      <Box style={{ backgroundColor: note.color }}>
        <DeleteBox
          onClick={() => dispatch(readNote({ type, id: note.id }))}
          className="readNote_close-btn"
        >
          <FaTimes />
        </DeleteBox>
        <div className="readNote_title">{note.title}</div>
        <div className="readNote_content">{parse(note.content)}</div>
      </Box>
    </FixedContainer>
  );
};
