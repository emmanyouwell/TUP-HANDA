import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Bar } from 'react-chartjs-2';
import { getAllDownloadedModules } from '../../Actions/modulesActions';
import { Chart, CategoryScale, BarController, LinearScale, Tooltip, Title, BarElement } from 'chart.js';

Chart.register(CategoryScale, BarController, LinearScale, Tooltip, Title, BarElement);
const DownloadedModulesChart = () => {
  const dispatch = useDispatch();

  const allDownloadedModules = useSelector(state => state.allDownloadedModules);
  const { loading, error, downloadedModules } = allDownloadedModules;

  useEffect(() => {
    dispatch(getAllDownloadedModules());
  }, [dispatch]);

  const data = {
    labels: downloadedModules.map(module => module.moduleName),
    datasets: [
      {
        label: 'Downloads',
        data: downloadedModules.map(module => module.downloadCount),
        backgroundColor: 'rgba(75,192,192,0.6)',
        borderColor: 'rgba(75,192,192,1)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(75,192,192,0.4)',
        hoverBorderColor: 'rgba(75,192,192,1)',
      }
    ]
  };

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <Bar data={data} />
      )}
    </div>
  );
};

export default DownloadedModulesChart;