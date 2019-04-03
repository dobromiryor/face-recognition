import React from 'react';

const ImageLinkForm = ({onInputChange, onPictureSubmit}) => {
  return (
    <div>
      <p>{'Give me a face to recognize'}</p>
      <div>
        <input onChange={onInputChange }/>
        <button className='pointer' onClick={onPictureSubmit}> Detect </button>
      </div>
    </div>
  )
}

export default ImageLinkForm;