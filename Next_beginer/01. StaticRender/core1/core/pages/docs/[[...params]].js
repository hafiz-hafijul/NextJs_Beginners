import {useRouter} from 'next/router'

const params = () => {
    const router = useRouter()
    const {params=[]} = router.query
    console.log(params);
    if (params.length === 1) {
        return <>
            <h1>features Page { params[0]}</h1>
        </>
    } else if (params.length === 2){
        return <>
            <h1>Feature page {params[0]} and Example page {params[1]}</h1>
        </>
    }
    return (
        <div>
            <h1>Hello, Docs Home Page</h1>
        </div>
    );
}

export default params;