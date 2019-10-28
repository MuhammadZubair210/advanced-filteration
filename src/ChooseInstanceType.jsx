import React, { useState, useEffect, useCallback } from 'react';
import Box from '@material-ui/core/Box';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

// import INSTANCES from '../static/instance';
import INSTANCES from './instance'
import TableData from "./App"
export default function ChooseInstanceType() {
  const [instances, setInstances] = useState(INSTANCES);
  const [filters, setFilters] = useState({
    freeTier: false,
    turbo: false,
    AVX: false,
    AESNI: false,
    IPv6: false,
    EBSOptimizedAvailable: false,
    family: 'All'
  });

  const handleToggle = key => {
    setFilters({ ...filters, [key]: !filters[key] });
  };

  const handleFamily = e => {
    setFilters({ ...filters, family: e.target.value });
  };

  const filterFamily = useCallback(
    instance => {
      if (filters.family === 'All') {
        return true;
      }
      if (filters.family === instance.family) {
        return true;
      }
      return false;
    },
    [filters]
  );

  useEffect(() => {
    setInstances(() => {
      let allInstances = INSTANCES;
      allInstances = allInstances.filter(instance => (filters.freeTier ? filters.freeTier === instance.freeTier : true));
      allInstances = allInstances.filter(instance => (filters.turbo ? filters.turbo === instance.turbo : true));
      allInstances = allInstances.filter(instance => (filters.AVX ? filters.AVX === instance.AVX : true));
      allInstances = allInstances.filter(instance => (filters.AESNI ? filters.AESNI === instance.AESNI : true));
      allInstances = allInstances.filter(instance => (filters.IPv6 ? filters.IPv6 === instance.IPv6 : true));
      allInstances = allInstances.filter(instance => (filters.EBSOptimizedAvailable ? filters.EBSOptimizedAvailable === instance.EBSOptimizedAvailable : true));
      allInstances = allInstances.filter(instance => (filters.family !== 'All' ? filterFamily(instance) : true));
      return allInstances;
    });
  }, [filterFamily, filters]);

  return (
    <TableData />
  );
}
