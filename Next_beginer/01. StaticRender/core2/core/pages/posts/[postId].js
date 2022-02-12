import Link from "next/link";
import {useRouter} from 'next/router'


const postId = ({ post }) => {
    const router = useRouter()
    if (router.isFallback) {
        return <>
            <h1>Loading ........</h1>
        </>
    }
    return (
        <div>
            <Link href="/" passHref>
                <h4>Home</h4>
            </Link>
            <Link href="/posts" passHref>
                <h4>Posts</h4>
            </Link>
            <div>
                <h1>Produt Id- {post.id} </h1>
                <h2>Product title- {post.title}</h2>
                <p>{post.price}</p>
                <p>{ post.description }</p>
            </div>
        </div>
    );
}

export default postId;

export const getStaticPaths = async () => {

    let response = await fetch('http://localhost:4000/products')
    let data = await response.json()

    const path = data.map((item) => {
        return {
            params: {
                postId: `${item.id}`,
            }
        }
    })

    return {
        paths: path,
        fallback: false,
    }

}


export const getStaticProps = async (context) => {
    const {params} =context
    const response = await fetch(`http://localhost:4000/products/${params.postId}`)
    const data = await response.json()

    return {
        props: {
            post:data
        }
    }
}