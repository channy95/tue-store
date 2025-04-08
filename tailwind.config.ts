
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			fontFamily: {
				sans: ['Pretendard Variable', 'sans-serif'],
				display: ['Clash Display', 'sans-serif'],
			},
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
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
				},
				tue: {
					'50': '#fdf6ed',
					'100': '#f7e8d1',
					'200': '#efcca2',
					'300': '#e6aa6b',
					'400': '#e08b41', // 메인 테라코타 색상
					'500': '#dd7226',
					'600': '#bd4c1a',
					'700': '#9c3618',
					'800': '#82291a',
					'900': '#6e2319',
					'950': '#3f0f09',
				},
				denim: {
					'50': '#f6f7fb',
					'100': '#eaecf6',
					'200': '#d5daec',
					'300': '#b3bdde',
					'400': '#8c9bcd',
					'500': '#6c7cbd', // 메인 데님 색상
					'600': '#545fa7',
					'700': '#464d89',
					'800': '#3c4271',
					'900': '#353a5e',
					'950': '#232438',
				},
				cream: {
					'50': '#fdf8f2',
					'100': '#f8ece0',
					'200': '#f2d9c0',
					'300': '#e9bd95',
					'400': '#dea170',
					'500': '#d28249',
					'600': '#c46c3d',
					'700': '#a35233',
					'800': '#844330',
					'900': '#6b3829',
					'950': '#3a1c13',
				},
				beige: {
					'50': '#f9f6f3',
					'100': '#f0e9e2',
					'200': '#e1d3c5', // 메인 베이지 색상
					'300': '#d0b9a2',
					'400': '#c09c7c',
					'500': '#b28562',
					'600': '#9c6d51',
					'700': '#825743',
					'800': '#6c493c',
					'900': '#5a3d33',
					'950': '#31201a',
				},
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-10px)' }
				},
				'fade-in': {
					'0%': { opacity: '0', transform: 'translateY(10px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				},
				'rotate-slow': {
					'0%': { transform: 'rotate(0deg)' },
					'100%': { transform: 'rotate(360deg)' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'float': 'float 6s ease-in-out infinite',
				'fade-in': 'fade-in 0.6s ease-out',
				'rotate-slow': 'rotate-slow 15s linear infinite'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
