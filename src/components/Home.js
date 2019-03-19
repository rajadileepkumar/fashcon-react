import React, { Component } from 'react';
import Loader from 'react-loader-spinner'
import axios from 'axios';
import { Link } from 'react-router-dom';


export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [],
            isLoaded: false,
        }
    }
    componentDidMount() {
        axios.get('http://fashconfessions.com/wp-json/wp/v2/posts')
            .then(res => {
                this.setState({
                    isLoaded: true,
                    list: res.data

                })
                console.log(this.state.list);
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
                                        <div className="row">
                                            {this.state.list && this.state.list.map((item, i) => (
                                                <div key={i} id={"post-id" + i} className="col-lg-4 col-md-4 col-sm-12 col-12 flex-column">
                                                    <div className="post-card card match-height">
                                                        <div className="post-card-image img">

                                                        </div>
                                                        <div className="post-card-content card-body">
                                                            <h5 className="card-title">{item.title.rendered}</h5>
                                                            <div dangerouslySetInnerHTML={{ __html: item.excerpt.rendered }} className="card-text"></div>
                                                            <Link to={"/portfolio/"+item.id} className="btn btn-primary">Read More</Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                            )}
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