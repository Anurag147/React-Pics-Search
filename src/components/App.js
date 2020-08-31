import React from 'react';
import SearchBar from './SearchBar';
import axios from 'axios';

class App extends React.Component{

    onSearchSubmit = (term) =>{
     axios.get('https://api.unsplash.com/search/photos',{
         params: {query: term},
         headers: {
             Authorization: 'Client-ID Gelo_WLLNkCr1mCBi9xcISLKhQTwL_rIYyaEWM74DFo'
         }
     });
    }

    render(){
        return(
            <div className="ui container" style={{marginTop: '10px'}}>
                <SearchBar onSubmit = {this.onSearchSubmit}/>
            </div>
        )
    }
}

export default App;