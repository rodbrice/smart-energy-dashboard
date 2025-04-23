import { create } from 'zustand';
import { fetchEnergyData } from '../utils/fakeApi';

type ViewType = 'hour' | 'day' | 'month';

interface EnergyState {
  view: ViewType;
  data: { time: string; kWh: number }[];
  loading: boolean;
  setView: (view: ViewType) => void;
  fetchData: (view?: ViewType) => void;
}

export const useEnergyStore = create<EnergyState>((set, get) => ({
  view: 'hour',
  data: [],
  loading: false,
  setView: (view) => {
    set({ view });
    get().fetchData(view);
  },
  fetchData: async (viewParam) => {
    const view = viewParam ?? get().view;
    set({ loading: true });
    const data = await fetchEnergyData(view);
    set({ data, loading: false });
  },
}));
