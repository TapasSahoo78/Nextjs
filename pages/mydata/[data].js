import { useRouter } from 'next/router';
import React from 'react';

function data() {
    const router = useRouter();
    //console.log(router);
    const routedata = router.query.data;
    const pathdata = router.pathname;
    const locationdata = router.route;
    //console.log(routedata);
    return (
        <div>
            <h3>data : {routedata}....{pathdata}....{locationdata}</h3>
        </div>
    )
}

export default data;