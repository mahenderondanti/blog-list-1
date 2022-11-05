// Write your JS code here
import './index.css'

const BlogItem = props => {
  const {blogItem} = props
  const {title, description, publishedDate} = blogItem

  return (
    <div className="blog-item">
      <div>
        <h1 className="title">{title}</h1>
        <p className="post-description">{description}</p>
      </div>
      <p className="publish-date">{publishedDate}</p>
    </div>
  )
}
export default BlogItem
