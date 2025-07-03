import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Share2, Download, QrCode, ArrowLeft } from 'lucide-react';
import Button from '../components/ui/Button';
import CardPreview from '../components/cards/CardPreview';
import { BusinessCard } from '../types';

const ViewCardPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [card, setCard] = useState<BusinessCard | null>(null);
  const [isLoading, setIsLoading] = useState(true);
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

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary-600"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full">
          <div className="text-center">
            <div className="bg-red-100 text-red-700 p-3 rounded-full inline-flex items-center justify-center mb-4">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
            </div>
            <h2 className="text-xl font-semibold mb-2">Error Loading Card</h2>
            <p className="text-gray-600 mb-4">{error}</p>
            <Link to="/">
              <Button leftIcon={<ArrowLeft size={16} />}>
                Return Home
              </Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  if (!card) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full">
          <div className="text-center">
            <div className="bg-yellow-100 text-yellow-700 p-3 rounded-full inline-flex items-center justify-center mb-4">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
            </div>
            <h2 className="text-xl font-semibold mb-2">Card Not Found</h2>
            <p className="text-gray-600 mb-4">This business card doesn't exist or has been removed.</p>
            <Link to="/">
              <Button leftIcon={<ArrowLeft size={16} />}>
                Return Home
              </Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-6">
          <Link to="/" className="inline-flex items-center text-primary-600 hover:text-primary-700">
            <ArrowLeft size={16} className="mr-1" />
            <span>Back to Home</span>
          </Link>
        </div>
        
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="p-6 border-b border-gray-200">
            <h1 className="text-2xl font-bold text-gray-900">{card.profileData.fullName}</h1>
            <p className="text-gray-600">{card.profileData.title} at {card.profileData.company}</p>
          </div>
          
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <CardPreview profileData={card.profileData} theme={card.theme} />
              </div>
              
              <div className="space-y-6">
                <div>
                  <h2 className="text-lg font-semibold mb-4">Share This Card</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Button leftIcon={<Share2 size={18} />} fullWidth>
                      Share Link
                    </Button>
                    <Button leftIcon={<QrCode size={18} />} variant="outline" fullWidth>
                      Show QR Code
                    </Button>
                    <Button leftIcon={<Download size={18} />} variant="outline" fullWidth>
                      Download vCard
                    </Button>
                  </div>
                </div>
                
                <div className="border-t border-gray-200 pt-6">
                  <h2 className="text-lg font-semibold mb-4">Contact Information</h2>
                  <div className="space-y-3">
                    <div>
                      <p className="text-sm text-gray-500">Email</p>
                      <p className="font-medium">{card.profileData.email}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Phone</p>
                      <p className="font-medium">{card.profileData.phone}</p>
                    </div>
                    {card.profileData.website && (
                      <div>
                        <p className="text-sm text-gray-500">Website</p>
                        <p className="font-medium">{card.profileData.website}</p>
                      </div>
                    )}
                    {card.profileData.address && (
                      <div>
                        <p className="text-sm text-gray-500">Address</p>
                        <p className="font-medium">{card.profileData.address}</p>
                      </div>
                    )}
                  </div>
                </div>
                
                <div className="border-t border-gray-200 pt-6">
                  <h2 className="text-lg font-semibold mb-4">Save Contact</h2>
                  <p className="text-gray-600 mb-4">Add this contact to your address book with one click.</p>
                  <Button variant="primary" fullWidth>
                    Save to Contacts
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewCardPage;