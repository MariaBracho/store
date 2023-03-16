export default function Toast({
  message,
  showToast = false,
}: {
  message: string;
  showToast: boolean;
}) {
  return showToast ? (
    <div className="toast toast-start z-50">
      <div className="alert alert-success">
        <div>
          <p>{message}</p>
        </div>
      </div>
    </div>
  ) : null;
}
