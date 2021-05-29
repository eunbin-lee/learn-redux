## Learn redux middleware

### [Set redux]

1.  `yarn add redux react-redux`
2.  src > modules

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

3.  src > components
    - presentational components
4.  src > container

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

5.  index.js

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

1. src > middlewares

```javascript
const middleware = (store) => (next) => (action) => {
  // your work
  console.log(store.getState()); // check store status
};
```

2. index.js

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
2.  index.js

    - logger

    ```javascript
    import logger from 'redux-logger';
    ```

      <br>

### [Use redux dev tools on browser]

1.  `yarn add redux-devtools-extension`
2.  index.js

    - composeWithDevTools

    ```javascript
    import { composeWithDevTools } from 'redux-devtools-extension';
    ```

    <br>

### [Set redux-thunk]

1.  `yarn add redux-thunk`
2.  index.js

    - ReduxThunk

    ```javascript
    import ReduxThunk from 'redux-thunk';
    ```

3.  src > modules

    - thunk creator

    ```javascript
    export const increaseAsync = () => (dispatch) => {
      setTimeout(() => {
        dispatch(increase());
      }, 1000);
    };
    ```

4.  src > containers

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

1. src > api

   - request API

   ```javascript
   const sleep = (n) => new Promise((resolve) => setTimeout(resolve, n));
   ```

2. src > modules

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

3. src > components
   - presentational components
4. src > container

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

5. index.js

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
2. index.js

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

3. App.js

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

<br>

### [json-server]

1. data.json 에 데이터 등록

2. 서버 여는 방법

   - `npx json-server ./data.json --port 4000`

3. 데이터 호출

   - src > api > posts.js

   ```javascript
   import axios from 'axios';

   export const getPosts = async () => {
     const response = await axios.get('http://localhost:4000/posts');
     return response.data;
   };
   ```

<br>

### [CORS와 Webpack DevServer Proxy]

브라우저에서 보여주고 있는 도메인과 호출하고 있는 api의 도메인이 다르면 <br>
브라우저에서 해당 api에 대한 결과물을 조회할 수 없기 때문에 <br>
CORS(Cross-origin resource sharing)를 따로 설정해줘야 하지만 <br>
json-server에서는 어디서 오는 호출이든 허용하겠다고 이미 설정돼있어서 <br>
추가적인 설정없이 api를 사용할 수 있다 <br>

웹팩 개발서버의 프록시 설정은 원래 웹팩 설정을 통해 적용을 하지만 <br>
CRA로 만들어진 프로젝트에서는 package.json에서 쉽게 설정이 가능하다

1. proxy 서버 설정

   - package.json

   ```javascript
   "proxy": "http://localhost:4000"
   ```

2. 도메인 수정

   - src > api > posts.js

   ```javascript
   import axios from 'axios';

   export const getPosts = async () => {
     const response = await axios.get('/posts');
     return response.data;
   };
   ```

<br>

### [Redux-saga]

Generator에 기반한 미들웨어 <br>
액션을 모니터링하고 있다가 특정 액션이 발생하면 이에 따라 특정 작업을 하는 방식 <br>
(redux-thunk: 함수를 dispatch할 수 있게 해주는 미들웨어)

- 비동기 작업을 진행할 때 기존 요청을 취소할 수 있다
- 특정 액션이 발생했을 때 이에 따라 다른 액션을 디스패치 하거나 자바스크립트 코드를 실행할 수 있다
- 웹소켓을 사용하는 경우 Channel 이라는 기능을 사용하여 더욱 효율적으로 코드를 관리할 수 있다
- 비동기 작업이 실패했을 때 재시도하는 기능을 구현할 수 있다

#### Generator

- 함수의 흐름을 특정 구간에 멈춰놓았다가(`yield`) 다시 실행할 수 있다((`generator.next()`)
- `yield` 를 통해 결과값을 여러 번 내보낼 수 있다

<br>

### [Set redux-saga]

1. `yarn add redux-saga`

2. src > modules > counter.js

   ```javascript
   // effects: 리덕스 사가 미들웨어가 수행하도록 작업을 명령하는 것
   import {
     delay,
     put,
     takeEvery,
     takeLastest,
     takeLeading,
   } from 'redux-saga/effects';

   function* increaseSaga() {
     yield delay(1000); // 1초를 기다려라
     yield put(increase()); // increase를 호출해서 액션 객체를 만들고 그 액션을 dispatch하도록 리덕스 사가 미들웨어에게 명령 (dispatch와 비슷)
   }

   export function* counterSaga() {
     yield takeEvery(INCREASE_ASYNC, increaseSaga); // INCREASE_ASYNC 액션이 dispatch될 때마다 increaseSaga를 실행시킴
     yield takeLastest(INCREASE_ASYNC, increaseSaga); // 1초를 기다리고 있는 도중에 새로운 게 들어오면 기존에 있던건 무시하고 가장 마지막으로 들어온 INCREASE_ASYNC만 처리
     yield takeLastest(INCREASE_ASYNC, increaseSaga); // 가장 처음에 들어온 INCREASE_ASYNC 처리할 때까지 다른 작업은 실행하지 않음, 처음 INCREASE_ASYNC가 처리되면 새로운 작업 실행
   }
   ```

3. src > modules > index.js

   ```javascript
   import { all } from 'redux-saga/effects';

   export function* rootSaga() {
     yield all([counterSaga()]);
   }
   ```

4. src > index.js

   ```javascript
   import { createStore, applyMiddleware } from 'redux';
   import rootReducer, { rootSaga } from './modules';
   import createSagaMiddleware from 'redux-saga';

   const sagaMiddleware = createSagaMiddleware();

   const store = createStore(
     rootReducer,
     composeWithDevTools(applyMiddleware(sagaMiddleware)),
   );

   sagaMiddleware.run(rootSaga);
   ```
