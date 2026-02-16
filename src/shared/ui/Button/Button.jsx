import "./Button.scss";

export const Button = ({ 
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
      {icon && <span className="btn__icon">{icon}</span>}
      <span className="btn__text">{children}</span>
    </>
  );

  if (href) {
    return (
      <a 
        href={href}
        className={`btn btn--${variant} ${className}`}
        target={target}
        rel={target === "_blank" ? "noopener noreferrer" : undefined}
      >
        {buttonContent}
      </a>
    );
  }

  return (
    <button 
      className={`btn btn--${variant} ${className}`}
      onClick={onClick}
    >
      {buttonContent}
    </button>
  );
};