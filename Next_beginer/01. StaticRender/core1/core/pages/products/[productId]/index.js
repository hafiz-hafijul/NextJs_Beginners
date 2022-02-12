import {useRouter} from 'next/router'

const productId = () => {
    const router = useRouter()
    const id = router.query.productId
    return (
        <div>
            <h1>Detail about product {id}</h1>
        </div>
    );
}

export default productId;