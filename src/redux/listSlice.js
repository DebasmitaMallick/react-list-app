import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  listData: null,
  loading: false,
  error: null,
  selectedLists: [],
  newListData: [],
};

export const fetchListData = createAsyncThunk(
  "list/fetchListData",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        "https://apis.ccbp.in/list-creation/lists"
      );

      if (response?.data?.lists) {
        const listData = response.data.lists;
        let listObj = {};

        listData.forEach((el) => {
          let lstNum = el.list_number;
          let objData = { ...el };
          delete objData.list_number;

          listObj[lstNum] = [...(listObj[lstNum] || []), objData];
        });

        return listObj;
      } else {
        return rejectWithValue("Failed to fetch data");
      }
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const listSlice = createSlice({
  name: "lists",
  initialState,
  reducers: {
    selectList(state, action) {
      state.selectedLists.push(action.payload)
    },
    unselectList(state, action) {
      state.selectedLists = state.selectedLists.filter(listNum => listNum !== action.payload)
    },
    cancelListCreation: (state) => {
      state.selectedLists = [];
    },
    updateLists(state, action) {
      const { newListId, newList, ...updatedLists } = action.payload;

      // Update existing lists
      Object.keys(updatedLists).forEach((listNumber) => {
        state.listData[listNumber] = updatedLists[listNumber];
      });

      // Add new list if it has items
      if (newList.length > 0) {
        const newListNumber = newListId;
        state.listData[newListNumber] = newList;
      }

      state.selectedLists = [];
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchListData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchListData.fulfilled, (state, action) => {
        state.loading = false;
        state.listData = action.payload;
      })
      .addCase(fetchListData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { selectList, unselectList, updateLists, cancelListCreation } = listSlice.actions
export default listSlice.reducer;
