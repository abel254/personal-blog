import React from 'react'
import { Col } from 'react-bootstrap'
import { BlogComponentProps } from '../../../propsTypes/Blog.type'
import './MainBlogComponent.css'
import {CiMenuKebab} from 'react-icons/ci'
import { Link } from 'react-router-dom'
import { useBlogsContext } from '../../../context/BlogsContext'


function MainBlogComponent({id, date, time, title, introone, image}: BlogComponentProps) {

    const {addBlog} = useBlogsContext()

    const newDescription = introone.slice(0, 90)

  return (
      <Col sm={12} md={6} lg={4} className='mb-4'>
       <div className="blog">
        <button onClick={()=> addBlog(id)}>
        <Link to={'/blogs'} className='links'>
       <div className="blog-image">
            <img src={image} alt="blog image" />
        </div>
        <div className="blog-info">
            <div className="top">
                <div className="date-time d-flex mb-4">
                    <p className="date me-1">{date}</p>
                    <span>.</span>
                    <p className="time ms-1">{time} mins</p>
                </div>
                <CiMenuKebab/>
            </div>
            <div className="info-content">
                <h4>{title}</h4>
                <p className="description">{newDescription}...</p>
            </div>
        </div>
       </Link>
        </button>
       </div>
      </Col>

  )
}

export default MainBlogComponent
