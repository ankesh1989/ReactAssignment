import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  httpRegisterUser,
  httpListUsers,
  httpDeleteUser,
  httpEditUser,
} from "../httpRequests/userRequests";

/**
 * Creating thunk to list all users
 */

export const getUsers = createAsyncThunk(
  "user/all",
  async (data, { rejectWithValue }) => {
    try {
      const response = await httpListUsers();
      if (response.status < 200 || response.status >= 300) {
        return rejectWithValue(data);
      }

      return response?.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

// Creating a thunk to create new user
export const createUser = createAsyncThunk(
  "user/registration",
  async (data, { rejectWithValue }) => {
    try {
      const response = await httpRegisterUser(data);
      if (response.status < 200 || response.status >= 300) {
        return rejectWithValue(data);
      }

      return response?.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

// Creating thunk to edit current user
export const editUser = createAsyncThunk(
  "user/edit",
  async (data, { rejectWithValue }) => {
    try {
      const response = await httpEditUser(data);
      if (response.status < 200 || response.status >= 300) {
        return rejectWithValue(data);
      }

      return response?.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

// Creating a thunk to delete user
export const deleteUser = createAsyncThunk(
  "user/delete",
  async (data, { rejectWithValue }) => {
    try {
      const response = await httpDeleteUser(data);
      if (response.status < 200 || response.status >= 300) {
        return rejectWithValue(data);
      }
      return response?.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
