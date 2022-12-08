import React from 'react'
import './create.css'

const Create = () => {
  return (
    <section className='newPost'>
    <div className='container boxItems'>
      <div className='img '><img src='https://cdn.pixabay.com/photo/2015/10/03/20/51/summer-970347__340.jpg' alt='images' /></div>
      <form >
        <div className='inputfile flexCenter'>
          <label htmlFor='inputfile'>
          <i class="fa-solid fa-plus"></i>
          </label>
          <input type='file' id='inputfile' style={{ display: "none" }}  />
        </div>
        <input type='text' placeholder='Title' />
        <textarea name='' id='' cols='30' rows='10' ></textarea>
        <button className='button'>Create Post</button>
      </form>
    </div>
  </section>
  )
}

export default Create
