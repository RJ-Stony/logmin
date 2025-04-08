export const SocialButtonContent = ({
  iconSrc,
  alt,
  label,
  dividerColor = "rgba(0,0,0,0.2)",
  iconBoxWidth = 40,
}: {
  iconSrc: string;
  alt: string;
  label: string;
  dividerColor?: string;
  iconBoxWidth?: number;
}) => (
  <div
    style={{
      display: "flex",
      alignItems: "center",
      width: "100%",
      justifyContent: "flex-start",
      gap: "0.75rem",
    }}
  >
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "0.75rem",
        width: `${iconBoxWidth}px`,
        justifyContent: "flex-start",
      }}
    >
      <img src={iconSrc} alt={alt} width={20} height={20} />
      <span
        style={{
          height: 20,
          width: 1,
          backgroundColor: dividerColor,
        }}
      />
    </div>
    <div style={{ flex: 1 }}>
      <span>{label}</span>
    </div>
  </div>
);
