import { v4 } from "uuid";
import { Tag } from "../../types/tag";
import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

interface TagState {
  tagsList: Tag[];
}

const initialState: TagState = {
  tagsList: [
    { tag: "learnings", id: v4() },
    { tag: "work", id: v4() },
    { tag: "quotes", id: v4() },
  ],
};

const tagSlice = createSlice({
  name: "tags",
  initialState,
  reducers: {
    addTags: (state, { payload }) => {
      if (state.tagsList.find(({ tag }) => tag === payload.tag)) {
        toast.warning("이미 존재하는 태그입니다.");
      } else {
        state.tagsList.push(payload);
        toast.info("새로운 태그가 등록되었습니다.");
      }
    },
    deleteTags: (state, { payload }) => {
      state.tagsList = state.tagsList.filter(({ id }) => id !== payload);
      toast.info("태그가 삭제되었습니다.");
    },
  },
});

export const { addTags, deleteTags } = tagSlice.actions;
export default tagSlice.reducer;
