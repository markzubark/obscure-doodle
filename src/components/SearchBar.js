import React from 'react'

const SearchBar = () => {
  return (
    <div className="searchbox">
        <input
          placeholder="Search Your Movie"
          type="text"
          onchange={() => {

          }}
          onKeyPress={() => {
            
          }}
        />
        <button 
          className="searchbtn"
          onclick={() => {

          }}
        >
          <i class='bx bx-search'></i>
        </button>
    </div>
  )
}

export default SearchBar