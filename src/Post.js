import React, { useState } from 'react'
import { css } from 'glamor'
import Container from './Container'
import { Link } from 'react-router-dom'

const ReactMarkdown = require('react-markdown')
const input = `# This is a header\n\nAnd this is a paragraph\n\n
# This is a header\n\nAnd this is a paragraph
# This is a header\n\nAnd this is a paragraph
# This is a header\n\nAnd this is a paragraph
# This is a header\n\nAnd this is a paragraph
# This is a header\n\nAnd this is a paragraph
# This is a header\n\nAnd this is a paragraph
# This is a header\n\nAnd this is a paragraph
`

const Post = () => {
  const [isEditing, updateIsEditing] = useState(false)
  const [md, updateMd] = useState(input)
  const [title, updateTitle] = useState('Post title')

  function toggleMarkdown() {
    updateIsEditing(!isEditing)
  }

  function updateMarkdown(e) { updateMd(e.target.value) }

  function updatePostTitle (e) { updateTitle(e.target.value) }

  return (
    
    <Container>
      <div {...styles.header}>
        <Link to='/' {...styles.link}>
          <p {...styles.heading}>✍️ Write with me</p>
        </Link>
      </div>
      <div {...styles.container}>
        <div {...styles.body}>
          <div {...styles.toggleButton}>
            <p {...styles.fancy} {...styles.toggleButtonText} onClick={toggleMarkdown}>
              {isEditing ? 'Save' : 'Edit'}
            </p>
          </div>
          { !isEditing && <h1 {...styles.postTitle}>{title}</h1>}
          { !isEditing && <ReactMarkdown source={md} /> }
          { isEditing && (
            <input
              value={title}
              onChange={updatePostTitle}
              {...styles.input}
              placeholder='Post Title'
            />
          )}
          { isEditing && <textarea {...styles.textarea} value={md} onChange={updateMarkdown} /> }
        </div>
      </div>
    </Container>
  )
}

const styles = {
  header: css({
    height: 70,
    boxShadow: '0px 0px 12px rgba(0, 0, 0, .2)',
    display: 'flex',
    alignItems: 'center',
    paddingLeft: 30,
  }),
  link: css({
    textDecoration: 'none',
    color: 'black'
  }),
  heading: css({
    margin: 0,
    fontFamily: "Francois One, sans-serif",
    fontSize: 28
  }),
  toggleButton: css({
    width: 80,
    cursor: 'pointer',
    backgroundColor: '#66e2d5',
    border: '2px solid black',
  }),
  toggleButtonText: css({
    textAlign: 'center',
    fontSize: 18,
    margin: '2px 0px'
  }),
  fancy: css({
    fontFamily: "Francois One, sans-serif"
  }),
  input: css({
    outline: 'none',
    border: 'none',
    fontFamily: "ZCOOL XiaoWei, serif",
    fontSize: 38,
    marginTop: 30,
    marginBottom: 8,
    color: 'rgba(0, 0, 0, .35)',
    width: '900px'
  }),
  textarea: css({
    width: 900,
    marginTop: 10,
    border: '3px solid black',
    minHeight: 'calc(100vh - 350px)',
    outline: 'none',
    fontSize: 18
  }),
  postTitle: css({
    fontFamily: "ZCOOL XiaoWei, serif",
    fontSize: 66
  }),
  container: css({
    overflowY: 'scroll',
    maxHeight: 'calc(100vh - 98px)',
  }),
  body: css({
    padding: '50px 0px 0px',
    width: '900px',
    margin: '0 auto',
  })
}

export default Post;
