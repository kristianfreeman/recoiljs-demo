import React from "react";

export default ({ repo }) => {
  return (
    <div className="Box-row d-flex flex-items-center">
      <div className="flex-auto">
        <svg
          height="16"
          class="octicon octicon-repo mr-2 text-gray"
          mr="1"
          color="gray"
          viewBox="0 0 12 16"
          version="1.1"
          width="12"
          aria-hidden="true"
        >
          <path
            fill-rule="evenodd"
            d="M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z"
          ></path>
        </svg>
        <a href={repo.url}>
          <strong>
            {repo.author} / {repo.name}
          </strong>
        </a>

        <div className="py-2 text-small text-gray-light">
          {repo.description}
        </div>

        <div className="text-small text-gray-light d-flex">
          <div className="mr-2">
            <svg
              height="16"
              class="octicon octicon-star mr-1"
              aria-label="star"
              viewBox="0 0 14 16"
              version="1.1"
              width="14"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                d="M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74L14 6z"
              ></path>
            </svg>
            {repo.stars} stars
          </div>

          <div>
            <svg
              height="16"
              class="octicon octicon-repo-forked mr-1"
              aria-label="fork"
              viewBox="0 0 10 16"
              version="1.1"
              width="10"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                d="M8 1a1.993 1.993 0 00-1 3.72V6L5 8 3 6V4.72A1.993 1.993 0 002 1a1.993 1.993 0 00-1 3.72V6.5l3 3v1.78A1.993 1.993 0 005 15a1.993 1.993 0 001-3.72V9.5l3-3V4.72A1.993 1.993 0 008 1zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3 10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3-10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"
              ></path>
            </svg>
            {repo.forks} forks
          </div>
        </div>
      </div>
    </div>
  );
};
