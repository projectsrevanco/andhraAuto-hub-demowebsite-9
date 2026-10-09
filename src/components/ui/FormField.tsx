import React from 'react';

interface FormFieldProps {
  label: string | React.ReactNode;
  id: string;
  name: string;
  type?: 'text' | 'email' | 'tel' | 'textarea' | 'select' | 'date' | 'time' | 'number';
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
  required?: boolean;
  placeholder?: string;
  options?: { value: string; label: string }[];
  rows?: number;
  error?: string;
}

export default function FormField({ 
  label, 
  id, 
  name, 
  type = 'text', 
  value, 
  onChange, 
  required = false,
  placeholder,
  options,
  rows = 4,
  error
}: FormFieldProps) {
  const baseClass = `form-input ${error ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : ''}`;

  return (
    <div>
      <label htmlFor={id} className="form-label">{label}</label>
      
      {type === 'textarea' ? (
        <textarea
          id={id}
          name={name}
          value={value}
          onChange={onChange}
          required={required}
          placeholder={placeholder}
          rows={rows}
          className={`${baseClass} resize-none`}
        />
      ) : type === 'select' ? (
        <div className="relative">
          <select
            id={id}
            name={name}
            value={value}
            onChange={onChange}
            required={required}
            className={`${baseClass} appearance-none cursor-pointer`}
          >
            <option value="" disabled>{placeholder || '-- Select --'}</option>
            {options?.map(opt => (
              <option key={opt.value} value={opt.value}>{opt.label}</option>
            ))}
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-500">
            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
            </svg>
          </div>
        </div>
      ) : (
        <input
          id={id}
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          required={required}
          placeholder={placeholder}
          className={baseClass}
        />
      )}
      {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
    </div>
  );
}
