import {useRouter} from 'next/router'


const review = () => {
    const router = useRouter()
    const {productId,reviewid} = router.query
    return (
        <div>
            <h1>Product No.{ productId} review { reviewid }</h1>
        </div>
    );
}

export default review;