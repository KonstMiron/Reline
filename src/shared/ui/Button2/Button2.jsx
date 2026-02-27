import "./Button2.scss";

export const Button2 = ({ 
  children, 
  onClick, 
  variant = "primary", 
  className = "",
  href,
  icon,
  target
}) => {
  const buttonContent = (
    <>
      {icon && <span className="btn2__icon">{icon}</span>}
      <span className="btn2__text">{children}</span>
    </>
  );

  if (href) {
    return (
      <a 
        href={href}
        className={`btn2 btn2--${variant} ${className}`}
        target={target}
        rel={target === "_blank" ? "noopener noreferrer" : undefined}
      >
        {buttonContent}
      </a>
    );
  }

  return (
    <button 
      className={`btn2 btn2--${variant} ${className}`}
      onClick={onClick}
    >
      {buttonContent}
    </button>
  );
};