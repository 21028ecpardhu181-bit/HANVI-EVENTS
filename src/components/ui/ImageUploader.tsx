'use client';

import React, { useState, useRef } from 'react';
import { Upload, Image as ImageIcon, Check, X, RefreshCw } from 'lucide-react';
import { EditorialButton } from './EditorialButton';

interface ImageUploaderProps {
  onImageSelected?: (dataUrl: string) => void;
  currentImage?: string;
  label?: string;
}

export const ImageUploader: React.FC<ImageUploaderProps> = ({
  onImageSelected,
  currentImage,
  label = 'Upload Custom Image',
}) => {
  const [preview, setPreview] = useState<string | null>(currentImage || null);
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      processFile(file);
    }
  };

  const processFile = (file: File) => {
    if (!file.type.startsWith('image/')) {
      alert('Please select an image file (JPG, PNG, WebP).');
      return;
    }
    const reader = new FileReader();
    reader.onload = () => {
      const result = reader.result as string;
      setPreview(result);
      if (onImageSelected) {
        onImageSelected(result);
      }
    };
    reader.readAsDataURL(file);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files?.[0];
    if (file) {
      processFile(file);
    }
  };

  return (
    <div className="w-full flex flex-col items-center space-y-3">
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        accept="image/*"
        className="hidden"
      />

      <div
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        onClick={() => fileInputRef.current?.click()}
        className={`w-full min-h-[160px] border-2 border-dashed rounded-2xl p-6 flex flex-col items-center justify-center text-center cursor-pointer transition-all duration-300 ${
          isDragging
            ? 'border-[#B88A44] bg-[#B88A44]/10'
            : 'border-[#E8DDCD] bg-[#FCF9F5] hover:bg-[#F5ECDD]/50'
        }`}
      >
        {preview ? (
          <div className="relative w-full h-32 rounded-xl overflow-hidden group">
            <img src={preview} alt="Uploaded Preview" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 text-white">
              <RefreshCw className="w-5 h-5" />
              <span className="font-sans-ui text-xs uppercase font-semibold">Change Image</span>
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center">
            <div className="p-3 rounded-full bg-[#F5ECDD] text-[#B88A44] mb-2">
              <Upload className="w-6 h-6" />
            </div>
            <span className="font-serif-editorial text-lg text-[#34281F] font-medium">{label}</span>
            <span className="font-sans-narrative text-xs text-[#6E5D4F] mt-1">
              Drag & drop image here or <span className="text-[#B88A44] underline font-semibold">browse computer</span>
            </span>
            <span className="font-sans-ui text-[10px] uppercase tracking-wider text-[#6E5D4F]/70 mt-2">
              Supports JPG, PNG, WEBP
            </span>
          </div>
        )}
      </div>

      {preview && (
        <button
          type="button"
          onClick={() => {
            setPreview(null);
            if (onImageSelected) onImageSelected('');
          }}
          className="text-xs font-sans-ui uppercase text-red-600 hover:underline"
        >
          Remove Image
        </button>
      )}
    </div>
  );
};
