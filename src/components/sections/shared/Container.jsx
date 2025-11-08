const Container = ({ 
  children, 
  className = "",
  padded = true,
  bordered = false,
  ...props 
}) => {
  const baseStyles = "bg-white rounded-2xl";
  const padding = padded ? "py-6" : "";
  const border = bordered ? "border-4 border-blue-200" : "";
  
  return (
    <div 
      className={`${baseStyles} ${padding} ${border} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

export default Container;