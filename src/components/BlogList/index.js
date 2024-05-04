// Write your JS code here

import './index.css'

import {Component} from 'react'

import Loader from 'react-loader-spinner'

import BlogItem from '../BlogItem'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

class BlogList extends Component {
  state = {
    BlogsList: [],
    Loading: true,
  }

  componentDidMount() {
    this.getBlogList()
  }

  getBlogList = async () => {
    const response = await fetch('https://apis.ccbp.in/blogs')
    const data = await response.json()

    const UpdateData = data.map(eachItem => ({
      id: eachItem.id,
      title: eachItem.title,
      imageUrl: eachItem.image_url,
      avatarUrl: eachItem.avatar_url,
      author: eachItem.author,
      topic: eachItem.topic,
    }))

    this.setState({BlogsList: UpdateData, Loading: false})
  }

  render() {
    const {BlogsList, Loading} = this.state

    return (
      <div className="BlogList-Container">
        {Loading ? (
          <div data-testid="loader">
            <Loader type="TailSpin" color="#00bfff" height={50} width={50} />
          </div>
        ) : (
          <ul>
            {BlogsList.map(eachBlog => (
              <BlogItem details={eachBlog} key={eachBlog.id} />
            ))}
          </ul>
        )}
      </div>
    )
  }
}

export default BlogList
