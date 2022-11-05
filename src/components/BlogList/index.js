// Write your JS code here
import BlogItem from '../BlogItem'

import './index.css'

const BlogList = props => {
  const {blogsList} = props

  return (
    <div className="blogs-list">
      {blogsList.map(eachBlog => (
        <BlogItem blogItem={eachBlog} key={eachBlog.id} />
      ))}
    </div>
  )
}

export default BlogList
