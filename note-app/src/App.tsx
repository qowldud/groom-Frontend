import "./App.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Navbar, Sidebar } from "./layout";
import {
  AllNotes,
  ArchiveNotes,
  ErrorsPage,
  TagNotes,
  TrashNotes,
} from "./pages";
import { useAppSelector } from "./hooks/redux";
import { CreateNoteModal, TagsModal } from "./components";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const { viewEditTagsModal, viewCreateNoteModal } = useAppSelector(
    (state) => state.modal
  );
  return (
    <div className="app">
      {viewEditTagsModal && <TagsModal type="edit" />}
      {viewCreateNoteModal && <CreateNoteModal />}

      <ToastContainer
        position="bottom-right"
        theme="light"
        pauseOnHover
        autoClose={1500}
      />
      <BrowserRouter>
        <Sidebar />
        <div className="app_container">
          <Navbar />
          <Routes>
            <Route path="/" element={<AllNotes />} />
            <Route path="/archive" element={<ArchiveNotes />} />
            <Route path="/trash" element={<TrashNotes />} />
            <Route path="/tag/:name" element={<TagNotes />} />
            <Route path="/404" element={<ErrorsPage />} />
            <Route path="/*" element={<Navigate to={"/404"} replace />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
