import React from 'react'
// import Sidebar from './Sidebar'

const Searchvideo = ({item}) => {
  return (
    <div>
        {/* <Sidebar/> */}
        <div  className="video-item mb-4 max-w-xs w-full bg-white rounded-lg shadow-lg overflow-hidden">
        <iframe
          width="100%"
          height="315"
          src={`https://www.youtube.com/embed/${item.id.videoId}`}
          title={item.snippet.title}
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        <div className="p-4">
          <h3 className="text-xl font-semibold text-gray-900 mb-2 line-clamp-2">{item.snippet.title}</h3>
          <p className="text-sm text-gray-600 line-clamp-3">{item.snippet.description}</p>
        </div>
      </div>
    </div>
  )
}

export default Searchvideo