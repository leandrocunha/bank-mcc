import { Route, Routes } from 'react-router-dom';
import { ConfigurationsList } from './ConfigurationsList';
import { ConfigurationsNew } from './ConfigurationsNew';

export const Configurations = (): JSX.Element => {
    return (
      <Routes>
        <Route index element={<ConfigurationsList />} />
        <Route path="new" element={<ConfigurationsNew />} />
      </Routes>
    )
}














