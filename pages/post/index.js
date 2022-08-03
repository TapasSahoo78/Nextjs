import { Image } from "react-bootstrap";

export const getStaticProps = async () => {
    const res = await fetch("https://reqres.in/api/users?page=2");
    const mydata = await res.json();
    //console.log(mydata)
    return {
        props: {
            mydata
        }
    }
}

function post({ mydata }) {
    //console.log(mydata);
    return (
        <div style={{ minHeight: '80vh' }}>
            <div className="container" style={{ marginTop: '30px' }}>
                <table className="table table-condensed">
                    <thead>
                        <tr>
                            <th>SL No.</th>
                            <th>Email</th>
                            <th>Firstname</th>
                            <th>Lastname</th>
                            <th>Avatar</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            mydata.data.slice(0, 5).map((post, i) => {
                                return <tr key={post.id}>
                                    <td>{i + 1}</td>
                                    <td>{post.email}</td>
                                    <td>{post.first_name}</td>
                                    <td>{post.last_name}</td>
                                    <td><Image src={post.avatar} alt="no img" /></td>
                                </tr>
                            })
                        }
                    </tbody>

                </table>
            </div>
        </div>
    )
}

export default post;