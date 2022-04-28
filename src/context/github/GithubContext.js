import { createContext, useReducer } from 'react';
import githubReducer from './GithubReducer';

const GithubContext = createContext();

// Passed in the GithubActions file
// const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;
// const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

export const GithubProvider = ({ children }) => {
  // REPLACED BU USEREDUCER
  // const [users, setUsers] = useState([]);
  // const [loading, setLoading] = useState(true);

  const initialState = {
    users: [],
    user: {},
    repos: [],
    loading: false,
  };

  const [state, dispatch] = useReducer(githubReducer, initialState);

  // Get initial users (testing purposes)
  // const fetchUsers = async () => {
  //   setLoading();
  //   const response = await fetch(`${GITHUB_URL}/users`, {
  //     headers: {
  //       Authorization: `token ${GITHUB_TOKEN}`,
  //     },
  //   });
  //   const data = await response.json();
  // REPLACE BY DISPATCH
  // setUsers(data);
  // setLoading(false);

  //   dispatch({
  //     type: 'GET_USERS',
  //     payload: data,
  //   });
  // };

  // Get Search Results

  // PASSED IN ACTIONS FILE
  // const searchUsers = async (text) => {
  //   setLoading();

  //   const params = new URLSearchParams({
  //     q: text,
  //   });

  //   const response = await fetch(`${GITHUB_URL}/search/users?${params}`, {
  //     headers: {
  //       Authorization: `token ${GITHUB_TOKEN}`,
  //     },
  //   });

  //   const { items } = await response.json();

  //   dispatch({
  //     type: 'GET_USERS',
  //     payload: items,
  //   });
  // };

  // Get single User

  // PASSED IN ACTIONS FILE
  // const getUser = async (login) => {
  //   setLoading();

  //   const response = await fetch(`${GITHUB_URL}/users/${login}`, {
  //     headers: {
  //       Authorization: `token ${GITHUB_TOKEN}`,
  //     },
  //   });

  //   // If no results match with search

  //   if (response.status === 404) {
  //     window.location = '/notfound';
  //   } else {
  //     const data = await response.json();

  //     dispatch({
  //       type: 'GET_USER',
  //       payload: data,
  //     });
  //   }
  // };

  // Get User Repos

  // PASSED IN ACTIONS FILE
  // const getRepos = async (login) => {
  //   setLoading();

  //   // Sort Repos
  //   const params = new URLSearchParams({
  //     sort: 'created',
  //     per_page: 10,
  //   });

  //   const response = await fetch(
  //     `${GITHUB_URL}/users/${login}/repos?${params}`,
  //     {
  //       headers: {
  //         Authorization: `token ${GITHUB_TOKEN}`,
  //       },
  //     }
  //   );

  //   const data = await response.json();

  //   dispatch({
  //     type: 'GET_REPOS',
  //     payload: data,
  //   });
  // };

  // Clear users from state (for clear button)
  // PASSED IN ACTIONS FILE
  // const clearUsers = () =>
  //   dispatch({
  //     type: 'CLEAR_USERS',
  //   });

  // Create setLoading function

  // PASSING FUNCTIONS TO ACTIONS NO NEED TO KEEP SETLOADING WE PASS IT
  // DIRECTLY FROM COMPONENT
  // const setLoading = () =>
  //   dispatch({
  //     type: 'SET_LOADING',
  //   });

  // What to return from that
  return (
    <GithubContext.Provider
      value={{
        // users: state.users,
        // user: state.user,
        // repos: state.repos,
        // loading: state.loading,
        // Reafactored by
        ...state,
        dispatch,
        // clearUsers,
        // getUsers,
        // GetRepos
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};

export default GithubContext;
