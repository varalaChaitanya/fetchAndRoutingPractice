// Write your JS code here

import {Component} from 'react'

import {Loader} from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import './index.css'

class BlogItemDetails extends Component {
  state = {
    BlogItemDetail: {},
    Loading: true,
  }

  componentDidMount() {
    this.getBlogItemDetails()
  }

  getBlogItemDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    const response = await fetch(`https://apis.ccbp.in/blogs/${id}`)
    const data = await response.json()

    const UpdateData = {
      id: data.id,
      title: data.title,
      imageUrl: data.image_url,
      avatarUrl: data.avatar_url,
      author: data.author,
      content: data.content,
    }

    this.setState({BlogItemDetail: UpdateData, Loading: false})
  }

  renderBlogDetails = () => {
    const {BlogItemDetail} = this.state

    const {title, imageUrl, avatarUrl, content, author} = BlogItemDetail

    return (
      <div className="BlogsDetail">
        <h1 className="title">{title}</h1>

        <div>
          <div className="avatar-Container">
            <img src={avatarUrl} alt={author} className="avatar" />
            <p className="author">{author}</p>
          </div>

          <img src={imageUrl} alt={title} className="imageUrl" />

          <p className="Contant">{content}</p>
        </div>
      </div>
    )
  }

  render() {
    const {Loading} = this.state

    return (
      <div className="BlogItemContainer">
        {Loading ? (
          <div data-testid="loader">
            <Loader type="TailSpin" color="#00bfff" height={50} width={50} />
          </div>
        ) : (
          this.renderBlogDetails()
        )}
      </div>
    )
  }
}

export default BlogItemDetails
