import { RootState } from "store/store";

export const selectUnforkedRepos = (state: RootState) =>
  state.repo.repos.filter((repo) => !repo.fork);

export const selectRepository = (state: RootState) => (id: string) =>
  state.repo.repos.find((repo) => repo.id === id);
