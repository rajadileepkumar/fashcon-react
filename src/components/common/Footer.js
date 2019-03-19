import React, { Component } from 'react';
export default class Footer extends Component {
    render(){
        return(
            <footer className="footer">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                            <p>© Copyrights 2019 </p>
                            {/* <a href="#" target="_blank" rel="noopener">JNxG </a> */}
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
}