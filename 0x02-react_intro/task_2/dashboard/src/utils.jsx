
export const getFullYear = () => {
    return new Date().getFullYear();
}

export const getFooterCopy = (isIndex) => {
    if (typeof isIndex === "boolean" && isIndex) {
        return "Holberton School";
    } else if (typeof isIndex === "boolean" && !isIndex) {
        return "Holberton School main dashboard";
    }
}

export const getLatestNotification = () => {
    return "<strong>Urgent requirement</strong> - complete by EOD";
}
