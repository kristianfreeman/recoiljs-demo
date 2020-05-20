import React, { useEffect } from "react";
import { useRecoilState, useRecoilValue } from "recoil";

import { repos as reposAtom, view as viewAtom } from "./atoms";
import Repo from "./Repo";

export default () => {
  const [repos, setRepos] = useRecoilState(reposAtom);
  const view = useRecoilValue(viewAtom);

  useEffect(() => {
    const getRepos = async () => {
      const url = `https://ghapi.huchen.dev/repositories?since=${view}`;
      const resp = await fetch(url);
      const body = await resp.json();
      setRepos(
        Object.assign({}, repos, {
          [view]: body,
        })
      );
    };

    getRepos();
  }, [repos, setRepos, view]);

  return repos[view] ? (
    <ul>
      {repos[view].map((repo) => (
        <Repo repo={repo} />
      ))}
    </ul>
  ) : (
    <span>No repos found</span>
  );
};
