"use client";

import * as React from "react";
import { Upload, X } from "lucide-react";
import { cn } from "@/lib/utils";

export interface FileUploadProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "type" | "value" | "onChange"> {
  onValueChange?: (files: File[]) => void;
  maxSize?: number; // in MB
  maxFiles?: number;
}

const FileUpload = React.forwardRef<HTMLInputElement, FileUploadProps>(
  ({ className, onValueChange, maxSize = 2, maxFiles = 1, accept, ...props }, ref) => {
    const [files, setFiles] = React.useState<File[]>([]);
    const [error, setError] = React.useState<string>("");
    const inputRef = React.useRef<HTMLInputElement>(null);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const selectedFiles = Array.from(e.target.files || []);
      setError("");

      // Validate file size
      const oversizedFiles = selectedFiles.filter(
        (file) => file.size > maxSize * 1024 * 1024
      );
      if (oversizedFiles.length > 0) {
        setError(`File size should not exceed ${maxSize}MB`);
        return;
      }

      // Validate file count
      if (selectedFiles.length > maxFiles) {
        setError(`Maximum ${maxFiles} file(s) allowed`);
        return;
      }

      setFiles(selectedFiles);
      onValueChange?.(selectedFiles);
    };

    const removeFile = (index: number) => {
      const newFiles = files.filter((_, i) => i !== index);
      setFiles(newFiles);
      onValueChange?.(newFiles);
      if (inputRef.current) {
        inputRef.current.value = "";
      }
    };

    return (
      <div className="w-full">
        <div
          className={cn(
            "relative flex min-h-[120px] cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-input bg-background px-6 py-10 text-center transition-colors hover:border-primary/50",
            className
          )}
          onClick={() => inputRef.current?.click()}
        >
          <input
            ref={inputRef}
            type="file"
            className="hidden"
            onChange={handleFileChange}
            accept={accept}
            multiple={maxFiles > 1}
            {...props}
          />
          <Upload className="mb-3 h-8 w-8 text-muted-foreground" />
          <p className="text-sm text-muted-foreground">
            Click to upload or drag and drop
          </p>
          <p className="mt-1 text-xs text-muted-foreground">
            {accept ? `Accepted formats: ${accept}` : "All file types accepted"} (Max {maxSize}MB)
          </p>
        </div>

        {error && (
          <p className="mt-2 text-sm text-destructive">{error}</p>
        )}

        {files.length > 0 && (
          <div className="mt-4 space-y-2">
            {files.map((file, index) => (
              <div
                key={index}
                className="flex items-center justify-between rounded-md border border-input bg-background px-3 py-2"
              >
                <div className="flex items-center space-x-2 overflow-hidden">
                  <Upload className="h-4 w-4 shrink-0 text-muted-foreground" />
                  <span className="truncate text-sm">{file.name}</span>
                  <span className="shrink-0 text-xs text-muted-foreground">
                    ({(file.size / 1024 / 1024).toFixed(2)} MB)
                  </span>
                </div>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    removeFile(index);
                  }}
                  className="ml-2 rounded-sm p-1 hover:bg-accent"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }
);

FileUpload.displayName = "FileUpload";

export { FileUpload };


