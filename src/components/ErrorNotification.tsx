type NotificationProps = {
  isError: boolean;
  errors: string[];
  setIsError: (val: boolean) => void;
};

export const ErrorNotification: React.FC<NotificationProps> = ({
  isError,
  errors,
  setIsError,
}) => {
  return (
    <div
      data-cy="ErrorNotification"
      className={`notification is-danger is-light has-text-weight-normal ${isError ? '' : 'hidden'}`}
    >
      <button
        data-cy="HideErrorButton"
        type="button"
        className="delete"
        onClick={() => {
          setIsError(false);
        }}
      />
      {/* show only one message at a time */}
      {errors.map(error => (
        <>
          {error}
          <br />
        </>
      ))}
    </div>
  );
};
