import logoImage from "figma:asset/93110cfd126655d27955a2c259b80f933709e591.png";

interface LaunchOSLogoProps {
  size?: number;
  withGlow?: boolean;
  className?: string;
}

export function LaunchOSLogo({
  size = 40,
  withGlow = false,
  className = "",
}: LaunchOSLogoProps) {
  return (
    <div
      className={`relative inline-flex items-center justify-center ${className}`}
      style={{ width: size, height: size }}
    >
      {withGlow && (
        <>
          {/* Enhanced neon glow effect - cyan/blue gradient */}
          <div
            className="absolute inset-0 rounded-lg"
            style={{
              background:
                "linear-gradient(135deg, #00D9FF 0%, #0EA5E9 100%)",
              filter: "blur(50px)",
              opacity: 0.5,
              transform: "scale(1.2)",
            }}
          ></div>
          <div
            className="absolute inset-0 rounded-lg"
            style={{
              background:
                "linear-gradient(135deg, #00D9FF 0%, #0EA5E9 100%)",
              filter: "blur(40px)",
              opacity: 0.4,
            }}
          ></div>
        </>
      )}

      {/* LaunchOS Logo Image */}
      <img
        src={logoImage}
        alt="LaunchOS Logo"
        className="relative object-contain"
        style={{
          width: size,
          height: size,
          filter: withGlow
            ? "drop-shadow(0 0 10px rgba(0, 217, 255, 0.3))"
            : "none",
        }}
      />
    </div>
  );
}