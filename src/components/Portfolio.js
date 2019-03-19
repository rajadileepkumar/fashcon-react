import React, { Component } from 'react';
import axios from 'axios';
import Loader from 'react-loader-spinner';


export default class Portfolio extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.match.params.id || '',
            data: [],
            isLoaded: false,
        }
    }
    componentDidMount() {
        axios.get('http://fashconfessions.com/wp-json/wp/v2/posts/' + this.state.id + "?_embed")
            .then(res => {
                this.setState({
                    isLoaded:true,
                    data:res.data
                })
                console.log(this.state.data);
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
                                            {/* {this.state.data.map((item, i) => (
                                                <div key={i} className="" dangerouslySetInnerHTML={{ __html: item.content.rendered }}></div>
                                            )
                                            )} */}

                                            {
                                                <div className="" dangerouslySetInnerHTML={{ __html: this.state.data.content.rendered }}></div>
                                            }
                                            {console.log(this.state.data)}
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