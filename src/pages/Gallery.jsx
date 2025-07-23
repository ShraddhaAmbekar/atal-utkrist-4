import React from 'react'
import { useState } from 'react';
import './Gallery.css'


const allImages = [
  {
    title: 'shdks',
    src: 'https://tse4.mm.bing.net/th/id/OIP.HxV79tFMPfBAIo0BBF-sOgHaEy?pid=Api&P=0&h=180',
    category: 'Events',
  },
  {
    title: 'shdks',
    src: 'https://tse4.mm.bing.net/th/id/OIP.HxV79tFMPfBAIo0BBF-sOgHaEy?pid=Api&P=0&h=180',
    category: 'Events',
  },
  {
    title: 'shdks',
    src: 'https://tse4.mm.bing.net/th/id/OIP.HxV79tFMPfBAIo0BBF-sOgHaEy?pid=Api&P=0&h=180',
    category: 'Class',
  }, {
    title: 'shdks',
    src: 'https://wallpaperaccess.com/full/4723250.jpg',
    category: 'Class',
  }, 
  {
    title: 'shdks',
    src: 'https://wallpaperaccess.com/full/4723250.jpg',
    category: 'Activities',
  }, 
  {
    title: 'shdks',
    src: 'https://wallpaperaccess.com/full/4723250.jpg',
    category: 'Activities',
  }, {
    title: 'shdks',
    src: 'https://wallpaperaccess.com/full/4723250.jpg',
    category: 'Events',
  }, {
    title: 'shdks',
    src: 'https://wallpaperaccess.com/full/4723250.jpg',
    category: 'Class',
  }, {
    title: 'shdks',
    src: 'https://wallpaperaccess.com/full/4723250.jpg',
    category: 'Events',
  }, {
    title: 'shdks',
    src: '/assets/images/gallery/11.jpg',
    category: 'Class',
  }, {
    title: 'shdks',
    src: '/assets/images/gallery/12.jpg',
    category: 'Class',
  }, {
    title: 'shdks',
    src: '/assets/images/gallery/13.jpg',
    category: 'Class',
  },
]


const categories = ['All', 'Activities', 'Class', 'Events',];

const Gallery = () => {

  const [selectedCategory, setSelectedCategory] = useState('All');
  const filteredImages =
    selectedCategory === 'All'
      ? allImages
      : allImages.filter((img) => img.category === selectedCategory);
  return (
    <div>
<div className="home">
  
      <div className="container">
        {/* Filter Buttons */}
       <div className="filter-buttons">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`filter-button ${selectedCategory === cat ? 'active' : ''}`}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Image Grid */}
        <div className="image-grid">
          {filteredImages.map((img, index) => (
            <div key={index} className="grid-item">
              <img src={img.src} alt={img.category} className="big-img" />
            </div>
          ))}
        </div>

      </div>
</div>
    </div>


  )
}


export default Gallery

