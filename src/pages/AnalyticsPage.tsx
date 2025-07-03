import React, { useState } from 'react';
import { Calendar, PieChart, BarChart3, ArrowUpRight, ArrowDownRight, Eye, QrCode, Share2 } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/Card';
import Button from '../components/ui/Button';

const AnalyticsPage: React.FC = () => {
  const [dateRange, setDateRange] = useState<'7d' | '30d' | '90d' | 'all'>('30d');
  
  // Mock analytics data
  const analyticsData = {
    totalViews: 342,
    viewsChange: 18.2,
    totalScans: 156,
    scansChange: -5.3,
    totalShares: 64,
    sharesChange: 12.7,
    popularCards: [
      { id: '1', title: 'Marketing Director Card', views: 187, scans: 87 },
      { id: '2', title: 'Conference Networking Card', views: 98, scans: 42 },
      { id: '3', title: 'Client Meeting Card', views: 57, scans: 27 },
    ],
    viewsByDay: [
      { date: '2025-03-01', views: 12 },
      { date: '2025-03-02', views: 8 },
      { date: '2025-03-03', views: 15 },
      { date: '2025-03-04', views: 22 },
      { date: '2025-03-05', views: 18 },
      { date: '2025-03-06', views: 24 },
      { date: '2025-03-07', views: 16 },
      { date: '2025-03-08', views: 14 },
      { date: '2025-03-09', views: 19 },
      { date: '2025-03-10', views: 21 },
    ],
    scansByLocation: [
      { location: 'United States', count: 78 },
      { location: 'United Kingdom', count: 24 },
      { location: 'Canada', count: 18 },
      { location: 'Germany', count: 12 },
      { location: 'Australia', count: 9 },
      { location: 'Other', count: 15 },
    ],
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Analytics</h1>
          <p className="mt-1 text-sm text-gray-600">
            Track the performance of your digital business cards
          </p>
        </div>
        <div className="mt-4 sm:mt-0">
          <div className="inline-flex rounded-md shadow-sm">
            <button
              type="button"
              className={`relative inline-flex items-center px-3 py-2 text-sm font-medium rounded-l-md ${
                dateRange === '7d'
                  ? 'bg-primary-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-50'
              }`}
              onClick={() => setDateRange('7d')}
            >
              7 days
            </button>
            <button
              type="button"
              className={`relative inline-flex items-center px-3 py-2 text-sm font-medium ${
                dateRange === '30d'
                  ? 'bg-primary-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-50'
              }`}
              onClick={() => setDateRange('30d')}
            >
              30 days
            </button>
            <button
              type="button"
              className={`relative inline-flex items-center px-3 py-2 text-sm font-medium ${
                dateRange === '90d'
                  ? 'bg-primary-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-50'
              }`}
              onClick={() => setDateRange('90d')}
            >
              90 days
            </button>
            <button
              type="button"
              className={`relative inline-flex items-center px-3 py-2 text-sm font-medium rounded-r-md ${
                dateRange === 'all'
                  ? 'bg-primary-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-50'
              }`}
              onClick={() => setDateRange('all')}
            >
              All time
            </button>
          </div>
        </div>
      </div>

      {/* Analytics Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex justify-between items-start">
              <div className="flex items-center">
                <div className="p-2 rounded-full bg-primary-100">
                  <Eye className="h-6 w-6 text-primary-700" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-500">Total Views</p>
                  <h3 className="text-2xl font-bold text-gray-900">{analyticsData.totalViews}</h3>
                </div>
              </div>
              <div className={`flex items-center ${analyticsData.viewsChange >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                {analyticsData.viewsChange >= 0 ? (
                  <ArrowUpRight className="h-4 w-4 mr-1" />
                ) : (
                  <ArrowDownRight className="h-4 w-4 mr-1" />
                )}
                <span className="text-sm font-medium">{Math.abs(analyticsData.viewsChange)}%</span>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6">
            <div className="flex justify-between items-start">
              <div className="flex items-center">
                <div className="p-2 rounded-full bg-secondary-100">
                  <QrCode className="h-6 w-6 text-secondary-700" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-500">Total Scans</p>
                  <h3 className="text-2xl font-bold text-gray-900">{analyticsData.totalScans}</h3>
                </div>
              </div>
              <div className={`flex items-center ${analyticsData.scansChange >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                {analyticsData.scansChange >= 0 ? (
                  <ArrowUpRight className="h-4 w-4 mr-1" />
                ) : (
                  <ArrowDownRight className="h-4 w-4 mr-1" />
                )}
                <span className="text-sm font-medium">{Math.abs(analyticsData.scansChange)}%</span>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6">
            <div className="flex justify-between items-start">
              <div className="flex items-center">
                <div className="p-2 rounded-full bg-accent-100">
                  <Share2 className="h-6 w-6 text-accent-700" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-500">Total Shares</p>
                  <h3 className="text-2xl font-bold text-gray-900">{analyticsData.totalShares}</h3>
                </div>
              </div>
              <div className={`flex items-center ${analyticsData.sharesChange >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                {analyticsData.sharesChange >= 0 ? (
                  <ArrowUpRight className="h-4 w-4 mr-1" />
                ) : (
                  <ArrowDownRight className="h-4 w-4 mr-1" />
                )}
                <span className="text-sm font-medium">{Math.abs(analyticsData.sharesChange)}%</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Main Analytics Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Views Over Time Chart */}
        <div className="lg:col-span-2">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle>Views Over Time</CardTitle>
              <Button variant="outline" size="sm" leftIcon={<Calendar size={16} />}>
                Export
              </Button>
            </CardHeader>
            <CardContent>
              <div className="h-80 w-full">
                {/* In a real app, you would use a chart library like Chart.js or Recharts */}
                <div className="h-full w-full bg-gray-50 rounded-md flex items-center justify-center">
                  <div className="text-center">
                    <BarChart3 className="h-12 w-12 text-gray-400 mx-auto mb-2" />
                    <p className="text-gray-500">Views chart would be displayed here</p>
                    <p className="text-sm text-gray-400 mt-1">Using a chart library like Chart.js</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Popular Cards */}
        <div>
          <Card>
            <CardHeader>
              <CardTitle>Popular Cards</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {analyticsData.popularCards.map((card, index) => (
                  <div 
                    key={card.id}
                    className="flex items-center justify-between p-3 bg-gray-50 rounded-md"
                  >
                    <div className="flex items-center">
                      <div className="flex items-center justify-center h-8 w-8 rounded-full bg-gray-200 text-gray-600 font-medium">
                        {index + 1}
                      </div>
                      <div className="ml-3">
                        <p className="font-medium text-gray-900 text-sm">{card.title}</p>
                        <div className="flex items-center mt-1">
                          <Eye className="h-3 w-3 text-gray-400" />
                          <span className="text-xs text-gray-500 ml-1">{card.views} views</span>
                          <QrCode className="h-3 w-3 text-gray-400 ml-2" />
                          <span className="text-xs text-gray-500 ml-1">{card.scans} scans</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Geographic Distribution */}
          <Card className="mt-6">
            <CardHeader>
              <CardTitle>Geographic Distribution</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-48 w-full">
                {/* In a real app, you would use a chart library like Chart.js or Recharts */}
                <div className="h-full w-full bg-gray-50 rounded-md flex items-center justify-center">
                  <div className="text-center">
                    <PieChart className="h-10 w-10 text-gray-400 mx-auto mb-2" />
                    <p className="text-gray-500">Distribution chart would be displayed here</p>
                  </div>
                </div>
              </div>
              <div className="mt-4 space-y-2">
                {analyticsData.scansByLocation.slice(0, 3).map((item) => (
                  <div key={item.location} className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">{item.location}</span>
                    <div className="flex items-center">
                      <span className="text-sm font-medium">{item.count}</span>
                      <span className="text-xs text-gray-500 ml-1">scans</span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsPage;