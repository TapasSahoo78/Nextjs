
export const getStaticPaths = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const mydata = await res.json();

    const paths = mydata.map((curElmnt) => {
        // console.log(curElmnt);return;
        return {
            params: {
                pageNo: curElmnt.id.toString(),
            }
        }
    });
    return {
        paths,
        fallback: false,
    }
}

export const getStaticProps = async (context) => {
    console.log(context);
    const id = context.params.pageNo;
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    const mdata = await res.json();
    //console.warn(mdata);
    return {
        props: {
            mdata,
        }
    }

}


function mydata({ mdata }) {
    const { id, title, body } = mdata;
    return (<div style={{ minHeight: "calc(100vh - 250px)" }}>
        <div>{mdata.id}</div>
        <div>{mdata.title}</div>
        <div>{mdata.body}</div>
    </div>
    )
}

export default mydata;