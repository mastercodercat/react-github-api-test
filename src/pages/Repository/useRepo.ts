import { useEffect } from "react";
import { useParams } from "react-router";

import { useAppDispatch, useAppSelector } from "store/hooks";
import { fetchRepoLanguages, fetchRepoReadme } from "store/repo";
import { RootState } from "store/store";

interface RepoParams {
  owner: string;
  repo: string;
}

const useRepo = () => {
  const { owner, repo } = useParams<RepoParams>();
  const dispatch = useAppDispatch();
  const loading = useAppSelector((state: RootState) => state.repo.loading);
  const readme = useAppSelector((state: RootState) => state.repo.readme);
  const languages = useAppSelector((state: RootState) => state.repo.languages);

  useEffect(() => {
    dispatch(fetchRepoReadme({ owner, repo }));
    dispatch(fetchRepoLanguages({ owner, repo }));
  }, [owner, repo, dispatch]);

  return {
    owner,
    repo,
    loading,
    readme,
    languages,
  };
};

export default useRepo;
