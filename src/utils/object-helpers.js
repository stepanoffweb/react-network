export const updateObjectInArray = (items, itemId, objPropName, newObjProps) => (
  // typeof objPropName === stryng!!!

  items.map(item => (item[objPropName] === itemId) ? {...item, ...newObjProps} : item)
)
