import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { format, parseISO } from 'date-fns';

import { textSlice } from '~/utils';
import { DataRow } from '../styles';

export default function DataItem({ item, ...rest }) {
  const formattedDescription = useMemo(() => {
    return item.description ? textSlice(item.description) : 'N/A';
  }, [item.description]);

  const formattedDate = useMemo(() => {
    return format(parseISO(item.modified), "dd/MM/yyyy' - 'HH:mm");
  }, [item.modified]);

  return (
    <DataRow {...rest}>
      <span title="Nome do personagem">{item.name}</span>
      <span title="Descrição do personagem">{formattedDescription}</span>
      <span title="Ultima atualização">{formattedDate}</span>
    </DataRow>
  );
}

DataItem.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string,
    description: PropTypes.string,
    modified: PropTypes.string,
    thumbnail: PropTypes.shape({
      path: PropTypes.string,
      extension: PropTypes.string,
    }),
  }).isRequired,
};
