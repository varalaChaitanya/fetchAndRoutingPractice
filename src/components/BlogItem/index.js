// Write your JS code here

import {Link} from 'react-router-dom'

const BlogItem = props => {
  const {details} = props

  const {id, title, author, avatarUrl, imageUrl, topic} = details

  return (
    <li>
      <Link to={`/blogs/:${id}`} className="BlogItem">
        <div className="BlogContainer">
          <img src={imageUrl} alt={author} className="course" />

          <p className="topic">{topic}</p>

          <h1 className="title">{title}</h1>

          <div className="Description-container">
            <div className="avatar-name">
              <img src={avatarUrl} alt={title} className="avatar" />
              <p className="author-name">{author}</p>
            </div>
          </div>
        </div>
      </Link>
    </li>
  )
}

export default BlogItem
