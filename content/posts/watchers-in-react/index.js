import coverImage from './cover.jpg?sizes[]=400&sizes[]=600&sizes[]=800&sizes[]=1000'
import { createImageObject } from '../../../src/utils/image'

export default {
  title: 'Watchers in React',
  excerpt:
    'In this blog post, we will try to find out how to improve the current API of React and create a custom hook that will help us "watch" for state changes.',
  date: '2021-01-16 20:00:00',
  coverImage: createImageObject(coverImage),
  githubIssueId: 3,
}
