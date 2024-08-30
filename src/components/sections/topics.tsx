import TopicsFilter from '../topics-filter'
import { apiUrl } from '@/lib/site-config'

async function getTopics() {
  const response = await fetch(`${apiUrl}/posts/topics`)
  const topics = await response.json()
  return topics.data ? topics.data : []
}

export default async function Topics() {
  const topics = await getTopics()

  return <TopicsFilter topics={topics} />
}
