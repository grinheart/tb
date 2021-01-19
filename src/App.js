import React, { useState, useEffect } from 'react';
import './App.css';
import ReactDOM from 'react-dom';
import { Switch, Route } from 'react-router-dom';

// import { GoogleLogin } from 'react-google-login';
import BottomNav from './BottomNav';
import Header from './Header';
import Main from './Main';
import SearchResult from './SearchResult';
import Favorites from './Favorites';
import Chart from './Chart';

// const responseGoogle = (response) => {
//     console.log(response);
// };

const App = () => {
    const [city, setCity] = useState('');
    const [place, setPlace] = useState([]);
    const url = 'https://api.foursquare.com/v2/venues/search';
    const pic_url = 'https://api.foursquare.com/v2/venues/';
    const pic_url2 = 'photos';
    const query = '&query=art&limit=10&near=';
    const client_secret =
        '?client_id=MZO1E0505RYUUT1PIVIJAFFNWFNG124D4DUBFKX2TOM4I2ET&client_secret=5YHRS3XALKL12RMB2Y5HGDI0Z45EUQALO3DCZLNTWKEYI4EV&v=20210118';

    // const [loading, setLoading] = useState(false);
    // const [query, setQuery] = useState('');

    const fetchPlaces = () => {
        fetch(`${url}${client_secret}${query}${city || ''}`)
            .then((response) => response.json())
            .then((response) => {
                let venues = response.response.venues;
                console.log(venues);
                venues = venues.map(v => ({...v, pic: v.categories[0].icon.prefix + '100' + v.categories[0].icon.suffix, favorite: false}));
                console.log('response', response);
                setPlace(venues);

                setCity(response.response.city);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    useEffect(() => {
        fetchPlaces();
    }, []);

    const locStor = window.localStorage;

    const handleSubmit = (event) => {
        event.preventDefault();
        fetchPlaces();
    };

    return (
        <>
            <Header />
            <Switch>
                <Route exact path="/">
                    <Main />
                </Route>
                <Route path="/search">
                    <SearchResult
                        place={place}
                        value={city}
                        handleSubmit={handleSubmit}
                        handleChange={(e) => setCity(e.target.value)}
                        toggle={(idx) =>{
                            let p = JSON.parse(JSON.stringify(place));
                            p[idx].favorite = !p[idx].favorite;
                            setPlace(p);
                            locStor.setItem('favorites', JSON.stringify(p.filter(venue => venue.favorite)));
                        }}
                    />
                </Route>
                <Route path="/favorites">
                    <Favorites />
                </Route>
                <Route path="/chart">
                    <Chart />
                </Route>
            </Switch>
            <div class="footer">
                <BottomNav />
            </div>
        </>
    );
};
export default App;
{
    /* <GoogleLogin
                clientId="475441533805-bmvjovs9p4rrb6dmnbtjoef3gajdpdb7.apps.googleusercontent.com"
                buttonText="Login"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                cookiePolicy={'single_host_origin'}
            />
            Hello!!! */
}
