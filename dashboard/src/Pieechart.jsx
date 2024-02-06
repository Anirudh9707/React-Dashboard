// PieChart.js
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setEmployeeData } from './store/actions';
import * as d3 from 'd3';
import axios from 'axios';

function PieeChart() {
    const dispatch = useDispatch();
    const employeeData = useSelector((state) => state.employeeData);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get('https://dummy.restapiexample.com/api/v1/employees');
          dispatch(setEmployeeData(response.data.data));
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
  
      if (!employeeData.length) {
        fetchData();
      }
    }, [dispatch, employeeData.length]);
  
    useEffect(() => {
      drawChart();
    }, [employeeData]);
  

  const drawChart = () => {
    const svg = d3.select('#pieChart');
    svg.selectAll('*').remove(); // Clear previous chart

    const width = 300;
    const height = 300;
    const radius = Math.min(width, height) / 2;

    const color = d3.scaleOrdinal(d3.schemeCategory10);

    const arc = d3.arc().innerRadius(0).outerRadius(radius);

    const pie = d3.pie().value((d) => d);

    const chart = svg
      .append('g')
      .attr('transform', `translate(${width / 2},${height / 2})`);

    const arcs = chart
      .selectAll('slice')
      .data(pie([getTotalAge(), getTotalSalary()]))
      .enter()
      .append('g');

    arcs
      .append('path')
      .attr('d', arc)
      .attr('fill', (d, i) => color(i));

    arcs
      .append('text')
      .attr('transform', (d) => `translate(${arc.centroid(d)})`)
      .attr('text-anchor', 'middle')
      .text((d) => d.data);
  };


  const getTotalAge = () => employeeData.reduce((total, employee) => total + employee.employee_age, 0);
  const getTotalSalary = () => employeeData.reduce((total, employee) => total + employee.employee_salary, 0);

  return (
    <div>
      <h1>Pie Chart</h1>
      <svg id="pieChart" width={300} height={300}></svg>
      <p>Total Age: {getTotalAge()}</p>
      <p>Total Salary: {getTotalSalary()}</p>
    </div>
  );
}

export default PieeChart;
