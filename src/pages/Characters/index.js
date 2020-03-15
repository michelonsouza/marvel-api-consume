import React from 'react';
import { useSelector } from 'react-redux';

import AppLayout from '~/pages/_layouts/app';
import { DataSet } from '~/components';

export default function Characters() {
  const { characters, pagination, loading } = useSelector(
    state => state.characters
  );
  const labels = ['Nome', 'Descrição', 'Última atualização'];
  return (
    <AppLayout noPaddingX loading={loading}>
      <DataSet data={characters} labels={labels} pagination={pagination} />
    </AppLayout>
  );
}
