import React from 'react';
import { Link } from 'react-router-dom';
import { PlusCircle, CreditCard, Share2, Users, PieChart } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/Card';
import Button from '../components/ui/Button';
import { useAuth } from '../contexts/AuthContext';

const DashboardPage: React.FC = () => {
  const { user } = useAuth();
  
  // Mock data
  const stats = {
    totalCards: 3,
    activeShares: 28,
    totalScans: 142,
    teamSize: 1,
  };
  
  const recentActivity = [
    { type: 'scan', cardName: 'Marketing Director Card', time: '2 hours ago' },
    { type: 'edit', cardName: 'Conference Networking Card', time: '1 day ago' },
    { type: 'share', cardName: 'Marketing Director Card', time: '3 days ago' },
  ];
  
  const popularCards = [
    { 
      id: '1', 
      title: 'Marketing Director Card', 
      theme: 'modern',
      scans: 87, 
      lastUsed: '2 days ago',
    },
    { 
      id: '2', 
      title: 'Conference Networking Card', 
      theme: 'elegant',
      scans: 42, 
      lastUsed: '1 week ago',
    },
    { 
      id: '3', 
      title: 'Client Meeting Card', 
      theme: 'classic',
      scans: 13, 
      lastUsed: '3 weeks ago',
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
          <p className="mt-1 text-sm text-gray-600">
            Welcome back, {user?.name}
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

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center">
              <div className="p-2 rounded-full bg-primary-100">
                <CreditCard className="h-6 w-6 text-primary-700" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-500">Total Cards</p>
                <h3 className="text-2xl font-bold text-gray-900">{stats.totalCards}</h3>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center">
              <div className="p-2 rounded-full bg-secondary-100">
                <Share2 className="h-6 w-6 text-secondary-700" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-500">Active Shares</p>
                <h3 className="text-2xl font-bold text-gray-900">{stats.activeShares}</h3>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center">
              <div className="p-2 rounded-full bg-accent-100">
                <PieChart className="h-6 w-6 text-accent-700" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-500">Total Scans</p>
                <h3 className="text-2xl font-bold text-gray-900">{stats.totalScans}</h3>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center">
              <div className="p-2 rounded-full bg-gray-100">
                <Users className="h-6 w-6 text-gray-700" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-500">Team Size</p>
                <h3 className="text-2xl font-bold text-gray-900">{stats.teamSize}</h3>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Main content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Popular Cards */}
        <div className="lg:col-span-2">
          <Card>
            <CardHeader className="pb-2">
              <div className="flex justify-between items-center">
                <CardTitle>Your Popular Cards</CardTitle>
                <Link to="/cards" className="text-sm font-medium text-primary-600 hover:text-primary-700">
                  View all cards
                </Link>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {popularCards.map((card) => (
                  <div 
                    key={card.id}
                    className="flex items-center justify-between p-3 bg-gray-50 rounded-md hover:bg-gray-100 transition-colors"
                  >
                    <div className="flex items-center">
                      <div className={`w-2 h-10 rounded-l-md ${getThemeColor(card.theme)}`}></div>
                      <div className="ml-3">
                        <h4 className="font-medium text-gray-900">{card.title}</h4>
                        <p className="text-xs text-gray-500">Last used {card.lastUsed}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="text-right">
                        <span className="text-sm font-medium text-gray-900">{card.scans}</span>
                        <p className="text-xs text-gray-500">scans</p>
                      </div>
                      <Link to={`/cards/${card.id}`}>
                        <Button variant="outline" size="sm">
                          View
                        </Button>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Recent Activity */}
        <div>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle>Recent Activity</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentActivity.map((activity, index) => (
                  <div key={index} className="flex">
                    <div className={`
                      mt-1 w-8 h-8 rounded-full flex items-center justify-center
                      ${activity.type === 'scan' ? 'bg-primary-100 text-primary-700' : 
                        activity.type === 'edit' ? 'bg-secondary-100 text-secondary-700' : 
                        'bg-accent-100 text-accent-700'}
                    `}>
                      {activity.type === 'scan' ? (
                        <PieChart className="h-4 w-4" />
                      ) : activity.type === 'edit' ? (
                        <CreditCard className="h-4 w-4" />
                      ) : (
                        <Share2 className="h-4 w-4" />
                      )}
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-medium text-gray-900">
                        {activity.type === 'scan' 
                          ? 'Someone scanned your card' 
                          : activity.type === 'edit' 
                          ? 'You edited a card' 
                          : 'You shared a card'}
                      </p>
                      <div className="mt-1 flex items-center">
                        <p className="text-xs text-gray-500">{activity.cardName}</p>
                        <span className="mx-1 text-gray-300">•</span>
                        <p className="text-xs text-gray-500">{activity.time}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Quick Links */}
          <Card className="mt-6">
            <CardHeader className="pb-2">
              <CardTitle>Quick Links</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-3">
                <Link to="/cards">
                  <Button variant="outline" fullWidth leftIcon={<CreditCard size={16} />}>
                    My Cards
                  </Button>
                </Link>
                <Link to="/team">
                  <Button variant="outline" fullWidth leftIcon={<Users size={16} />}>
                    Team
                  </Button>
                </Link>
                <Link to="/analytics">
                  <Button variant="outline" fullWidth leftIcon={<PieChart size={16} />}>
                    Analytics
                  </Button>
                </Link>
                <Link to="/settings">
                  <Button variant="outline" fullWidth>
                    Settings
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
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

export default DashboardPage;