import './App.css'
import { Routes, Route } from 'react-router-dom';
import AppLayout from './core/applayout/AppLayout';
import Homepage from './feature/home/Homepage';
import Project from './feature/project/Project';
import ProjectDetail from './feature/project/ProjectDetil';
import NotFoundPage from './feature/NotFoundPage';
import Loading from './core/loading/Loading';


const App:React.FC =() =>{
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route index element={<Homepage />} />
        <Route path="loading" element={<Loading />} />
        <Route path="profile" element={<Loading />} />
        <Route path="skill" element={<Loading />} />
        <Route path="history" element={<Loading />} />
        <Route path="project" >
          <Route index element={<Project />} />
          <Route path=":id" element={<ProjectDetail />} />
        </Route>
      </Route>
      <Route path="*" element={<NotFoundPage />} />

    </Routes>
  )
}

export default App
