export const getSideButtonStyle = ({ width = 200, height = 58, gridTemplateColumns = '35% 65%', isCollapsed = false, } = {}) => ({
    display: 'grid',
    gridTemplateColumns,
    width,
    height,
    borderRadius: 2,
    cursor: 'pointer',
    outline: 'none',
});
