import React, { Component } from 'react';
import Loader from 'react-loader-spinner'
import axios from 'axios';
import { Link } from 'react-router-dom';

export default class Gallery extends Component {
    constructor(props) {
        super(props);
        this.state = {
            gallery: [],
            isLoaded: false,
        }
    }
    componentDidMount() {
        axios.get('http://fashconfessions.com/wp-json/wp/v2/media')
            .then(res => {
                this.setState({
                    isLoaded: true,
                    gallery: res.data

                })
                console.log(this.state.gallery);
            })
    }
    render() {
        return (
            <React.Fragment>
                {
                    this.state.isLoaded === false ? (
                        <div className="loader">
                            <Loader
                                type="Bars"
                                color="#00BFFF"
                                height="50"
                                width="50" className=""
                            />
                        </div>
                    ) : (
                            <div className="wrapper">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                                            <h1>Gallery</h1>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                                            <div className="row">
                                                {this.state.gallery && this.state.gallery.map((item, i) => (
                                                    <div className="col-lg-4 col-md-4 col-sm-6 col-12" key={i}>
                                                        <div className="gallery-album">
                                                            <Link to={item.source_url}>
                                                                <img src={item.media_details && item.media_details.sizes && item.media_details.sizes.full && item.media_details.sizes.full.source_url} alt={item.alt_text} className="img-responsive"/>
                                                            </Link>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                }
            </React.Fragment>
        )
    }
}