import { createSlice, isPending, isRejected } from '@reduxjs/toolkit';
import { addContact, deleteContact, getAllContacts } from './operations';

const contactsInitialState = {
  items: [],
  isLoading: false,
  error: null,
};

const handlePending = state => {
  state.isLoading = true;
  state.error = null;
};

const handleRejected = (state, action) => {
  state.items = [];
  state.error = action.payload;
  state.isLoading = false;
};

// const handleFulfilledDefaults = state => {
//   state.isLoading = false;
//   state.error = null;
// };

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  extraReducers: builder =>
    builder
      //--------- Get All Contacts ---------
      .addCase(getAllContacts.fulfilled, (state, action) => {
        state.items = action.payload;
        state.isLoading = false;
        state.error = null;
      })
      //--------- Add Contact ---------
      .addCase(addContact.fulfilled, (state, action) => {
        state.items.push(action.payload);
        state.isLoading = false;
        state.error = null;
      })
      //--------- Delete Contact ---------
      .addCase(deleteContact.fulfilled, (state, action) => {
        const idx = state.items.findIndex(item => item.id === action.payload);
        state.items.splice(idx, 1);
        // state.items = state.items.filter(item => item.id !== action.payload);
        state.isLoading = false;
        state.error = null;
      })
      //--------- Pendings ---------
      .addMatcher(isPending(addContact, deleteContact, getAllContacts), state =>
        handlePending(state)
      )
      //--------- Rejects ---------
      .addMatcher(
        isRejected(addContact, deleteContact, getAllContacts),
        (state, action) => handleRejected(state, action)
      ),
});

export const contactsReducer = contactsSlice.reducer;
