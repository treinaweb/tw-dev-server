const themeFunctions = {
    spacing(size = 1): string {
        return `${size * 8}px`;
    },
    fontSize(size = 1): string {
        return [12, 14, 16, 18, 20, 24, 32, 48, 64][size] + 'px';
    },
};

export default themeFunctions;
