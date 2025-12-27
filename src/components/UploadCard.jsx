export default function UploadCard() {
  return (
    <div className="card">
      <div className="card-title">Upload Resume (Optional)</div>

      <p style={{ color: "#9ca3af", fontSize: "14px", marginBottom: "14px" }}>
        Uploading is optional. Analysis uses pasted resume text.
      </p>

      <input type="file" />
    </div>
  );
}
