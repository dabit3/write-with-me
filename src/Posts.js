import React, { useState } from 'react'
import { css } from 'glamor'
import { Link } from 'react-router-dom'
import uuid from 'uuid/v4'
import { listPosts } from './graphql/queries'
import { graphql } from 'react-apollo'

const Posts = ({ posts, ...props }) => {
  const [isOpen, toggleModal] = useState(false)
  const [input, updateInput] = useState('')

  function toggle() { toggleModal(!isOpen) }
  function onChange(e) { updateInput(e.target.value) }

  function navigate() {
    if (input === '') return
    const id = uuid()
    const url = `/post/${id}/${input}`
    props.history.push(url)
  }

  return (
    <div>
      <div {...styles.headingContainer}>
        <h1 {...styles.heading}><span role='img' aria-label='write'>✍️</span> Write with Me</h1>
        <div {...styles.buttonContainer}>
          <div {...styles.button} onClick={toggle}>
            <p {...styles.buttonText}>New Post</p>
          </div>
        </div>
      </div>
      <div {...styles.body}>
        <div {...styles.postList}>
          {
            posts.map((p, i) => (
              <div key={i}>
                <Link to={`/post/${p.id}/${p.title}`} {...styles.link}>
                  <h1>{p.title}</h1>
                </Link>
              </div>
            ))
          }
        </div>
      </div>
      {
        isOpen && (
          <Modal
            onChange={onChange}
            input={input}
            navigate={navigate}
            toggle={toggle}
          />
        )
      }
    </div>
  )
}

const PostsWithData = graphql(listPosts, {
  options: {
    fetchPolicy: 'cache-and-network'
  },
  props: props => {
    return {
      posts: props.data.listPosts ? props.data.listPosts.items : [],
      data: props.data,
    }
  }
})(Posts)

export default PostsWithData

const Modal = ({ onChange, input, navigate, toggle }) => (
  <div {...styles.modalContainer}>
    <input
      placeholder="Post Title"
      {...styles.input}
      onChange={onChange}
      value={input}
      key="input"
    />
    <div {...css(styles.modalButton)} onClick={navigate}>
      <p {...styles.modalButtonText}>Create Post</p>
    </div>
    <div onClick={toggle} {...styles.modalButton} {...styles.cancelButton}>
      <p {...styles.modalButtonText}>Cancel</p>
    </div>
  </div>
)

const styles = {
  heading: css({
    color: 'white', 
    margin: 0
  }),
  headingContainer: css({
    height: 130,
    backgroundColor: 'black', 
    display: 'flex',
    alignItems: 'center',
    paddingLeft: 30
  }),
  buttonContainer: css({
    display: 'flex',
    justifyContent: 'flex-end',
    flex: 1
  }),
  button: css({
    padding: '8px 42px',
    backgroundColor: '#66e2d5',
    marginRight: 90,
    borderRadius: 3,
    cursor: 'pointer'
  }),
  buttonText: css({
    fontSize: 20,
    marginTop: -2,
    marginBottom: 0
  }),
  body: css({
    height: 'calc(100vh - 160px)',
    width: 'calc(100vw - 30px)',
    border: '15px solid #66e2d5',
    overflowY: 'scroll',
  }),
  postList: css({
    width: '900px',
    margin: '0 auto',
    padding: '0px 0px 20px',
  }),
  link: css({
    textDecoration: 'none',
    color: 'black'
  }),
  modalContainer: css({
    position: 'fixed',
    left: '50%',
    top: '50%',
    marginLeft: '-250px',
    marginTop: '-150px',
    height: 210,
    border: '4px solid black',
    width: 500,
    backgroundColor: 'white',
    boxShadow: '1px 1px 12px rgba(0, 0, 0, .15)',
    zIndex: 1000,
    padding: 20,
    borderRadius: 3
  }),
  input: css({
    height: 50,
    width: 300,
    fontSize: 22,
    outline: 'none',
    border: 'none',
    borderBottom: '3px solid #66e2d5',
    marginBottom: 15
  }),
  modalButton: css({
    backgroundColor: '#66e2d5',
    padding: '14px',
    
    cursor: 'pointer',
    width: 200,
    marginTop: 10,
  }),
  modalButtonText: css({
    textAlign: 'center',
    fontSize: 20,
    margin: '2px 0px'
  }),
  cancelButton: css({
    backgroundColor: '#ededed'
  })
}