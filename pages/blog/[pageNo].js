import { useRouter } from "next/router";
const pageNo = () => {
    const router = useRouter();
    console.log(router);
    const pageNo = router.query.pageNo;
    return (
        <div>
            <h2>My blog page : {pageNo}</h2>
        </div>
    );
}

export default pageNo;