const category = ({ articles, category}) => {
    return (
        <div>
            <h1>Showing news category {category}</h1>
            {
                articles.map((article) => {
                    return (
                        <div key={article.id}>
                            <h1>{article.id} {article.title} | { article.category }</h1>
                        </div>
                    )
                })
            }
        </div>
    );
}

export default category;

export async function getServerSideProps(context) {
    const { params } = context
    const {category} = params
    const response = await fetch(`http://localhost:4000/news?category=${category}`)
    const data= await response.json()

    return {
        props: {
            articles: data,
            category,
        }
    }
}