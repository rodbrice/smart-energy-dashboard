import ViewFilter from '../features/filters/ViewFilter';
import EnergyChart from '../features/energyChart';
import SuggestionPanel from '../features/suggestions/suggestionPanel';

const Dashboard = () => {
  return (
    <>
      <ViewFilter />
      <EnergyChart />
      <SuggestionPanel />
    </>
  );
};

export default Dashboard;
