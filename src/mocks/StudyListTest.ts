interface StudyListInterface {
  id: number,
  search: {
    title: string,
    author: string,
  },
  status: 'Recruiting' | 'in progress' | 'finish',
  techs: Number[],
  location: string,
  deadline:string
}

const StudyListTest:StudyListInterface[] = [
  {
    id:1,
    search: {
      title: 'test',
      author: 'testAuthor',
    },
    status: 'Recruiting',
    techs: [1,2,12,15,16],
    location: '서울',
    deadline: '22-09-13'

  },
  {
    id:2,
    search: {
      title: 'test',
      author: 'testAuthor',
    },
    status: 'in progress',
    techs: [1,2,3],
    location: '경기도',
    deadline: '22-09-13'
  },
  {
    id:3,
    search: {
      title: 'test',
      author: 'testAuthor',
    },
    status: 'finish',
    techs: [1],
    location: '대구',
    deadline: '22-09-13'
  },
  {
    id:4,
    search: {
      title: 'test',
      author: 'testAuthor',
    },
    status: 'Recruiting',
    techs: [1,2,3],
    location: '부산',
    deadline: '22-09-13'
  },
  {
    id:5,
    search: {
      title: 'test',
      author: 'testAuthor',
    },
    status: 'Recruiting',
    techs: [2],
    location: '서울',
    deadline: '22-09-13'
  },
  {
    id:6,
    search: {
      title: 'test',
      author: 'testAuthor',
    },
    status: 'Recruiting',
    techs: [2],
    location: '서울',
    deadline: '22-09-13'
  },
  {
    id:7,
    search: {
      title: 'test',
      author: 'testAuthor',
    },
    status: 'Recruiting',
    techs: [2],
    location: '서울',
    deadline: '22-09-13'
  },
  {
    id:8,
    search: {
      title: 'test',
      author: 'testAuthor',
    },
    status: 'Recruiting',
    techs: [2],
    location: '서울',
    deadline: '22-09-13'
  },
  {
    id:9,
    search: {
      title: 'test',
      author: 'testAuthor',
    },
    status: 'Recruiting',
    techs: [2],
    location: '서울',
    deadline: '22-09-13'
  },
  {
    id:10,
    search: {
      title: 'test',
      author: 'testAuthor',
    },
    status: 'Recruiting',
    techs: [2],
    location: '서울',
    deadline: '22-09-13'
  },
  {
    id:11,
    search: {
      title: 'test',
      author: 'testAuthor',
    },
    status: 'Recruiting',
    techs: [2],
    location: '서울',
    deadline: '22-09-13'
  },
  {
    id:12,
    search: {
      title: 'test',
      author: 'testAuthor',
    },
    status: 'Recruiting',
    techs: [2],
    location: '서울',
    deadline: '22-09-13'
  },
]

export type { StudyListInterface }

export { StudyListTest }