import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Chart } from 'react-google-charts';
import { useDistributor } from './DistributorContext';
function SalesReport() {
  const [data, setData] = useState([]);
  const {disid}=useDistributor()
  const fetchData = async () => {
    try {
      const response = await axios.get(`http://localhost:8282/distributor/sales/${disid}`); // Replace with your backend API endpoint
      setData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const chartData = [['Product Name', 'Quantity Sold']];

  data.forEach(item => {
    chartData.push([item.proname, item.qtysold]);
  });

  return (
    <div>
      <div className="dashboard-header">
        <h1 className="display-4">Sales Report</h1>
      </div>
      <Chart
        width={'900px'}
        height={'500px'}
        chartType="PieChart"
        data={chartData}
        options={{
          title: 'Sales Statistics',
          pieHole: 0.4,
        }}
        rootProps={{ 'data-testid': '1' }}
      />
    </div>
  )
}
export default SalesReport;