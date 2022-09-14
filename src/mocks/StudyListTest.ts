interface StudyListInterface {
  id: number,
  search: {
    title: string,
    author: string,
  },
  status: 'Recruiting' | 'in progress' | 'finish',
  techs: String[],
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
    techs: ['react', 'javascript', 'typescript', 'jest', 'java', 'spring'],
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
    techs: ['react', 'javascript', 'typescript', 'jest'],
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
    techs: ['react', 'javascript', 'typescript', 'jest', 'java', 'spring'],
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
    techs: ['react', 'javascript', 'typescript', 'jest', 'java', 'spring'],
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
    techs: ['react', 'javascript', 'typescript', 'jest', 'java', 'spring'],
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
    techs: ['react', 'javascript', 'typescript', 'jest', 'java', 'spring'],
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
    techs: ['react', 'javascript', 'typescript', 'jest', 'java', 'spring'],
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
    techs: ['react', 'javascript', 'typescript', 'jest', 'java', 'spring'],
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
    techs: ['react', 'javascript', 'typescript', 'jest', 'java', 'spring'],
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
    techs: ['react', 'javascript', 'typescript', 'jest', 'java', 'spring'],
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
    techs: ['react', 'javascript', 'typescript', 'jest', 'java', 'spring'],
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
    techs: ['react', 'javascript', 'typescript', 'jest', 'java', 'spring'],
    location: '서울',
    deadline: '22-09-13'
  },
]

export type { StudyListInterface }

export { StudyListTest }