const Card = ({ children, className, align, padding = 'p-4', withShadow = true }) => {
  return (
    <div className={`text-text rounded-3xl ${className} ${padding} ${align === 'center' ? 'text-center' : 'text-left'} ${withShadow ? 'shadow-xl' : ''}`}>
      {children}
    </div>
  );
};

const CardTitle = ({ children, className, size = 'text-xl' }) => {
  return (
    <h3 className={`font-bold mb-3 ${className} ${size}`}>
      {children}
    </h3>
  );
};

const CardText = ({ children, className }) => {
  return (
    <p className={`${className}`}>
      {children}
    </p>
  );
};

export { Card, CardTitle, CardText };
