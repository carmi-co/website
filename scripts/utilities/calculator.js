import { groups } from './calculatorGroups';

const table = {
    small: {
        group1: 80,
        group2: 30
    },
    medium: {
        group1: 120,
        group2: 45
    },
    large: {
        group1: 180,
        group2: 75
    }
}

const getGroup = (postalcode) => {
    return groups.includes(postalcode)? 'group1' : 'group2';
}

const calculateRate = (vehicleSize, group) => {
    const vehicleGroup = getGroup(group);
    return table[vehicleSize] && table[vehicleSize][vehicleGroup];
}

export default calculateRate;
