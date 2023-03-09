import React from 'react'
import { Col } from 'react-bootstrap'
import { BlogComponentProps } from '../../../props/Blog.type'
import './MainBlogComponent.css'
import {CiMenuKebab} from 'react-icons/ci'


function MainBlogComponent({date, time, title, description, image}: BlogComponentProps) {
  return (
      <Col sm={12} md={6} lg={4} className='mb-4'>
       <div className="blog">
       <div className="blog-image">
            <img src={image} alt="blog image" />
        </div>
        <div className="blog-info">
            <div className="top">
                <div className="date-time d-flex mb-4">
                    <p className="date me-1">{date}</p>
                    <span>.</span>
                    <p className="time ms-1">{time}</p>
                </div>
                <CiMenuKebab/>
            </div>
            <div className="info-content">
                <h4>{title}</h4>
                <p className="description">{description}...</p>
            </div>
        </div>
       </div>
      </Col>

  )
}

export default MainBlogComponent
