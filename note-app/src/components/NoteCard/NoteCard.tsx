import { FC } from "react";
import {
  Card,
  ContentBox,
  FooterBox,
  TagsBox,
  TopBox,
} from "./NoteCard.styles";
import { NotesIconBox } from "../../styles/styles";
import { BsFillPinFill } from "react-icons/bs";
import { useAppDispatch } from "../../hooks/redux";
import { Note } from "../../types/note";
import getRelevantBtns from "../../utils/getRelevantBtns";
import { readNote, setPinnedNotes } from "../../store/notesList/notesListSlice";
import parse from "html-react-parser";
import ReadNoteModal from "../Modal/ReadNoteModal/ReadNoteModal";

interface NoteCardProps {
  note: Note;
  type: string;
}

const NoteCard: FC<NoteCardProps> = ({ note, type }) => {
  const func = () => {
    const imgContent = content.includes("img");

    if (imgContent) {
      return content;
    } else {
      return content.length > 75 ? content.slice(0, 75) + "..." : content;
    }
  };
  const dispatch = useAppDispatch();
  const { title, content, tags, color, priority, date, isPinned, isRead, id } =
    note;

  return (
    <>
      {isRead && <ReadNoteModal note={note} type={type} />}
      <Card style={{ backgroundColor: color }}>
        <TopBox>
          <div className="noteCard_title">
            {title.length > 10 ? title.slice(0, 10) + "..." : title}
          </div>
          <div className="noteCard_top-options">
            <span className="noteCard_priority">{priority}</span>

            {type !== "archive" && type !== "trash" && (
              <NotesIconBox
                className="noteCard_pin"
                onClick={() => dispatch(setPinnedNotes({ id }))}
              >
                <BsFillPinFill style={{ color: isPinned ? "red" : "" }} />
              </NotesIconBox>
            )}
          </div>
        </TopBox>
        <ContentBox onClick={() => dispatch(readNote({ type, id }))}>
          {parse(func())}
        </ContentBox>

        <TagsBox>
          {tags?.map(({ tag, id }) => (
            <span key={id}>{tag}</span>
          ))}
        </TagsBox>

        <FooterBox>
          <div className="noteCard_date">{date}</div>
          <div>{getRelevantBtns(type, note, dispatch)}</div>
        </FooterBox>
      </Card>
    </>
  );
};

export default NoteCard;
