

function Footer() {
    return (

        <>
            <div className="container1 my-5">
                <footer className="bg-success text-center">
                    <div className="container1 p-4 pb-0">
                        <section className>
                            <form action>
                                <div className="row d-flex justify-content-center">
                                    <div className="col-auto">
                                        <p className="pt-2">
                                            <strong>Sign up for our newsletter</strong>
                                        </p>
                                    </div>
                                    <div className="col-md-5 col-12">
                                        <div className="form-outline mb-4">
                                            <input type="email" id="form5Example2" className="form-control" placeholder='Please enter your email' />
                                        </div>
                                    </div>
                                    <div className="col-auto">
                                        <button type="submit" className="btn btn-primary mb-4">
                                            Subscribe
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </section>
                    </div>
                    <div className="text-center p-3" style={{ "background-color": "rgba(0, 0, 0, 0.2)" }}>
                        Copyright ©2022 All rights reserved
                    </div>
                </footer>
            </div>
        </>

    )
}

export default Footer;