import React from 'react';
import { Link } from 'react-router-dom';
import { Edit, Share, Trash2, Copy, QrCode } from 'lucide-react';
import { BusinessCard } from '../../types';
import { Card, CardContent } from '../ui/Card';
import Button from '../ui/Button';

interface CardListProps {
  cards: BusinessCard[];
  onDelete: (id: string) => void;
  onDuplicate: (id: string) => void;
}

const CardList: React.FC<CardListProps> = ({ cards, onDelete, onDuplicate }) => {
  if (cards.length === 0) {
    return (
      <div className="text-center py-12">
        <h3 className="text-lg font-medium text-gray-900 mb-2">You don't have any business cards yet</h3>
        <p className="text-gray-600 mb-6">Create your first digital business card to get started.</p>
        <Link to="/cards/create">
          <Button>Create New Card</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {cards.map((card) => (
        <Card key={card.id} className="overflow-hidden hover:shadow-lg transition-shadow">
          <div className={`h-2 ${getThemeColor(card.theme)}`} />
          <CardContent className="pt-5">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="font-medium text-gray-900">{card.title}</h3>
                <p className="text-sm text-gray-500">
                  {new Date(card.updatedAt).toLocaleDateString()}
                </p>
              </div>
              <span className="px-2 py-1 text-xs rounded bg-gray-100 text-gray-800 capitalize">
                {card.theme}
              </span>
            </div>
            
            <div className="flex items-center space-x-2 mb-4">
              <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
                {card.profileData.photo ? (
                  <img 
                    src={card.profileData.photo} 
                    alt={card.profileData.fullName}
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <span className="text-gray-500 font-medium">
                    {card.profileData.fullName.charAt(0)}
                  </span>
                )}
              </div>
              <div>
                <p className="font-medium">{card.profileData.fullName}</p>
                <p className="text-sm text-gray-600">{card.profileData.title}</p>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-2 mt-4">
              <Link to={`/cards/${card.id}/edit`}>
                <Button variant="outline" size="sm" leftIcon={<Edit size={16} />}>
                  Edit
                </Button>
              </Link>
              <Button variant="outline" size="sm" leftIcon={<Share size={16} />}>
                Share
              </Button>
              <Button variant="outline" size="sm" leftIcon={<QrCode size={16} />}>
                QR
              </Button>
              <Button 
                variant="ghost" 
                size="sm" 
                leftIcon={<Copy size={16} />}
                onClick={() => onDuplicate(card.id)}
              >
                Duplicate
              </Button>
              <Button 
                variant="ghost" 
                size="sm" 
                leftIcon={<Trash2 size={16} />}
                onClick={() => onDelete(card.id)}
                className="text-red-600 hover:bg-red-50"
              >
                Delete
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

// Helper function to get color based on theme
const getThemeColor = (theme: string): string => {
  switch (theme) {
    case 'classic':
      return 'bg-gray-600';
    case 'modern':
      return 'bg-primary-600';
    case 'minimal':
      return 'bg-gray-400';
    case 'bold':
      return 'bg-accent-600';
    case 'elegant':
      return 'bg-secondary-700';
    default:
      return 'bg-gray-600';
  }
};

export default CardList;