// import React from 'react';
// import './Search.css';
// import SearchIcon from '@material-ui/icons/Search';
// import StarsIcon from '@material-ui/icons/Stars';

// export default function Search() {
//     return (
//         <>
//             <div class="search">
//                 <input
//                     type="text"
//                     class="searchTerm"
//                     placeholder="What are you looking for?"
//                 />
//                 <button type="submit" class="searchButton">
//                     {<SearchIcon />}
//                 </button>
//             </div>
//             <div className="card">
//                 <div class="card-img">
//                     <img
//                         src="https://images.unsplash.com/photo-1558024160-4bcccd62f54c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
//                         alt="Card image"
//                     />
//                 </div>
//                 <div class="card-body">
//                     <div>
//                         <h4 class="card-title">Card title</h4>
//                         <span>{<StarsIcon />}</span>
//                         <p class="card-text">
//                             Some amazing content lorem ipsum dolor sit amet,
//                             consectetur adipiscing elit.
//                         </p>
//                     </div>
//                 </div>
//             </div>
//             <div className="card">
//                 <div class="card-img">
//                     <img
//                         src="https://images.unsplash.com/photo-1558024160-4bcccd62f54c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
//                         alt="Card image"
//                     />
//                 </div>
//                 <div class="card-body">
//                     <h4 class="card-title">Card title</h4>
//                     <p class="card-text">
//                         Some amazing content lorem ipsum dolor sit amet,
//                         consectetur adipiscing elit.
//                     </p>
//                 </div>
//             </div>
//             <div className="card">
//                 <div class="card-img">
//                     <img
//                         src="https://images.unsplash.com/photo-1558024160-4bcccd62f54c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
//                         alt="Card image"
//                     />
//                 </div>
//                 <div class="card-body">
//                     <h4 class="card-title">Card title</h4>
//                     <p class="card-text">
//                         Some amazing content lorem ipsum dolor sit amet,
//                         consectetur adipiscing elit.
//                     </p>
//                 </div>
//             </div>
//         </>
//     );
// }

import React, { useEffect, useState } from 'react';
import PlacesList from './PlacesList';
import SearchBar from './SearchBar';

export default function SearchResult(props) {
    return (
        <>
            <SearchBar
                onSubmit={props.handleSubmit}
                type="text"
                value={props.value}
                onChange={props.handleChange}
            />
            {props.place &&
                (<PlacesList place={props.place} toggle={props.toggle} />)}
        </>
    );
}
