// components/Modal.tsx
import React from 'react';

interface ModalProps {
  selectedDate: Date;
  onClose: () => void;
}

function Modal({ selectedDate, onClose }: ModalProps) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
      <div className="bg-white dark:bg-[#2c2c2c] p-6 rounded-md shadow-lg text-center">
        <h3 className="text-xl font-semibold">Date Selected</h3>
        <p className="mt-2 text-lg">{selectedDate.toLocaleDateString()}</p>
        <button
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          onClick={() => { 
            onClose();   // Close the modal
          }}
        >
          Close
        </button>
      </div>
    </div>
  );
}

export default Modal;