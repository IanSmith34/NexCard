import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CardCreator from '../components/cards/CardCreator';
import { BusinessCard } from '../types';

const CreateCardPage: React.FC = () => {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSaveCard = async (cardData: Partial<BusinessCard>) => {
    try {
      setIsSubmitting(true);
      
      // In a real app, you would make an API call to save the card
      // Simulating API call with timeout
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Generate a mock ID for the new card
      const newCardId = Date.now().toString();
      
      // Success - redirect to the cards page
      navigate('/cards');
      
    } catch (error) {
      console.error('Error creating card:', error);
      // Handle error state
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Create New Business Card</h1>
        <p className="mt-1 text-sm text-gray-600">
          Design your digital business card with our easy-to-use creator
        </p>
      </div>
      
      <CardCreator onSave={handleSaveCard} />
      
      {isSubmitting && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-xl">
            <div className="flex items-center space-x-4">
              <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-primary-600"></div>
              <p className="text-gray-700">Creating your business card...</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CreateCardPage;