import useSWR from 'swr'

const fetcher = async () => {
    const response = await fetch('http://localhost:4000/dashboard')
    const data = await response.json()
    return data
}

const dsahborad_swr = () => {
    const { data, error } = useSWR('dashboard', fetcher)
    if (error) {
        return "Occcured an error"
    }
    if (!data) {
        return "Loading ......."
    }
    return (
        <div>
            <h1>dashboard</h1>
          <h3>Total Post- { data.post }</h3>
          <h3>Total Post- { data.likes }</h3>
          <h3>Total Post- { data.follower }</h3>
          <h3>Total Post- { data.following }</h3>
        </div>
    );
}

export default dsahborad_swr;