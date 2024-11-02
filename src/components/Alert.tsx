interface AlertProps {
  message: string;
  onclose(): void;
}

const Alert = ({ message, onclose }: AlertProps) => {
  return (
    <>
      <div
        className={`alert alert-warning alert-dismissible fade show`}
        role="alert"
      >
        {message}
        <button
          type="button"
          className="btn-close"
          aria-label="Close"
          onClick={onclose}
        ></button>
      </div>
    </>
  );
};

export default Alert;
