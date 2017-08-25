export const getVisibleTechies = (techies, param) => techies.filter((techie) => (techie.name.toLowerCase().includes(param)))
