const Card = ({ children, className, align }) => {
  return (
    <div className={`${className} ${align === 'center' ? 'text-center' : 'text-left'} text-text shadow-xl rounded-3xl p-4`}>
      {children}
    </div>
  );
};

const CardTitle = ({ children, className }) => {
  return (
    <h3 className={`${className} text-xl font-bold mb-3`}>
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
