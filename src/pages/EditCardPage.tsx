import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import CardCreator from '../components/cards/CardCreator';
import { BusinessCard } from '../types';

const EditCardPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [card, setCard] = useState<BusinessCard | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCard = async () => {
      try {
        setIsLoading(true);
        
        // In a real app, you would make an API call to fetch the card
        // Simulating API call with timeout
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        // Mock data for the card
        const mockCard: BusinessCard = {
          id: id || '1',
          userId: 'user1',
          title: 'Marketing Director Card',
          theme: 'modern',
          isPublic: true,
          createdAt: new Date('2025-01-15'),
          updatedAt: new Date('2025-03-20'),
          profileData: {
            fullName: 'Alex Johnson',
            title: 'Marketing Director',
            company: 'Acme Inc.',
            email: 'alex@example.com',
            phone: '+1 (555) 123-4567',
            website: 'www.example.com',
            address: '123 Business Ave, San Francisco, CA',
          },
        };
        
        setCard(mockCard);
      } catch (error) {
        console.error('Error fetching card:', error);
        setError('Failed to load the business card. Please try again.');
      } finally {
        setIsLoading(false);
      }
    };

    fetchCard();
  }, [id]);

  const handleSaveCard = async (cardData: Partial<BusinessCard>) => {
    try {
      setIsSubmitting(true);
      
      // In a real app, you would make an API call to update the card
      // Simulating API call with timeout
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Success - redirect to the cards page
      navigate('/cards');
      
    } catch (error) {
      console.error('Error updating card:', error);
      setError('Failed to update the business card. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary-600"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-md">
        <p>{error}</p>
        <button 
          onClick={() => navigate('/cards')}
          className="mt-2 text-sm font-medium text-red-700 hover:text-red-800"
        >
          Return to Cards
        </button>
      </div>
    );
  }

  if (!card) {
    return (
      <div className="bg-yellow-50 border border-yellow-200 text-yellow-700 px-4 py-3 rounded-md">
        <p>Card not found. It may have been deleted or you don't have permission to view it.</p>
        <button 
          onClick={() => navigate('/cards')}
          className="mt-2 text-sm font-medium text-yellow-700 hover:text-yellow-800"
        >
          Return to Cards
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Edit Business Card</h1>
        <p className="mt-1 text-sm text-gray-600">
          Update your digital business card details
        </p>
      </div>
      
      <CardCreator 
        onSave={handleSaveCard} 
        initialData={card}
      />
      
      {isSubmitting && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-xl">
            <div className="flex items-center space-x-4">
              <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-primary-600"></div>
              <p className="text-gray-700">Updating your business card...</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EditCardPage;