import User from '../components/user'

const users = ({ users }) => {
    return (
        <div>
            <h1>List of User</h1>
            {
                users.map(user => {
                    return (
                        <div key={user.id}>
                            <User user={user} />
                        </div>
                    )
                })
            }
        </div>
    );
}

export default users;

export async function getStaticProps() {
    const respones = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await respones.json()

    return {
        props: {
            users:data
        }
    }
}