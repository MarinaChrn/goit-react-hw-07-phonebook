// import { useDispatch } from "react-redux";
// import { change } from "redux/contacts/contactsSlice";

// const url = "https://647f99c1c246f166da90fcba.mockapi.io/contacts"

// export const fetchContacts = (taskss) => {fetch(`${url}/contacts`, {
//   method: 'GET',
//   headers: {'content-type':'application/json'},
// }).then(res => {
//   if (res.ok) {
//       return res.json();
//   }
//   // handle error
// }).then(contacts => {
//     // console.log(contacts)
//     const dispatch = useDispatch();
//     dispatch(change(contacts))
//     // console.log(contacts)
//   // Do something with the list of tasks
// }).catch(error => {
//   // handle error
// })}

import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://647f99c1c246f166da90fcba.mockapi.io/contacts";

export const fetchContacts = createAsyncThunk(
  "contacts/fetchAll",
  async () => {
      const response = await axios.get("/contacts");
      console.log(response.data)
      return response.data;
  }
);
