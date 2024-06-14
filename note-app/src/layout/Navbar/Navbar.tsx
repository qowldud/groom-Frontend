import { useLocation } from "react-router-dom";
import { useAppDispatch } from "../../hooks/redux";
import { Container, StyleNav } from "./Navbar.styles";
import { FiMenu } from "react-icons/fi";
import { toggleMenu } from "../../store/menu/menuSlice";
import getStandarName from "../../utils/getStandardName";
import { ButtonFill } from "../../styles/styles";
import { toggleCreateNoteModal } from "../../store/modal/modalSlice";

export default function Navbar() {
  const dispatch = useAppDispatch();

  const location = useLocation();
  const { pathname, state } = location;
  //다음 경로에 navbar가 표시되지 않음
  if (pathname === "/404") {
    return null;
  }

  return (
    <StyleNav>
      <div className="nav_menu">
        <FiMenu onClick={() => dispatch(toggleMenu(true))} />
      </div>

      <Container>
        <div className="nav_page-title">{getStandarName(state)}</div>

        {state !== "Trash" && state !== "Archive" && (
          <ButtonFill
            onClick={() => dispatch(toggleCreateNoteModal(true))}
            className="nav_btn"
          >
            <span>+</span>
          </ButtonFill>
        )}
      </Container>
    </StyleNav>
  );
}
