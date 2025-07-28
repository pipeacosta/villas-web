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

const enertef_values = {
  title: 'Digital Twin for Distributed Energy Systems',
  subtitle: 'EnerTEF',
  icon: "logo_EnerTEF_Icon.svg",
  logo: "logo_EnerTEF.svg",
  pages: {
    home: true,
    scenarios: true,
    infrastructure: true,
    users: true,
    account: true,
    api: true
  },
  links: {
    "DPsim Simulator": "https://dpsim.fein-aachen.org",
    "The Project": "https://www.enertef.eu/"
  },
  style: {
    background: 'rgba(207,209,210, 1)',
    highlights: 'rgba(200,59,208, 1)',
    main: 'rgba(238,89,126, 1)',
    secondaryText: 'rgba(0,0,100, 0.8)',
    fontFamily: "Inter, sans-serif",
    borderRadius: "10px"
  }
}

export default enertef_values;
