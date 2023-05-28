import { createSlice } from '@reduxjs/toolkit';

import { fetchContacts, addContact, deleteContact } from "../redux/operations";

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
}

const contactsSlice = createSlice({
  name: "contacts",
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: {
    [fetchContacts.pending]: handlePending,
  },
  [fetchContacts.fulfilled](state, action) {
    state.isLoading = false;
    state.error = null;
    state.items = action.payload;
  },
  [fetchContacts.rejected]: handleRejected,
  [addContact.pending]: handlePending,
  [addContact.fulfilled](state, action) {
    state.isLoading = false;
    state.error = null;
    state.items.push(action.payload);
  },
  [addContact.rejected]: handleRejected,
  [deleteContact.pending]: handlePending,
  [deleteContact.fulfilled](state, action) {
    state.isLoading = false;
    state.error = null;
    const index = state.contacts.findIndex(contact => contact.id === action.payload.id);
    state.items.splice(index, 1);
  },
  [deleteContact.rejected]: handleRejected,
});

export const getContacts = state => state.contacts.items;

export const getIsLoading = state => state.contacts.isLoading;
export const getError = state => state.contacts.error;

// export const { fetchingInProgress, fetchingSuccess, fetchingError } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;