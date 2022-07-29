import { useRouter } from "next/router";
import { useEffect } from "react";

const Error = () => {
    const router = useRouter();
    // const handleInput = () => {
    //     router.push('/');
    // }
    // const my = useEffect(() => {
    //     setTimeout(() => {
    //         handleInput();
    //     }, 5000);
    // }, [])

    useEffect(() => {
        setTimeout(() => {
            router.push('/');
        }, 2000);
    }, []);
    return (
        <div>
            <h1>404 Page</h1>
            {/* <button><a onClick={my}>Homepage</a></button> */}
            <style jsx>
                {
                    `
                h1{
                    color:red;
                }`
                }
            </style>
        </div>
    );
}

export default Error;