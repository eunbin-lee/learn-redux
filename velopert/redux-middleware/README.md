## Learn redux middleware

### [Set redux]

1.  `yarn add redux react-redux`
2.  root > src > modules

    - action type

    ```javascript
    const INCREASE = 'INCREASE';
    ```

    - action creator

    ```javascript
    export const increase = () => ({ type: INCREASE });
    ```

    - initial state

    ```javascript
    const initialState = 0;
    ```

    - reducer

    ```javascript
    export default function counter(state = initialState, action) {
      switch (action.type) {
        case INCREASE:
          return state + 1;
        default:
          return state;
      }
    }
    ```

    - combineReducers (rootReducer)

    ```javascript
    import { combineReducers } from 'redux';
    import counter from './counter';

    const rootReducer = combineReducers({ counter, posts });

    export default rootReducer;
    ```

3.  root > src > components
    - presentational components
4.  root > src > container

    - container components

      - useSelector
      - useDispatch

      ```javascript
      import Counter from '../components/Counter';
      import { useSelector, useDispatch } from 'react-redux';
      import { increase } from '../modules/counter';

      function CounterContainer() {
        const number = useSelector((state) => state.counter);
        const dispatch = useDispatch();

        const onIncrease = () => {
          dispatch(increase());
        };
        return <Counter number={number} onIncrease={onIncrease} />;
      }

      export default CounterContainer;
      ```

5.  root > index.js

    - Provider
    - createStore
    - rootReducer

    ```javascript
    import { Provider } from 'react-redux';
    import { createStore } from 'redux';
    import rootReducer from './modules';
    import myLogger from './middlewares/myLogger';

    const store = createStore(rootReducer);

    ReactDOM.render(
            <Provider store={store}>
                <App />
            </Provider>
        document.getElementById('root'),
    );
    ```

<br>

### [Set redux middleware]

1. root > src > middlewares

```javascript
const middleware = (store) => (next) => (action) => {
  // your work
  console.log(store.getState()); // check store status
};
```

2. root > index.js

   - applyMiddleware

   ```javascript
   import { Provider } from 'react-redux';
   import { createStore, applyMiddleware } from 'redux';
   import rootReducer from './modules';
   import myLogger from './middlewares/myLogger';

   const store = createStore(rootReducer, applyMiddleware(myLogger));
   ```

<br>

### [Set redux-logger]

1.  `yarn add redux-logger`
2.  root > index.js

    - logger

    ```javascript
    import logger from 'redux-logger';
    ```

      <br>

### [Use redux dev tools on browser]

1.  `yarn add redux-devtools-extension`
2.  root > index.js

    - composeWithDevTools

    ```javascript
    import { composeWithDevTools } from 'redux-devtools-extension';
    ```

    <br>

### [Set redux-thunk]

1.  `yarn add redux-thunk`
2.  root > index.js

    - ReduxThunk

    ```javascript
    import ReduxThunk from 'redux-thunk';
    ```

3.  root > src > modules

    - thunk creator

    ```javascript
    export const increaseAsync = () => (dispatch) => {
      setTimeout(() => {
        dispatch(increase());
      }, 1000);
    };
    ```

4.  root > src > containers

    - container components

      - useSelector
      - useDispatch

      ```javascript
      import Counter from '../components/Counter';
      import { useSelector, useDispatch } from 'react-redux';
      import { increaseAsync } from '../modules/counter';

      function CounterContainer() {
        const number = useSelector((state) => state.counter);
        const dispatch = useDispatch();

        const onIncrease = () => {
          dispatch(increaseAsync());
        };

        return <Counter number={number} onIncrease={onIncrease} />;
      }

      export default CounterContainer;
      ```

<br>

### [Use Promise with redux-thunk]

1. root > src > api

   - request API

   ```javascript
   const sleep = (n) => new Promise((resolve) => setTimeout(resolve, n));
   ```

2. root > src > modules

   - request, success, error actions per request

   ```javascript
   const GET_POST = 'GET_POST';
   const GET_POST_SUCCESS = 'GET_POST_SUCCESS';
   const GET_POST_ERROR = 'GET_POST_ERROR';
   ```

   - thunk creator

   ```javascript
   export const getPost = (id) => async (dispatch) => {
     // 요청이 시작됨
     dispatch({ type: GET_POST });

     // API를 호출
     try {
       const post = await postsAPI.getPostById(id);

       // 성공
       dispatch({
         type: GET_POST_SUCCESS,
         post,
       });
     } catch (e) {
       // 실패
       dispatch({
         type: GET_POST_ERROR,
         error: e,
       });
     }
   };
   ```

   - initial state

   ```javascript
   const initialState = {
     post: reducerUtils.initial(),
   };
   ```

   - reducer

   ```javascript
   export default function post(state = initialState, action) {
     switch (action.type) {
       case GET_POST:
         return {
           ...state,
           post: reducerUtils.loading(),
         };
       case GET_POST_SUCCESS:
         return {
           ...state,
           post: reducerUtils.success(action.post),
         };
       case GET_POST_ERROR:
         return {
           ...state,
           post: reducerUtils.error(action.error),
         };
       default:
         return state;
     }
   }
   ```

   - combineReducers (rootReducer)

   ```javascript
   import { combineReducers } from 'redux';
   import counter from './counter';
   import posts from './posts';

   const rootReducer = combineReducers({ counter, posts });

   export default rootReducer;
   ```

3. root > src > components
   - presentational components
4. root > src > container

   - container components

     - useSelector
     - useDispatch

       ```javascript
       import React, { useEffect } from 'react';
       import { useSelector, useDispatch } from 'react-redux';
       import Post from '../components/Post';
       import { getPost } from '../modules/posts';

       function PostContainer({ postId }) {
         const { data, loading, error } = useSelector(
           (state) => state.posts.post,
         );
         const dispatch = useDispatch();

         useEffect(() => {
           dispatch(getPost(postId));
         }, [postId, dispatch]);

         if (loading) return <div>로딩 중...</div>;
         if (error) return <div>에러 발생!</div>;
         if (!data) return null;

         return <Post />;
       }

       export default PostContainer;
       ```

5. root > index.js

   - Provider
   - createStore
   - rootReducer

   ```javascript
   import { Provider } from 'react-redux';
   import { createStore, applyMiddleware } from 'redux';
   import rootReducer from './modules';

   import logger from 'redux-logger';
   import { composeWithDevTools } from 'redux-devtools-extension';
   import ReduxThunk from 'redux-thunk';

   const store = createStore(
     rootReducer,
     composeWithDevTools(applyMiddleware(ReduxThunk, logger)),
   );

   ReactDOM.render(
     <Provider store={store}>
       <App />
     </Provider>,
     document.getElementById('root'),
   );
   ```

<br>

### [Set react-router]

1. `yarn add react-router-dom`
2. root > index.js

   - BrowserRouter

   ```javascript
   import { BrowserRouter } from 'react-router-dom';

   ReactDOM.render(
     <BrowserRouter>
       <Provider store={store}>
         <App />
       </Provider>
     </BrowserRouter>,
     document.getElementById('root'),
   );
   ```

3. root > App.js

   - route

   ```javascript
   import { Route } from 'react-router-dom';

   function App() {
     return (
       <>
         <Route path="/" component={PostListPage} exact />
         <Route path="/:id" component={PostPage} />
       </>
     );
   }

   export default App;
   ```
