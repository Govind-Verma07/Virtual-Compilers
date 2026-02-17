import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import JavaLabHome from './java-lab/pages/JavaLabHome';
import JavaExperiment from './java-lab/pages/JavaExperiment';
import CLabHome from './c-lab/pages/CLabHome';
import CExperiment from './c-lab/pages/CExperiment';
import DSLabHome from './ds-lab/pages/DSLabHome';
import DSExperiment from './ds-lab/pages/DSExperiment';
import PythonExperimentsList from './python-lab/pages/PythonExperimentsList';
import PythonExperimentPage from './python-lab/pages/PythonExperimentPage';

function App() {
    return (
        <div className="h-full w-full bg-[#0f172a] text-slate-200 selection:bg-blue-500/30 overflow-hidden">
            <Routes>
                <Route path="/" element={<LandingPage />} />

                {/* Java Lab Routes */}
                <Route path="/java-lab" element={<JavaLabHome />} />
                <Route path="/java-lab/experiment/:id" element={<JavaExperiment />} />

                {/* C Lab Routes */}
                <Route path="/c-lab" element={<CLabHome />} />
                <Route path="/c-lab/experiment/:id" element={<CExperiment />} />

                {/* Data Structure Lab Routes */}
                <Route path="/ds-lab" element={<DSLabHome />} />
                <Route path="/ds-lab/experiment/:id" element={<DSExperiment />} />

                {/* Python Lab Routes */}
                <Route path="/python-lab" element={<PythonExperimentsList />} />
                <Route path="/python-lab/experiment/:id" element={<PythonExperimentPage />} />
            </Routes>
        </div>
    );
}

export default App;
