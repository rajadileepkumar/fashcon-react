import React, { Component } from 'react';

export default class Contact extends Component {
    render() {
        return (
            <div className="wrapper">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                            <h1>Contact Us</h1>
                        </div>
                        <div className="row">
                            <div className="col-lg-8 col-md-8 col-sm-8 col-12">
                                <article>
                                    <form>
                                        <div className="form-group">
                                            <label>Full Name</label>
                                            <input type="text" className="form-control" name="fullName" id="fullName" placeholder="Full Name" />
                                        </div>
                                        <div className="form-group">
                                            <label>Email</label>
                                            <input type="email" className="form-control" name="email" id="eamil" placeholder="Email" />
                                        </div>
                                        <div className="form-group">
                                            <label>Your Message</label>
                                            <textarea className="form-control" placeholder="Your Message" name="message" id="message" rows="3" cols="150"></textarea>
                                        </div>
                                        <input type="submit" name="saveSubmit" id="saveSubmit" value="Submit" className="btn btn-primary" />
                                    </form>
                                </article>
                            </div>
                            <div className="col-lg-4 col-nd-4 col-sm-4 col-12">
                                <aside>
                                    <div className="">
                                        <h4>UI/UX Design</h4>
                                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque</p>
                                    </div>
                                    <div className="">
                                        <h4>Branding Identity</h4>
                                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque</p>
                                    </div>
                                    <div className="">
                                        <p>Li Europan lingues es membres del sam familie. Lor separat existentie es un myth. Por scientie, musica, sport etc, litot Europa usa li sam vocabular. Li lingues differe solmen in li grammatic.</p>
                                        <p>Li Europan lingues es membres del sam familie. Lor separat existentie es un myth. Por scientie, musica, sport etc, litot Europa usa li sam vocabular. Li lingues differe solmen in li grammatic.</p>
                                        <p>Li Europan lingues es membres del sam familie. Lor separat existentie es un myth. Por scientie, musica, sport etc, litot Europa usa li sam vocabular. Li lingues differe solmen in li grammatic.</p>
                                    </div>
                                </aside>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}