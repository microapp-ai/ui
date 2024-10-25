/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./src/**/*.{js,ts,jsx,tsx}", // Adjust to match your folder structure
    "./components/**/*.{js,ts,jsx,tsx}", // For shadcn components
    "./.storybook/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 12px)",
      },
      colors: {
        background: "hsl(var(--background))",
        foreground: {
          DEFAULT: "hsl(var(--foreground))",
          border: "hsl(var(--foreground-border))",
          focusRing: "hsl(var(--foreground-focus-ring))",
          onActionableDestructive:
            "hsl(var(--foreground-onactionable-destructive))",
          onActionableSecondary:
            "hsl(var(--foreground-onactionable-secondary))",
          onActionablePrimary: "hsl(var(--foreground-onactionable-primary))",
          muted: "hsl(var(--foreground-muted))",
          subtle: "hsl(var(--foreground-subtle))",
          trioPrimary: "hsl(var(--foreground-trio-primary))",
          ratingStar: "hsl(var(--foreground-rating-star))",
          hoverActionable: "hsl(var(--foreground-hover-actionable))",
          hoverBorder: "hsl(var(--foreground-hover-border))",
          activeActionable: "hsl(var(--foreground-active-actionable))",
          actionable: "hsl(var(--foreground-actionable))",
          statusWarningSecondary:
            "hsl(var(--foreground-status-warningsecondary))",
          destructive: "hsl(var(--foreground-destructive))",
          statusPositiveSecondary:
            "hsl(var(--foreground-status-positivesecondary))",
          statusErrorSecondary: "hsl(var(--foreground-status-errorsecondary))",
          statusInfoSecondary: "hsl(var(--foreground-status-infosecondary))",
          statusNeutralSecondary:
            "hsl(var(--foreground-status-neutralsecondary))",
          mutedAccent: "hsl(var(--foreground-muted-accent))",
          mutedHigherContrast: "hsl(var(--foreground-muted-highercontrast))",
        },
        surface: {
          hoverActionableDestructive:
            "hsl(var(--surface-hoveractionable-destructive))",
          actionableDestructive: "hsl(var(--surface-actionable-destructive))",
          accent: "hsl(var(--surface-accent))",
          hoverActionableSecondary:
            "hsl(var(--surface-hoveractionable-secondary))",
          actionableSecondary: "hsl(var(--surface-actionable-secondary))",
          actionablePrimary: "hsl(var(--surface-actionable-primary))",
          hoverActionablePrimary: "hsl(var(--surface-hoveractionable-primary))",
          muted: "hsl(var(--surface-muted))",
          backgroundPrimary: "hsl(var(--surface-background-primary))",
          backgroundSecondary: "hsl(var(--surface-background-secondary))",
          backgroundTertiary: "hsl(var(--surface-background-tertiary))",
          backgroundQuaternary: "hsl(var(--surface-background-quaternary))",
          backgroundAccent: "hsl(var(--surface-background-accent))",
          activeActionablePrimary:
            "hsl(var(--surface-active-actionableprimary))",
          activeActionableSecondary:
            "hsl(var(--surface-active-actionablesecondary))",
          appIconBlue: "hsl(var(--surface--appicon-blue))",
          appIconOrange: "hsl(var(--surface--appicon-orange))",
          activeActionableDestructive:
            "hsl(var(--surface-active-actionabledestructive))",
          statusNeutralPrimary: "hsl(var(--surface-status-neutralprimary))",
          statusWarningSecondary: "hsl(var(--surface-status-warningsecondary))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        actionable: {
          secondary: {
            DEFAULT: "hsl(var(--actionable-secondary))",
            hover: "hsl(var(--actionable-secondary-hover))",
          },
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          1: "hsl(var(--chart-1))",
          2: "hsl(var(--chart-2))",
          3: "hsl(var(--chart-3))",
          4: "hsl(var(--chart-4))",
          5: "hsl(var(--chart-5))",
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
