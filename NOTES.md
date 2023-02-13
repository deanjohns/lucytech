Improvements List

- The ProductList component has been converted from class component to a functional component and named it as ArticleList.

- The ArticleCard component was moved to a different functional component because it was inside the ProductList component which should be avoided. The component composision is always good with different files.

- React hooks (useEffect and useState in this case) are used to interact with states and lifecycles.

- A proper API client (Axios in thi case) is integrated to interact with the API.

- Dynamic child components were splitted out from the render method and has been taken into different functions.

\*Special Note

- The provided API returns 403 (Forbidden) with the following message
  "We've detected suspicious activity from your connection and have therefore temporarily blocked access to this website."
  So, I couldn't get the exact output from the API. All the above improvements are done based on the existing code.
