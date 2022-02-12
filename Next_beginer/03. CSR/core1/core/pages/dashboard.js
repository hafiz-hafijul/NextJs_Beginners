import {useState, useEffect} from 'react'

const dashboard = () => {
    const [isLoading, setIsLoading]=useState(true)
    const [dashboardData, setDashboardData] = useState(null)
    
    useEffect(() => {
        fetchDashboardData()
    },[])

    const fetchDashboardData= async ()=> {
        const response = await fetch('http://localhost:4000/dashboard')
        const data = await response.json()
        setDashboardData(data)
        setIsLoading(false)
    }

    if (isLoading) {
        return <h1>Loading........</h1>
    }

  return (
      <div>
          <h1>dashboard</h1>
          <h3>Total Post- { dashboardData.post }</h3>
          <h3>Total Post- { dashboardData.likes }</h3>
          <h3>Total Post- { dashboardData.follower }</h3>
          <h3>Total Post- { dashboardData.following }</h3>
    </div>
  )
}

export default dashboard