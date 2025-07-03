import React, { useState } from 'react';
import { Search, ChevronDown, ChevronUp, BookOpen, Video, MessageCircle, Mail } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/Card';
import Button from '../components/ui/Button';

const HelpPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    if (expandedFaq === index) {
      setExpandedFaq(null);
    } else {
      setExpandedFaq(index);
    }
  };

  const faqs = [
    {
      question: 'How do I create my first digital business card?',
      answer: 'To create your first digital business card, log in to your account and click on the "Create New Card" button on your dashboard. Follow the step-by-step wizard to customize your card with your personal information, choose a template, and add your branding elements. Once you\'re satisfied with your design, click "Save" to publish your card.',
    },
    {
      question: 'How do I share my digital business card?',
      answer: 'There are multiple ways to share your digital business card. You can share via QR code (which can be scanned by any smartphone camera), direct link (which can be sent via email, text, or social media), NFC tap (if you have an NFC-enabled device), or by embedding it on your website or email signature.',
    },
    {
      question: 'Can I create multiple business cards?',
      answer: 'Yes, depending on your subscription plan. The Free plan allows you to create 1 card, the Professional plan allows up to 5 cards, and the Business plan offers unlimited cards. This is useful if you want different cards for different purposes or roles.',
    },
    {
      question: 'How do I update my card information?',
      answer: 'To update your card information, go to the "My Cards" section, find the card you want to edit, and click the "Edit" button. Make your changes in the card editor, and click "Save" when you\'re done. Your card will be instantly updated, and anyone who accesses your card will see the new information.',
    },
    {
      question: 'What is NFC technology and how does it work with my card?',
      answer: 'NFC (Near Field Communication) allows you to share your digital business card by simply tapping your NFC-enabled device or card against someone else\'s smartphone. To set up NFC, go to the "Devices" section in your settings and follow the instructions to link your physical NFC card or device to your digital business card.',
    },
    {
      question: 'How do I track who has viewed my card?',
      answer: 'The Analytics section of your dashboard provides detailed information about who has viewed your card, when they viewed it, and what actions they took (like saving your contact information or visiting your website). This feature is available on Professional and Business plans.',
    },
    {
      question: 'How do I add team members to my account?',
      answer: 'If you have a Business plan, you can add team members by going to the "Team" section and clicking "Invite Team Member." Enter their email address and select their role (admin or member). They\'ll receive an invitation to join your team and can create their own cards under your account.',
    },
    {
      question: 'Can I customize the design of my card?',
      answer: 'Yes, you can customize the design of your card by choosing from our template library and then adjusting colors, fonts, and layout to match your personal or brand style. Professional and Business plans offer more advanced customization options, including custom CSS for complete control over your card\'s appearance.',
    },
  ];

  const filteredFaqs = faqs.filter(faq => 
    faq.question.toLowerCase().includes(searchQuery.toLowerCase()) || 
    faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const tutorials = [
    {
      title: 'Getting Started Guide',
      description: 'Learn the basics of creating and sharing your digital business card',
      icon: BookOpen,
      link: '#',
    },
    {
      title: 'Video Tutorials',
      description: 'Watch step-by-step video guides for all features',
      icon: Video,
      link: '#',
    },
    {
      title: 'Team Management',
      description: 'Learn how to set up and manage your team accounts',
      icon: MessageCircle,
      link: '#',
    },
    {
      title: 'Advanced Features',
      description: 'Discover advanced customization and integration options',
      icon: BookOpen,
      link: '#',
    },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Help Center</h1>
        <p className="mt-1 text-sm text-gray-600">
          Find answers to common questions and learn how to use our platform
        </p>
      </div>

      {/* Search */}
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Search className="h-5 w-5 text-gray-400" />
        </div>
        <input
          type="text"
          placeholder="Search for help..."
          className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-md leading-5 bg-white focus:outline-none focus:ring-primary-500 focus:border-primary-500 text-sm"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      {/* Quick Links */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {tutorials.map((tutorial, index) => {
          const Icon = tutorial.icon;
          return (
            <Card key={index} className="hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center">
                  <div className="p-3 rounded-full bg-primary-100 mb-4">
                    <Icon className="h-6 w-6 text-primary-700" />
                  </div>
                  <h3 className="font-medium text-gray-900 mb-1">{tutorial.title}</h3>
                  <p className="text-sm text-gray-600 mb-4">{tutorial.description}</p>
                  <a 
                    href={tutorial.link} 
                    className="text-sm font-medium text-primary-600 hover:text-primary-700"
                  >
                    Learn more
                  </a>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* FAQs */}
      <Card>
        <CardHeader>
          <CardTitle>Frequently Asked Questions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {filteredFaqs.length > 0 ? (
              filteredFaqs.map((faq, index) => (
                <div key={index} className="border border-gray-200 rounded-md overflow-hidden">
                  <button
                    className="flex justify-between items-center w-full px-4 py-3 text-left bg-white hover:bg-gray-50 focus:outline-none"
                    onClick={() => toggleFaq(index)}
                  >
                    <span className="font-medium text-gray-900">{faq.question}</span>
                    {expandedFaq === index ? (
                      <ChevronUp className="h-5 w-5 text-gray-500" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-gray-500" />
                    )}
                  </button>
                  {expandedFaq === index && (
                    <div className="px-4 py-3 bg-gray-50 border-t border-gray-200">
                      <p className="text-gray-700">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))
            ) : (
              <div className="text-center py-8">
                <p className="text-gray-600">No results found for "{searchQuery}"</p>
                <p className="text-sm text-gray-500 mt-2">Try a different search term or browse the categories above</p>
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Contact Support */}
      <Card>
        <CardHeader>
          <CardTitle>Still Need Help?</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <div className="p-2 rounded-full bg-primary-100">
                  <MessageCircle className="h-6 w-6 text-primary-700" />
                </div>
                <h3 className="ml-3 font-medium text-gray-900">Live Chat Support</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Chat with our support team for immediate assistance with your questions.
              </p>
              <Button>
                Start Chat
              </Button>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <div className="p-2 rounded-full bg-primary-100">
                  <Mail className="h-6 w-6 text-primary-700" />
                </div>
                <h3 className="ml-3 font-medium text-gray-900">Email Support</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Send us an email and we'll get back to you within 24 hours.
              </p>
              <Button variant="outline">
                Contact Support
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default HelpPage;