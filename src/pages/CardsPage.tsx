import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { PlusCircle, Search } from 'lucide-react';
import Button from '../components/ui/Button';
import CardList from '../components/cards/CardList';
import { BusinessCard, CardTheme, ProfileData } from '../types';

const CardsPage: React.FC = () => {
  // Mock data for business cards
  const [cards, setCards] = useState<BusinessCard[]>([
    {
      id: '1',
      userId: 'user1',
      title: 'Marketing Director Card',
      theme: 'modern' as CardTheme,
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
      } as ProfileData,
    },
    {
      id: '2',
      userId: 'user1',
      title: 'Conference Networking Card',
      theme: 'elegant' as CardTheme,
      isPublic: true,
      createdAt: new Date('2025-02-10'),
      updatedAt: new Date('2025-03-15'),
      profileData: {
        fullName: 'Alex Johnson',
        title: 'Speaker & Consultant',
        company: 'Acme Inc.',
        email: 'alex@example.com',
        phone: '+1 (555) 123-4567',
      } as ProfileData,
    },
    {
      id: '3',
      userId: 'user1',
      title: 'Client Meeting Card',
      theme: 'classic' as CardTheme,
      isPublic: true,
      createdAt: new Date('2025-03-01'),
      updatedAt: new Date('2025-03-10'),
      profileData: {
        fullName: 'Alex Johnson',
        title: 'Account Manager',
        company: 'Acme Inc.',
        email: 'alex@example.com',
        phone: '+1 (555) 123-4567',
      } as ProfileData,
    },
  ]);

  const [searchTerm, setSearchTerm] = useState('');

  // Filter cards based on search term
  const filteredCards = cards.filter(
    (card) =>
      card.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      card.profileData.fullName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      card.profileData.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      card.profileData.company.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Delete card
  const handleDeleteCard = (id: string) => {
    if (window.confirm('Are you sure you want to delete this card?')) {
      setCards(cards.filter((card) => card.id !== id));
    }
  };

  // Duplicate card
  const handleDuplicateCard = (id: string) => {
    const cardToDuplicate = cards.find((card) => card.id === id);
    if (cardToDuplicate) {
      const newCard: BusinessCard = {
        ...cardToDuplicate,
        id: Date.now().toString(), // Generate a new ID
        title: `${cardToDuplicate.title} (Copy)`,
        createdAt: new Date(),
        updatedAt: new Date(),
      };
      setCards([...cards, newCard]);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">My Business Cards</h1>
          <p className="mt-1 text-sm text-gray-600">
            Manage your digital business cards
          </p>
        </div>
        <div className="mt-4 sm:mt-0">
          <Link to="/cards/create">
            <Button leftIcon={<PlusCircle size={18} />}>
              Create New Card
            </Button>
          </Link>
        </div>
      </div>

      {/* Search and filters */}
      <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
        <div className="relative flex-1">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="Search cards..."
            className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="flex space-x-3">
          <select
            className="block pl-3 pr-10 py-2 text-base border border-gray-300 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm rounded-md"
            defaultValue=""
          >
            <option value="" disabled>
              Sort by
            </option>
            <option value="newest">Newest</option>
            <option value="oldest">Oldest</option>
            <option value="name">Name</option>
          </select>
          <select
            className="block pl-3 pr-10 py-2 text-base border border-gray-300 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm rounded-md"
            defaultValue=""
          >
            <option value="" disabled>
              Filter by theme
            </option>
            <option value="all">All Themes</option>
            <option value="classic">Classic</option>
            <option value="modern">Modern</option>
            <option value="minimal">Minimal</option>
            <option value="bold">Bold</option>
            <option value="elegant">Elegant</option>
          </select>
        </div>
      </div>

      {/* Card List */}
      <CardList
        cards={filteredCards}
        onDelete={handleDeleteCard}
        onDuplicate={handleDuplicateCard}
      />
    </div>
  );
};

export default CardsPage;