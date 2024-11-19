/** @type {import('tailwindcss').Config} */
export default {
	darkMode: ["class"],
	content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
	theme: {
    	extend: {
    		colors: {
    			main: '#B59F78',
    			mainAccent: '#2A3663',
    			secAccent: '#D8DBBD',
    			overlay: 'rgba(0,0,0,0.8)',
    			bg: '#FAF6E3',
    			text: '#000',
    			border: '#000',
    			darkBg: '#272933',
    			darkText: '#eeefe9',
    			darkBorder: '#000',
    			secondaryBlack: '#212121',
    			background: 'hsl(var(--background))',
    			foreground: 'hsl(var(--foreground))',
    			card: {
    				DEFAULT: 'hsl(var(--card))',
    				foreground: 'hsl(var(--card-foreground))'
    			},
    			popover: {
    				DEFAULT: 'hsl(var(--popover))',
    				foreground: 'hsl(var(--popover-foreground))'
    			},
    			primary: {
    				DEFAULT: 'hsl(var(--primary))',
    				foreground: 'hsl(var(--primary-foreground))'
    			},
    			secondary: {
    				DEFAULT: 'hsl(var(--secondary))',
    				foreground: 'hsl(var(--secondary-foreground))'
    			},
    			muted: {
    				DEFAULT: 'hsl(var(--muted))',
    				foreground: 'hsl(var(--muted-foreground))'
    			},
    			accent: {
    				DEFAULT: 'hsl(var(--accent))',
    				foreground: 'hsl(var(--accent-foreground))'
    			},
    			destructive: {
    				DEFAULT: 'hsl(var(--destructive))',
    				foreground: 'hsl(var(--destructive-foreground))'
    			},
    			input: 'hsl(var(--input))',
    			ring: 'hsl(var(--ring))',
    			chart: {
    				'1': 'hsl(var(--chart-1))',
    				'2': 'hsl(var(--chart-2))',
    				'3': 'hsl(var(--chart-3))',
    				'4': 'hsl(var(--chart-4))',
    				'5': 'hsl(var(--chart-5))'
    			},
    			sidebar: {
    				DEFAULT: 'hsl(var(--sidebar-background))',
    				foreground: 'hsl(var(--sidebar-foreground))',
    				primary: 'hsl(var(--sidebar-primary))',
    				'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
    				accent: 'hsl(var(--sidebar-accent))',
    				'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
    				border: 'hsl(var(--sidebar-border))',
    				ring: 'hsl(var(--sidebar-ring))'
    			}
    		},
    		fontFamily: {
    			archivo: ['var(--font-archivo)', 'sans-serif']
    		},
    		borderRadius: {
    			lg: 'var(--radius)',
    			md: 'calc(var(--radius) - 2px)',
    			sm: 'calc(var(--radius) - 4px)',
    			base: '5px'
    		},
    		boxShadow: {
    			light: '3px 3px 0px 0px #000',
    			dark: '3px 3px 0px 0px #000'
    		},
    		translate: {
    			boxShadowX: '3px',
    			boxShadowY: '3px',
    			reverseBoxShadowX: '-3px',
    			reverseBoxShadowY: '-3px',
    			boxShadowXsm: '1px',
    			boxShadowYsm: '1px',
    			reverseBoxShadowXsm: '-1px',
    			reverseBoxShadowYsm: '-1px'
    		},
    		fontWeight: {
    			base: '500',
    			heading: '700'
    		}
    	}
    },
	plugins: [require("tailwindcss-animate")],
}

