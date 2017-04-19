import { find, filter } from 'lodash'
import users from '../data/users'
import articles from '../data/articles'

export default {
  User: {
    articles(user) {
      return filter(articles, { user_id: user.id })
    }
  },
  Article: {
    user(article) {
      return find(users, { id: article.user_id })
    }
  },
  Query: {
    article(_, { id }) {
      return find(articles, { id })
    },
    articles() {
      return articles
    },
    user(_, { id }) {
      return find(users, { id })
    },
    users() {
      return users
    }
  }
}
