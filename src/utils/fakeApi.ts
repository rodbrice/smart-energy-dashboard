export const fetchEnergyData = async (view: 'hour' | 'day' | 'month') => {
    const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));
  
    await delay(1200); // delay artificial de 1.2 segundos
  
    switch (view) {
      case 'day':
        return [
          { time: 'Seg', kWh: 20.1 },
          { time: 'Ter', kWh: 22.5 },
          { time: 'Qua', kWh: 19.7 },
          { time: 'Qui', kWh: 23.0 },
          { time: 'Sex', kWh: 25.2 },
          { time: 'Sáb', kWh: 27.8 },
          { time: 'Dom', kWh: 21.4 },
        ];
      case 'month':
        return [
          { time: 'Jan', kWh: 620 },
          { time: 'Fev', kWh: 580 },
          { time: 'Mar', kWh: 610 },
          { time: 'Abr', kWh: 590 },
          { time: 'Mai', kWh: 640 },
          { time: 'Jun', kWh: 670 },
        ];
      default:
        return [
          { time: '00:00', kWh: 1.2 },
          { time: '01:00', kWh: 1.0 },
          { time: '02:00', kWh: 0.8 },
          { time: '03:00', kWh: 0.6 },
          { time: '04:00', kWh: 0.7 },
          { time: '05:00', kWh: 1.1 },
          { time: '06:00', kWh: 1.8 },
          { time: '07:00', kWh: 2.5 },
          { time: '08:00', kWh: 2.9 },
          { time: '09:00', kWh: 3.1 },
          { time: '10:00', kWh: 3.5 },
          { time: '11:00', kWh: 3.2 },
          { time: '12:00', kWh: 2.9 },
          { time: '13:00', kWh: 2.4 },
          { time: '14:00', kWh: 2.2 },
          { time: '15:00', kWh: 2.7 },
          { time: '16:00', kWh: 3.0 },
          { time: '17:00', kWh: 3.6 },
          { time: '18:00', kWh: 3.9 },
          { time: '19:00', kWh: 3.7 },
          { time: '20:00', kWh: 3.3 },
          { time: '21:00', kWh: 2.8 },
          { time: '22:00', kWh: 2.2 },
          { time: '23:00', kWh: 1.7 },
        ];
    }
  };
  