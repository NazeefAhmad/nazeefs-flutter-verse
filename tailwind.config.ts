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
				heading: ['Space Grotesk', 'sans-serif'],
				body: ['Inter', 'sans-serif'],
			},
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))',
					glow: 'hsl(var(--primary-glow))'
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
				}
			},
			backgroundImage: {
				'gradient-primary': 'var(--gradient-primary)',
				'gradient-secondary': 'var(--gradient-secondary)', 
				'gradient-hero': 'var(--gradient-hero)',
				'gradient-card': 'var(--gradient-card)',
			},
			boxShadow: {
				'elegant': 'var(--shadow-elegant)',
				'glow': 'var(--shadow-glow)',
				'card-dark': 'var(--shadow-card)',
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
				float: {
					'0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
					'25%': { transform: 'translateY(-10px) rotate(1deg)' },
					'50%': { transform: 'translateY(-20px) rotate(0deg)' },
					'75%': { transform: 'translateY(-10px) rotate(-1deg)' },
				},
				'float-alt': {
					'0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
					'33%': { transform: 'translateY(-15px) rotate(-1deg)' },
					'66%': { transform: 'translateY(-8px) rotate(1deg)' },
				},
				glow: {
					'0%': { 
						boxShadow: '0 0 20px hsl(var(--primary) / 0.5), 0 0 40px hsl(var(--primary) / 0.3)',
						transform: 'scale(1)' 
					},
					'50%': { 
						boxShadow: '0 0 40px hsl(var(--primary) / 0.8), 0 0 80px hsl(var(--primary) / 0.4)',
						transform: 'scale(1.02)' 
					},
					'100%': { 
						boxShadow: '0 0 20px hsl(var(--primary) / 0.5), 0 0 40px hsl(var(--primary) / 0.3)',
						transform: 'scale(1)' 
					},
				},
				'pulse-glow': {
					'0%, 100%': { 
						boxShadow: '0 0 10px hsl(var(--secondary) / 0.4)',
						opacity: '0.8' 
					},
					'50%': { 
						boxShadow: '0 0 30px hsl(var(--secondary) / 0.8)',
						opacity: '1' 
					},
				},
				'fade-in': {
					'0%': { opacity: '0', transform: 'translateY(20px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' },
				},
				'slide-up': {
					'0%': { opacity: '0', transform: 'translateY(30px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' },
				},
				'matrix-rain': {
					'0%': { transform: 'translateY(-100vh)', opacity: '0' },
					'10%': { opacity: '1' },
					'90%': { opacity: '1' },
					'100%': { transform: 'translateY(100vh)', opacity: '0' },
				},
				'neural-pulse': {
					'0%, 100%': { strokeDasharray: '0,100' },
					'50%': { strokeDasharray: '100,0' },
				},
				'quantum-spin': {
					'0%': { transform: 'rotate(0deg) scale(1)' },
					'25%': { transform: 'rotate(90deg) scale(1.1)' },
					'50%': { transform: 'rotate(180deg) scale(1)' },
					'75%': { transform: 'rotate(270deg) scale(0.9)' },
					'100%': { transform: 'rotate(360deg) scale(1)' },
				},
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'float': 'float 6s ease-in-out infinite',
				'float-alt': 'float-alt 8s ease-in-out infinite',
				'glow': 'glow 3s ease-in-out infinite alternate',
				'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
				'fade-in': 'fade-in 0.6s ease-out',
				'slide-up': 'slide-up 0.6s ease-out',
				'matrix-rain': 'matrix-rain 4s linear infinite',
				'neural-pulse': 'neural-pulse 3s ease-in-out infinite',
				'quantum-spin': 'quantum-spin 8s linear infinite',
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
