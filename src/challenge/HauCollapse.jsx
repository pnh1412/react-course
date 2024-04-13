import React, { useState } from 'react';

const cities = [
  {
    name: "Phu Nhuan",
    children: [
      {
        street: "Le Van Sy",
        ward: 13,
      },
      {
        street: "Dang Van Ngu",
        ward: 13,
      },
    ],
  },
  {
    name: "Q3",
    children: [
      {
        street: "Nam Ky Khoi Nghia",
        ward: 15,
      },
      {
        street: "Nguyen Van Troi",
        ward: 2,
      },
    ],
  },
  {
    name: "Q1",
    children: [
      {
        street: "Nguyen Trai",
        ward: 15,
      },
      {
        street: "Bui Vien",
        ward: 2,
      },
    ],
  },
];

function Collapse() {
  const [openCity, setOpenCity] = useState(null);

  const toggleCity = (cityIndex) => {
    setOpenCity(openCity === cityIndex ? null : cityIndex);
  };

  return (
    <div className="mt-8 w-[600px]">
      <table className="experiment-results table-sm">
        <thead>
          <tr>
            <th align="left" className="axis-col header-label">
              District
            </th>
            <th align="left" className="axis-col label">
              Street
            </th>
            <th align="left" className="axis-col label ">
              Ward
            </th>
          </tr>
        </thead>
        <tbody>
          {cities.map((city, cityIndex) => (
            <React.Fragment key={cityIndex}>
              <tr
                onClick={() => toggleCity(cityIndex)}
                className="results-variation-head text-[#343a40] bg-[#f7f7f7]"
              >
                <td colSpan={3} className="py-4 font-bold text-[14px] px-3">
                  {city.name}
                </td>
              </tr>
              {openCity === cityIndex && city.children.map((children, childrenIndex) => (
                <tr
                  key={childrenIndex}
                  className="results-variation-row align-items-center py-2"
                >
                  <td className="variation with-variation-label variation1 py-2 e">
                    <div className="text-ellipsis">{childrenIndex + 1}</div>
                  </td>
                  <td className="value baseline py-4">{children.street}</td>
                  <td className="value baseline py-4">{children.ward}</td>
                </tr>
              ))}
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Collapse;
