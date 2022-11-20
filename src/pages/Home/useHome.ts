import { useHistory } from "react-router";
import { useAppDispatch, useAppSelector } from "store/hooks";
import { fetchRepositories } from "store/repo";
import { RootState } from "store/store";
import { selectUnforkedRepos } from "store/repo/selectors";
import { Repo } from "store/repo/types";

const useHome = () => {
  const dispatch = useAppDispatch();
  const loading = useAppSelector((state: RootState) => state.repo.loading);
  const repos = useAppSelector(selectUnforkedRepos);
  const history = useHistory();

  const onSearch = async (search: string) => {
    await dispatch(fetchRepositories(search));
  };

  const onRepo = (repo: Repo) => {
    history.push(`/${repo.owner.login}/${repo.name}`);
  };

  return {
    loading,
    repos,
    onSearch,
    onRepo,
  };
};

export default useHome;
