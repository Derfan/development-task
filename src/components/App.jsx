import React, {Component} from "react";
import {BrowserRouter, Route} from "react-router-dom";
import {getAlbumsList} from "../api";
import Header from "./Header";
import AlbumsList from "./AlbumsList";
import Album from "./Album";
import Photo from "./Photo";

class App extends Component {
    state = {
        isLoading: true,
        albums: []
    };

    componentDidMount() {
        getAlbumsList()
            .then(albums => this.setState({albums, isLoading: false}));
    }

    render() {
        const {albums, isLoading} = this.state;
        return (
            <BrowserRouter>
                <Header
                    title="Simple photo App"
                    albumsCount={albums.length}
                />

                <Route exact path="/" render={props => <AlbumsList {...props} albums={albums}/>}/>

                <Route exact path="/:album_id" render={props => <Album {...props}/>}/>

                <Route path="/:album_id/:photo_id" render={props => <Photo {...props}/>}/>

                {isLoading && "Loading..."}
            </BrowserRouter>
        );
    }
}

export default App;
