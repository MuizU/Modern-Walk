export const getBackgroundColor = (category: string): string => {
    switch (category) {
        case 'men\'s clothing':
            return 'bg-[#2ad9ae]';
        case 'women\'s clothing':
            return 'bg-[#fe5d85]';
        default:
            return 'bg-[#2ad9ae]';
    }
}