import { createSlice } from "@reduxjs/toolkit";

export const initialState = {};

export const selectUser = ({ user }) => user;

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder
      .addMatcher(
        (action) => /\/(new|all)\/fulfilled$/.test(action.type),
        (state, { payload }) => {
          return {
            users: [...payload],
            requestState: "fulfilled",
            error: undefined,
          };
        }
      )

      .addMatcher(
        (action) => /\/(delete)\/fulfilled$/.test(action.type),
        (state, { payload }) => {
          return {
            users: state.users.filter((user) => user?.id !== payload?.user?.id),
            requestState: "fulfilled",
            error: undefined,
          };
        }
      )

      .addMatcher(
        (action) => action.type.endsWith("/pending"),
        (state) => {
          state.requestState = "pending";
        }
      )
      .addMatcher(
        (action) => action.type.endsWith("/rejected"),
        (state, { payload }) => {
          state.error = payload?.error;
          state.requestState = "rejected";
        }
      );
  },
});

export const { actions, reducer } = userSlice;
