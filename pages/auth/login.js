import styles from '../../styles/Home.module.css';
import { Grid } from "@nextui-org/react";
import Example from '../Example';
import Image from 'next/image';

const login = () => {
    return (
        <main className={styles.main}>
            <Grid.Container gap={2} justify="center">
                <Grid xs={12}>
                    <Example />
                </Grid>
                <Grid xs={6}>
                    <div>
                        <form className="modal-content animate" action="/action_page.php" method="post">
                            <div className="imgcontainer">
                                <Image src="/svg-2.svg" alt="Avatar" className="avatar" width={100} height={100} />
                            </div>
                            <div className="container">
                                <label htmlFor="uname"><b>Username</b></label>
                                <input type="text" placeholder="Enter Username" name="uname" required />
                                <label htmlFor="psw"><b>Password</b></label>
                                <input type="password" placeholder="Enter Password" name="psw" required />
                                <button type="submit">Login</button>
                                <label>
                                    <input type="checkbox" defaultChecked="checked" name="remember" /> Remember me
                                </label>
                            </div>
                            <div className="container" style={{ "background-color": "#f1f1f1" }}>
                                <button type="button" className="cancelbtn1">Cancel</button>
                                <span className="psw">Forgot <a href="#">password?</a></span>
                            </div>
                        </form>
                    </div>
                </Grid>
            </Grid.Container>
        </main >
    )
}

export default login