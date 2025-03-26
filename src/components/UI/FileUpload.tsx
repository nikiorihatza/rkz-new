import React from 'react';
import { Upload } from 'lucide-react';

interface FileUploadProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label: string;
  error?: string;
}

export const FileUpload: React.FC<FileUploadProps> = ({
  label,
  error,
  className = '',
  ...props
}) => {
  return (
    <div className="space-y-1">
      <label className="block text-sm font-medium text-dark-700 dark:text-secondary-300">
        {label}
        {props.required && <span className="text-accent-500 ml-1">*</span>}
      </label>
      <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-dashed rounded-md border-gray-300 dark:border-dark-600 bg-gray-50 dark:bg-dark-900/50">
        <div className="space-y-1 text-center">
          <Upload className="mx-auto h-12 w-12 text-primary-500" />
          <div className="flex text-sm text-gray-600 dark:text-secondary-400">
            <label
              htmlFor="file-upload"
              className="relative cursor-pointer rounded-md font-medium text-primary-600 dark:text-primary-400 hover:text-primary-500 dark:hover:text-primary-300"
            >
              <span>Datei auswählen</span>
              <input
                id="file-upload"
                type="file"
                className="sr-only"
                {...props}
              />
            </label>
            <p className="pl-1">oder hierher ziehen</p>
          </div>
          <p className="text-xs text-gray-500 dark:text-secondary-500">
            PDF, DOC bis zu 10MB
          </p>
        </div>
      </div>
      {error && (
        <p className="text-sm text-accent-600 dark:text-accent-400">{error}</p>
      )}
    </div>
  );
};