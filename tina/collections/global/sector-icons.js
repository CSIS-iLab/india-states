const sectorIcons = {
  label: 'Sector Icons',
  name: 'sector_icons',
  path: '_data',
  format: 'yaml',
  ui: {
    global: true,
    allowedActions: {
      create: false,
      delete: false
    }
  },
  match: {
    include: 'sector-icons'
  },
  fields: [
    {
      type: 'string',
      name: 'aerospace_and_defense',
      label: 'Aerospace and Defense'
    },
    {
      type: 'string',
      name: 'energy',
      label: 'Energy'
    },
    {
      type: 'string',
      name: 'health',
      label: 'Health'
    }
  ]
}

export default sectorIcons
