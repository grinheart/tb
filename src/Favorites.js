import React, { useState } from 'react';
import PlacesList from './PlacesList';

export default function Favorites() {
    const locStor = window.localStorage;
    let favs = locStor.getItem('favorites');
    const [favorites, setFavorites] = useState(favs ? JSON.parse(favs) : []);
    const toggle = (idx) => {
        let p = JSON.parse(JSON.stringify(favorites));
        p.splice(idx, 1);
        setFavorites(p);
        locStor.setItem('favorites', JSON.stringify(p));
    }

    return (
        <div>
            <h2>Favorites</h2>
            <PlacesList place={favorites} toggle={toggle} />
        </div>
    );
}
