import React, { useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';

const Services = () => {
    const history = useHistory();
    const params = useParams();

    useEffect(() => {
        console.log(params);
    }, [])

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="accordion" id="accordionExample">
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingOne">
                                <button
                                    className="accordion-button"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#collapseOne"
                                    aria-expanded="true"
                                    aria-controls="collapseOne"
                                >
                                    Accordion Item #1
                                </button>
                            </h2>
                            <div
                                id="collapseOne"
                                className="accordion-collapse collapse show"
                                aria-labelledby="headingOne"
                                data-bs-parent="#accordionExample"
                            >
                                <div className="accordion-body">
                                    <strong>This is the first item's accordion body.</strong> It is
                                    shown by default, until the collapse plugin adds the appropriate
                                    classes that we use to style each element. These classes control
                                    the overall appearance, as well as the showing and hiding via CSS
                                    transitions. You can modify any of this with custom CSS or
                                    overriding our default variables. It's also worth noting that just
                                    about any HTML can go within the
                                    <code>.accordion-body</code>, though the transition does limit
                                    overflow.
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingTwo">
                                <button
                                    className="accordion-button collapsed"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#collapseTwo"
                                    aria-expanded="false"
                                    aria-controls="collapseTwo"
                                >
                                    Accordion Item #2
                                </button>
                            </h2>
                            <div
                                id="collapseTwo"
                                className="accordion-collapse collapse"
                                aria-labelledby="headingTwo"
                                data-bs-parent="#accordionExample"
                            >
                                <div className="accordion-body">
                                    <strong>This is the second item's accordion body.</strong> It is
                                    hidden by default, until the collapse plugin adds the appropriate
                                    classes that we use to style each element. These classes control
                                    the overall appearance, as well as the showing and hiding via CSS
                                    transitions. You can modify any of this with custom CSS or
                                    overriding our default variables. It's also worth noting that just
                                    about any HTML can go within the
                                    <code>.accordion-body</code>, though the transition does limit
                                    overflow.
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingThree">
                                <button
                                    className="accordion-button collapsed"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#collapseThree"
                                    aria-expanded="false"
                                    aria-controls="collapseThree"
                                >
                                    Accordion Item #3
                                </button>
                            </h2>
                            <div
                                id="collapseThree"
                                className="accordion-collapse collapse"
                                aria-labelledby="headingThree"
                                data-bs-parent="#accordionExample"
                            >
                                <div className="accordion-body">
                                    <strong>This is the third item's accordion body.</strong> It is
                                    hidden by default, until the collapse plugin adds the appropriate
                                    classes that we use to style each element. These classes control
                                    the overall appearance, as well as the showing and hiding via CSS
                                    transitions. You can modify any of this with custom CSS or
                                    overriding our default variables. It's also worth noting that just
                                    about any HTML can go within the
                                    <code>.accordion-body</code>, though the transition does limit
                                    overflow.
                                </div>
                            </div>
                        </div>
                    </div>
                    <h1 className="display-3">
                        {params.category && params.category}
                    </h1>
                    <button className="btn btn-info mx-2" onClick={() => {
                        const page = prompt('A donde desea ir: home, about, services, or contact');
                        switch (page) {
                            case 'home':
                                history.push('/');
                                break;
                            case 'about':
                                history.push('/about');
                                break;
                            case 'services':
                                history.push('/services');
                                break;
                            case 'contact':
                                history.push('/contact');
                                break;
                            default:
                                history.push(`/${page}`);
                                break;
                        }
                    }}>
                        Ir a
                    </button>
                    <button className="btn btn-warning mx-2" onClick={() => history.goBack()}>
                        Regresar
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Services;