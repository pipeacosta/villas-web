/**
 * This file is part of VILLASweb.
 *
 * VILLASweb is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * VILLASweb is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with VILLASweb. If not, see <http://www.gnu.org/licenses/>.
 ******************************************************************************/
import React from 'react';


export function enertef_home() {
  return (
    <div className="home-container">
      <img style={{ height: 120, float: 'right' }} src={require('./img/logo_EnerTEF.svg').default} alt="Template Logo" />
      <h1>Home</h1>
      <p>
        Welcome to <b>DT-TEF-DSO</b>!
      </p>
      <p>The DT concept for electrical networks is based on the simulation tool DPSim, and allows the interconnection
        to data acquisition devices (measurement devices and status indicators) and the interaction with other systems.</p>

      <p>It is possbile to interconnect with other systems, like the load forecastingn and the state estimator.</p>
    </div>)
}

export function enertef_welcome() {
  return (
    <div >
      <h1>Welcome!</h1>
      <p>This is the Digital Twin for Distributed System Operators, a system designed to test Distributed System State Estimation methods and solutions by iteratively running a power flow with given operating conditions of the grid and a specified time interval.</p>
    </div>)
}

export function enertef_footer() {
  return (
    <footer className="app-footer">
      The development of this Digital Twin received funding from
      <p className="funding-logos">
        <img src={require('./img/logo_EnerTEF.svg').default} width="100vw" alt="Logo EnerTEF"/>
      </p>
      <a href="https://www.enertef.eu/">EnerTEF</a>, an European Union’s Horizon Europe Research and Innovation programme under the Grant Agreement No 101172887.  
      
      <p>Copyright &copy; {new Date().getFullYear()} - <a href="https://www.acs.eonerc.rwth-aachen.de">Institute for Automation of Complex Power Systems</a> - <a href="https://www.rwth-aachen.de">RWTH Aachen University</a> </p>
    </footer>
  );
}
