import { RepoQuery } from "store/repo/types";
import { toast } from "react-toastify";

const baseUrl = "https://api.github.com";

const request = async (url: string) => {
  const response = await fetch(`${baseUrl}/${url}`, {
    method: "GET",
    headers: {
      authorization: `token ${process.env.REACT_APP_ACCESS_TOKEN}`,
    },
  });

  if (response.ok) return response.json();

  const data = await response.json();
  toast.error(data.message);

  throw new Error(data.message);
};

const api = {
  fetchRepos: (username: string) => request(`users/${username}/repos`),
  fetchRepoReadme: ({ owner, repo }: RepoQuery) =>
    request(`repos/${owner}/${repo}/readme`),
  fetchRepoLanguages: ({ owner, repo }: RepoQuery) =>
    request(`repos/${owner}/${repo}/languages`),
};

export default api;
