import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { marked } from "marked";

import { RepoState, RepoQuery } from "./types";
import api from "../../services/api";

const initialState: RepoState = {
  loading: false,
  readme: "",
  languages: [],
  repos: [],
};

export const fetchRepositories = createAsyncThunk(
  "quiz/fetchRepositories",
  async (username: string) => {
    const response = await api.fetchRepos(username);

    return response;
  }
);

export const fetchRepoReadme = createAsyncThunk(
  "quiz/fetchRepoReadme",
  async ({ owner, repo }: RepoQuery) => {
    const response = await api.fetchRepoReadme({ owner, repo });

    return response;
  }
);

export const fetchRepoLanguages = createAsyncThunk(
  "quiz/fetchRepoLanguages",
  async ({ owner, repo }: RepoQuery) => {
    const response = await api.fetchRepoLanguages({ owner, repo });

    return response;
  }
);

export const quizSlice = createSlice({
  name: "quiz",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchRepositories.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(fetchRepositories.fulfilled, (state, action) => {
        state.loading = false;
        state.repos = action.payload;
      })
      .addCase(fetchRepositories.rejected, (state, action) => {
        state.loading = false;
      })
      .addCase(fetchRepoReadme.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(fetchRepoReadme.fulfilled, (state, action) => {
        state.loading = false;
        state.readme = marked(atob(action.payload.content));
      })
      .addCase(fetchRepoReadme.rejected, (state, action) => {
        state.loading = false;
      })
      .addCase(fetchRepoLanguages.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(fetchRepoLanguages.fulfilled, (state, action) => {
        state.loading = false;
        state.languages = action.payload;
      })
      .addCase(fetchRepoLanguages.rejected, (state, action) => {
        state.loading = false;
      });
  },
});

export default quizSlice.reducer;
