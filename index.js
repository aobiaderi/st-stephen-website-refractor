
// detect if user is in dark mode
const isDarkMode = () => {
    return window.matchMedia ('(prefers-color-scheme:dark)').matches;
}
console.log (isDarkMode());