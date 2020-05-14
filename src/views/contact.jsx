import React from 'react';
import '../styles/contact.css'

function Contact(props) {
    return (
        <>
            <div className="container">
                <div className="card mb-3">
                    <div className="row">
                        <div className="col-md-4">
                            <img id="person" src={"https://i.pravatar.cc/300"} className="card-img rounded-circle" alt="..." />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );

};
export default Contact;