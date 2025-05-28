import UploadForm from '../components/UploadForm';

export default function Dashboard() {
  return (
    <div className="min-h-screen p-8 bg-gray-100">
      <h1 className="text-2xl font-bold mb-4">Upload Project</h1>
      <UploadForm />
    </div>
  );
}
