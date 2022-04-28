import axios from 'axios';

// Create an Axios Instance (the name that we want)

// REPLACED BY AXIOS INSTANCE
// const response = await fetch(`${GITHUB_URL}/search/users?${params}`, {
//   headers: {
//     Authorization: `token ${GITHUB_TOKEN}`,
//   },
// });

// const { items } = await response.json();

// Instead of dispatching the data we return the items
// dispatch({
//   type: 'GET_USERS',
//   payload: items,
// });

// return items;

const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;
console.log(process.env);

const github = axios.create({
  baseURL: GITHUB_URL,
  headers: {
    Authorization: `token ${GITHUB_TOKEN}`,
  },
});

export const searchUsers = async (text) => {
  // No need anymore the
  // setLoading();
  const params = new URLSearchParams({
    q: text,
  });

  const response = await github.get(`/search/users?${params}`);

  return response.data.items;
};

// REPLACED BY AXIOS INSTANCE
// Get user
// export const getUser = async (login) => {
//   const response = await fetch(`${GITHUB_URL}/users/${login}`, {
//     headers: {
//       Authorization: `token ${GITHUB_TOKEN}`,
//     },
//   });

// If no results match with search

//   if (response.status === 404) {
//     window.location = '/notfound';
//   } else {
//     const data = await response.json();

//     return data;
//   }
// };

// Get user repo
// export const getRepos = async (login) => {
// Sort Repos
//   const params = new URLSearchParams({
//     sort: 'created',
//     per_page: 10,
//   });

//   const response = await fetch(`${GITHUB_URL}/users/${login}/repos?${params}`, {
//     headers: {
//       Authorization: `token ${GITHUB_TOKEN}`,
//     },
//   });

//   const data = await response.json();

//   return data;
// };

// GET USER AND REPOS
export const getUserAndRepos = async (login) => {
  const [user, repos] = await Promise.all([
    github.get(`/users/${login}`),
    github.get(`/users/${login}/repos`),
  ]);

  return { user: user.data, repos: repos.data };
};
