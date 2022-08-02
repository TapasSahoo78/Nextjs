// import '../styles/contact.css';
import styles from '../styles/Home.module.css';
import { Grid } from "@nextui-org/react";
import Example from './Example';
import Image from 'next/image';
import Footer from '../components/Footer';

const about = () => {
    return (
        <main className={styles.main}>
            <Grid.Container gap={2} justify="center">
                <Grid xs={12}>
                    <Example />
                </Grid>
                <Grid xs={8}>
                    <div>
                        <div className="about-section">
                            <h1>About Us Page</h1>
                            <p>Some text about who we are and what we do.</p>
                            <p>Resize the browser window to see that this page is responsive by the way.</p>
                        </div>
                        <h2 style={{ "WebkitTextAlign": "center", "textAlign": "center" }}>Our Team</h2>
                        <div className="row">
                            <div className="column">
                                <div className="card">
                                    <Image src="/img.jpeg" className='imgst' alt="Jane" width={200} height={200} />
                                    <div className="container">
                                        <h2>Tapas Sahoo</h2>
                                        <p className="title">CEO &amp; Founder</p>
                                        <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                                        <p>tapas@gmail.com</p>
                                        <p><button className="button">Contact</button></p>
                                    </div>
                                </div>
                            </div>
                            <div className="column">
                                <div className="card">
                                    <Image src="/img.jpeg" className='imgst' alt="Mike" width={200} height={200} />
                                    <div className="container">
                                        <h2>Tapas Sahoo</h2>
                                        <p className="title">Director</p>
                                        <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                                        <p>tapas@gmail.com</p>
                                        <p><button className="button">Contact</button></p>
                                    </div>
                                </div>
                            </div>
                            <div className="column">
                                <div className="card">
                                    <Image src="/img.jpeg" className='imgst' alt="John" width={200} height={200} />
                                    <div className="container">
                                        <h2>Tapas Sahoo</h2>
                                        <p className="title">Developer</p>
                                        <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                                        <p>tapas@gmail.com</p>
                                        <p><button className="button">Contact</button></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Grid>
            </Grid.Container>
        </main>
    );
}

export default about;

/***** If ABOUT Page not require Header Section *****/
// about.getLayout = function pageLayout(page) {
//     return (
//         <>
//             {page}
//             <Footer />
//         </>
//     )
// }