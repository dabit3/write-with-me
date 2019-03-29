import React, { useState } from 'react';
import { css } from 'glamor'

import Router from './Router'

const ReactMarkdown = require('react-markdown')
const input = '# This is a header\n\nAnd this is a paragraph'

const App = () => {
  const [isEditing, updateIsEditing] = useState(false)
  const [md, updateMd] = useState(input)

  function toggleMarkdown() {
    updateIsEditing(!isEditing)
  }

  function updateMarkdown(e) {
    updateMd(e.target.value)
  }

  return (
    
    <div {...styles.wrapper}>
      <div {...styles.container}>
        <div {...styles.toggleButton}>
          <p {...styles.fancy} {...styles.toggleButtonText} onClick={toggleMarkdown}>
            {isEditing ? 'Save' : 'Edit'}
          </p>
        </div>
        { !isEditing && <ReactMarkdown source={md} /> }
        { isEditing && <input {...styles.input} placeholder='Post Title' />}
        { isEditing && <textarea {...styles.textarea} value={md} onChange={updateMarkdown} /> }
      </div>
    </div>
  );
}

const styles = {
  wrapper: css({
    border: '14px solid #66e2d5',
    height: 'calc(100vh - 28px)',
    width: 'calc(100vw - 28px)'
  }),
  container: css({
    padding: '50px 0px 0px',
    width: '900px',
    margin: '0 auto'
  }),
  toggleButton: css({
    width: 200,
    cursor: 'pointer',
    backgroundColor: '#66e2d5',
    border: '2px solid black',
    padding: '4px 10px'
  }),
  toggleButtonText: css({
    textAlign: 'center',
    fontSize: 18
  }),
  fancy: css({
    fontFamily: "Francois One, sans-serif"
  }),
  input: css({
    outline: 'none',
    border: 'none',
    fontSize: 32,
    marginTop: 30,
    marginBottom: 8
  }),
  textarea: css({
    width: 900,
    marginTop: 10,
    border: '3px solid black',
    minHeight: 300,
    outline: 'none',
    fontSize: 18
  })
}

export default Router;
