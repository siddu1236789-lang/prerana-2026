interface SplashScreenProps {
  onComplete?: () => void;
}

export default function SplashScreen(_props: SplashScreenProps) {
  // No-op splash component kept for compatibility; props are accepted but ignored.
  return null;
}