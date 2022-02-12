import Link from "next/link";

const index = ({ posts }) => {
    return (
        <div>
            <Link href="/" passHref>
                <h4>Home</h4>
            </Link>
            
            <h1>List of Posts</h1>
            {
                posts.map(item => {
                    return (
                        <div key={item.id}>
                            <Link href={`posts/${item.id}`} passHref>
                                <h3>{item.id} {item.title}</h3>
                            </Link>
                            <p>{ item.price }</p>
                            <hr />
                        </div>
                    )
                })
            }
        </div>
    );
}

export default index;


export const getStaticProps = async () => {
    let response = await fetch('http://localhost:4000/products')
    let data = await response.json()

    return {
        props: {
            posts: data
        },
        revalidate:10,
    }
}