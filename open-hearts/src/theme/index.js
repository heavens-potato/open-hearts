import { createTheme } from '@mui/material/styles';
import { Poppins } from 'next/font/google';
import { Lusitana } from 'next/font/google';

const poppins = Poppins({
    weight: ['300', '400', '500', '700'],
    subsets: ['latin'],
    display: 'swap',
});

const lusitana = Lusitana({
    weight: '700',
    subsets: ['latin'],
});

const theme = createTheme({
    palette: {
        primary: {
            main: '#7D1538', // darkest red
            crimsonRed: '#A30B37', // darker red
            mauvePink: '#A33E70' // pink
        },
        secondary: {
            main: '#FF934F', // orange
            goldenYellow: '#F3B61F' // yellow
        },
    },
    typography: {
        fontFamily: poppins.style.fontFamily, //poppins for everything

        h1: {
            fontFamily: lusitana.style.fontFamily, //lusitana only for h1
        },
    }
})

export default theme;