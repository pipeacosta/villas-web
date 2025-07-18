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
      <img style={{ height: 120, float: 'right' }} src={require('./img/Logo NB.svg').default} alt="Template Logo" />
      <h1>Home</h1>
      <p>
        Welcome to <b>EnerTEF</b>!
      </p>
      <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
        labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
        Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>

      <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
        et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
        Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
    </div>)
}

export function enertef_welcome() {
  return (
    <div >
      <h1>Welcome!</h1>
      <p>This is the Digital Twin for Distributed System Operators, a system designed to  blah blah.</p>
    </div>)
}

export function enertef_footer() {
  return (
    <footer class="app-footer">The development of this Digital Twin received funding from<p class="funding-logos"><img src="./Logo NB.svg" width="100vw" alt="Logo EnerShare"/></p><a href="https://enershare.eu/">Enershare</a>, an European Union’s Horizon Europe Research and Innovation programme under the Grant Agreement No 101069831.<p>Copyright © 2025 - <a href="https://www.acs.eonerc.rwth-aachen.de">Institute for Automation of Complex Power Systems</a> - <a href="https://www.rwth-aachen.de">RWTH Aachen University</a> </p></footer>)
}
