import Link from "next/link";

const index = () => {
    const blogId = 500
    return (
        <div>
            <h1>Hello, This is Blogs List Page.</h1>
            <h4>
                <Link href='/blogs/1'>
                    <a>Blog 1</a>
                </Link>
            </h4>
            
            <h4>
                <Link href='/blogs/1'>
                    <a>Blog 2</a>
                </Link>
            </h4>
            <h4>
                <Link href='/blogs/1'>
                    <a>Blog 3</a>
                </Link>
            </h4>
            <h4>
                <Link href='/blogs/1'>
                    <a>Blog 4</a>
                </Link>
            </h4>
            <h4>
                <Link href={`/blogs/${ blogId}`} >
                    <a>Blog {blogId}</a>
                </Link>
            </h4>
        </div>
    );
}

export default index;