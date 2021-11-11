import React from 'react';

const About = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">About</h5>
                            <p className="card-text">
                                This is a wider card with supporting text below as a natural lead-in
                                to additional content. This content is a little bit longer. Lorem
                                ipsum dolor sit amet, consectetur adipisicing elit. Neque delectus,
                                illo totam optio quaerat ratione nobis sed temporibus blanditiis
                                minus ipsa aut labore quo quibusdam iusto mollitia. Maiores,
                                eligendi non?
                            </p>
                            <p className="card-text">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam ea
                                mollitia ipsum earum rem optio impedit rerum commodi molestias sed
                                aut amet, nostrum dolorem officia sint ducimus vitae iure harum.
                            </p>
                            <p className="card-text">
                                <small className="text-muted">Last updated 3 mins ago</small>
                            </p>
                        </div>
                        <img
                            src="https://picsum.photos/seed/picsum/900/200"
                            className="card-img-bottom w-100"
                            alt="..."
                        />
                    </div>
                </div>
            </div>
        </div>

    )
}

export default About;