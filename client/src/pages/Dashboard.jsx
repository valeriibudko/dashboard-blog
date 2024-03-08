import { useLocation } from "react-router-dom"
import { useState, useEffect } from "react"
import DashProfile from '../components/dash/DashProfile';
import DashSidebar from '../components/dash/DashSidebar';


export default function Dashboard() {
  const location = useLocation();
  const [tab, setTab] = useState('');
  useEffect(() => {
    const urlParams = new URLSearchParams(location.search)
    const tabFromUrl = urlParams.get('tab')
    if(tabFromUrl) {
      setTab(tabFromUrl);
    }
    console.log(tabFromUrl);
  }, [location.search])

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      <div className="md:w-56">
       <DashSidebar /> 
      </div>
      { tab === 'profile' && <DashProfile /> }
    </div>
  )
}
