'use client';

import { useState } from 'react';

export default function UploadForm() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
      setPreview(URL.createObjectURL(selectedFile));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!title || !description || !file) {
      alert('All fields are required!');
      return;
    }

    console.log('Title:', title);
    console.log('Description:', description);
    console.log('File:', file.name);

    // 🔜 Later we'll upload to Cloudinary
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 rounded-xl shadow-md space-y-4 max-w-lg mx-auto"
    >
      <input
        type="text"
        placeholder="Project Title"
        className="w-full border px-4 py-2 rounded"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <textarea
        placeholder="Project Description"
        className="w-full border px-4 py-2 rounded resize-none"
        rows={4}
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <input
        type="file"
        accept="image/*,video/*"
        onChange={handleFileChange}
        className="w-full"
      />

      {preview && (
        <div className="mt-4">
          {file?.type.startsWith('video') ? (
            <video src={preview} controls className="w-full rounded-lg" />
          ) : (
            <img src={preview} alt="Preview" className="w-full rounded-lg" />
          )}
        </div>
      )}

      <button
        type="submit"
        className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
      >
        Upload
      </button>
    </form>
  );
}
