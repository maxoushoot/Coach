import React from 'react';
import ProgressChart from '../../components/common/ProgressChart';
import { progressData } from '../../data/mockData';

const ProgressPage: React.FC = () => {
  return (
    <div className="animate-enter py-8 space-y-8">
      <h1 className="text-2xl font-bold">Mes progrès</h1>
      <ProgressChart
        title="Évolution du poids"
        data={progressData.weight.data}
        labels={progressData.weight.labels}
        color="#0EA5E9"
        unit=" kg"
      />
      <ProgressChart
        title="Performances (burpees/min)"
        data={progressData.performance.data}
        labels={progressData.performance.labels}
        color="#10B981"
      />
      <ProgressChart
        title="Tour de taille"
        data={progressData.measurements.waist}
        labels={progressData.measurements.labels}
        color="#F59E0B"
        unit=" cm"
      />
    </div>
  );
};

export default ProgressPage;
