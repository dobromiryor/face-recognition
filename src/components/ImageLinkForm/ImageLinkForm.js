import React from 'react';

const ImageLinkForm = ({onInputChange, onPictureSubmit}) => {
  return (
    <div>
      <p>{'Give me a face to recognize'}</p>
      <div>
        <input className='pa2 input-reset ba white b--white bg-transparent hover-bg-white hover-black w-100' onChange={onInputChange }/>
        <input onClick={onPictureSubmit} className="b ph3 pv2 input-reset ba white b--white bg-transparent grow pointer f6 dib mt3" type="submit" value="Detect" />
      </div>
    </div>
  )
}

export default ImageLinkForm;