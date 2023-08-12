import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from './operations';

const contacts = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

const handlePending = state => {
  state.isLoading = true;
};

const handleError = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};

const handleFulfilledGet = (state, { payload }) => {
  state.isLoading = false;
  state.error = null;
  state.items = payload;
};

const handleFulfilledAdd = (state, { payload }) => {
  state.isLoading = false;
  state.error = null;
  state.items.push(payload);
  // state.items = [...state.items, payload];
};

const handleFulfilledDelete = (state, { payload }) => {
  state.isLoading = false;
  state.error = null;
  state.items = state.items.filter(item => item.id !== payload.id);
};

// export const contactsSlice = createSlice({
//   name: 'contacts',
//   initialState: {
//     items: [],
//     isLoading: false,
//     error: null,
//   },
//   extraReducers: {
//     [fetchContacts.pending]: handlePending,
//     [fetchContacts.fulfilled]: handleFulfilledGet,
//     [fetchContacts.rejected]: handleError,

//     [addContact.pending]: handlePending,
//     [addContact.fulfilled]: handleFulfilledAdd,
//     [addContact.rejected]: handleError,

//     [deleteContact.pending]: handlePending,
//     [deleteContact.fulfilled]: handleFulfilledDelete,
//     [deleteContact.rejected]: handleError,
//   },
// });

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: contacts,
    isLoading: false,
    error: null,
  },
  extraReducers: builder => {
    builder
      // .addCase(fetchContacts.pending, handlePending)
      .addCase(fetchContacts.fulfilled, handleFulfilledGet)
      // .addCase(fetchContacts.rejected, handleError)
      // .addCase(addContact.pending, handlePending)
      .addCase(addContact.fulfilled, handleFulfilledAdd)
      // .addCase(addContact.rejected, handleError)
      // .addCase(deleteContact.pending, handlePending)
      .addCase(deleteContact.fulfilled, handleFulfilledDelete)
      // .addCase(deleteContact.rejected, handleError)
      .addMatcher(
        isAnyOf(
          fetchContacts.pending,
          addContact.pending,
          deleteContact.pending
        ),
        handlePending
      )
      .addMatcher(
        isAnyOf(
          fetchContacts.rejected,
          addContact.rejected,
          deleteContact.rejected
        ),
        handleError
      );
  },
});

export const contactsReducer = contactsSlice.reducer;
