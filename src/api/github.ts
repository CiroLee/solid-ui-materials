import request from '@/utils/request';
export interface GithubContent {
  name: string;
  path: string;
  sha: string;
  size: string;
  url: string;
  html_url: string;
  git_url: string;
  download_url: string;
  type: string;
  content: string;
  encoding: string;
  _links: {
    self: string;
    git: string;
    html: string;
  };
}
// fetch code from github code
export const fetchCodesFromGithub = async <T>(path: string) => {
  return await request<T>(`https://api.github.com/repos/CiroLee/solid-ui-materials/contents/src/${path}`);
};
