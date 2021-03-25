const sleep = (n) => new Promise((resolve) => setTimeout(resolve, n));

// fake datas
const posts = [
  {
    id: 1,
    title: '리덕스 미들웨어',
    body: '직접 만들어보기',
  },
  {
    id: 2,
    title: 'redux-thunk',
    body: '비동기 작업 처리하기',
  },
  {
    id: 3,
    title: 'redux-saga',
    body: '나중에 배울 거예요',
  },
];

export const getPosts = async () => {
  await sleep(500);
  return posts;
};

export const getPostById = async (id) => {
  await sleep(500);
  return posts.find((post) => post.id === id);
};
