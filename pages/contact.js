// import '../styles/contact.css';
import styles from '../styles/Home.module.css';
import { Grid } from "@nextui-org/react";
import Example from './Example';

const contact = () => {
    return (
        <main className={styles.main}>
            <Grid.Container gap={2} justify="center">
            <Grid xs={12}>
            {/* <MockItem text="1 of 1" /> */}
            <Example />
          </Grid>
            <Grid xs={6}>
                <div>
                    <div className="container">
                        <form action="/action_page.php">
                            <label htmlFor="fname">First Name</label>
                            <input type="text" id="fname" name="firstname" placeholder="Your name.." />
                            <label htmlFor="lname">Last Name</label>
                            <input type="text" id="lname" name="lastname" placeholder="Your last name.." />
                            <label htmlFor="country">Country</label>
                            <select id="country" name="country">
                                <option value="india">India</option>
                                <option value="australia">Australia</option>
                                <option value="canada">Canada</option>
                                <option value="usa">USA</option>
                            </select><br/><br/>
                            <label htmlFor="subject">Subject</label>
                            <textarea id="subject" name="subject" placeholder="Write something.." style={{ "height": "120px" }} defaultValue={""} />
                            <input type="submit" defaultValue="Submit" />
                        </form>
                    </div>
                </div>
                </Grid>
            </Grid.Container>
        </main>
    );
}

export default contact;