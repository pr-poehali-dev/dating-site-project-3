import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import Icon from '@/components/ui/icon';

const profiles = [
  {
    id: 1,
    name: "Анна",
    age: 25,
    distance: "2 км",
    bio: "Люблю путешествовать и открывать новые места! Ищу интересного собеседника для совместных приключений.",
    photo: "/img/b5c0f84d-00be-41cc-82dc-0e2b779fb196.jpg",
    interests: ["Путешествия", "Фотография", "Йога"],
    verified: true,
    online: true
  },
  {
    id: 2,
    name: "Михаил",
    age: 27,
    distance: "5 км",
    bio: "Программист, который не только кодит, но и готовит невероятные блюда! Ищу спутницу для кулинарных экспериментов.",
    photo: "/img/cd973b0f-26f9-4c4d-970b-c3f995106380.jpg",
    interests: ["Кулинария", "IT", "Спорт"],
    verified: true,
    online: false
  }
];

const Index = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentView, setCurrentView] = useState('home');
  const [currentProfileIndex, setCurrentProfileIndex] = useState(0);
  const [swipeDirection, setSwipeDirection] = useState('');

  const handleSwipe = (direction: 'like' | 'pass') => {
    setSwipeDirection(direction === 'like' ? 'swipe-right' : 'swipe-left');
    setTimeout(() => {
      setCurrentProfileIndex((prev) => (prev + 1) % profiles.length);
      setSwipeDirection('');
    }, 300);
  };

  const LoginRegisterForm = () => (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-coral/20 via-teal/20 to-sky/20 p-4">
      <Card className="w-full max-w-md animate-fade-in">
        <CardHeader className="text-center">
          <div className="mx-auto w-16 h-16 rounded-full gradient-coral-teal flex items-center justify-center mb-4">
            <Icon name="Heart" size={32} className="text-white" />
          </div>
          <CardTitle className="text-2xl font-heading text-coral">LoveConnect</CardTitle>
          <p className="text-muted-foreground">Найди свою половинку</p>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="login" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="login">Вход</TabsTrigger>
              <TabsTrigger value="register">Регистрация</TabsTrigger>
            </TabsList>
            
            <TabsContent value="login" className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="your@email.com" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Пароль</Label>
                <Input id="password" type="password" placeholder="••••••••" />
              </div>
              <Button 
                className="w-full bg-coral hover:bg-coral-dark text-white"
                onClick={() => setIsAuthenticated(true)}
              >
                Войти
              </Button>
            </TabsContent>
            
            <TabsContent value="register" className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Имя</Label>
                <Input id="name" placeholder="Ваше имя" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="reg-email">Email</Label>
                <Input id="reg-email" type="email" placeholder="your@email.com" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="reg-password">Пароль</Label>
                <Input id="reg-password" type="password" placeholder="••••••••" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="age">Возраст</Label>
                <Input id="age" type="number" placeholder="25" />
              </div>
              <Button 
                className="w-full bg-teal hover:bg-teal-dark text-white"
                onClick={() => setIsAuthenticated(true)}
              >
                Зарегистрироваться
              </Button>
            </TabsContent>
          </Tabs>
          
          <div className="mt-6 text-center">
            <p className="text-sm text-muted-foreground mb-4">Или войти через</p>
            <div className="flex gap-2">
              <Button variant="outline" className="flex-1">
                <Icon name="Phone" size={16} className="mr-2" />
                Телефон
              </Button>
              <Button variant="outline" className="flex-1">
                <Icon name="Globe" size={16} className="mr-2" />
                Google
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );

  const Navigation = () => (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-border z-50">
      <div className="flex justify-around py-2">
        {[
          { id: 'home', icon: 'Home', label: 'Главная' },
          { id: 'discover', icon: 'Users', label: 'Анкеты' },
          { id: 'search', icon: 'Search', label: 'Поиск' },
          { id: 'chat', icon: 'MessageCircle', label: 'Чат' },
          { id: 'profile', icon: 'User', label: 'Профиль' }
        ].map(item => (
          <button
            key={item.id}
            onClick={() => setCurrentView(item.id)}
            className={`flex flex-col items-center p-2 text-xs transition-colors ${
              currentView === item.id ? 'text-coral' : 'text-gray-500'
            }`}
          >
            <Icon name={item.icon as any} size={20} />
            <span className="mt-1">{item.label}</span>
          </button>
        ))}
      </div>
    </nav>
  );

  const HomeView = () => (
    <div className="min-h-screen bg-gradient-to-br from-coral/10 via-teal/10 to-sky/10 pb-20">
      <header className="bg-white/80 backdrop-blur-sm border-b border-border p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full gradient-coral-teal flex items-center justify-center">
              <Icon name="Heart" size={20} className="text-white" />
            </div>
            <h1 className="text-xl font-heading font-bold text-coral">LoveConnect</h1>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="sm">
              <Icon name="Bell" size={18} />
            </Button>
            <Button variant="ghost" size="sm">
              <Icon name="Settings" size={18} />
            </Button>
          </div>
        </div>
      </header>

      <div className="p-6 space-y-6">
        <div className="text-center">
          <h2 className="text-2xl font-heading font-bold text-gray-800 mb-2">
            Добро пожаловать! 👋
          </h2>
          <p className="text-gray-600">Найди свою идеальную пару уже сегодня</p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <Card className="p-4 text-center hover-scale cursor-pointer" onClick={() => setCurrentView('discover')}>
            <div className="w-12 h-12 mx-auto rounded-full bg-coral/20 flex items-center justify-center mb-3">
              <Icon name="Users" size={24} className="text-coral" />
            </div>
            <h3 className="font-semibold text-coral mb-1">Анкеты</h3>
            <p className="text-sm text-gray-600">Просматривай профили</p>
          </Card>

          <Card className="p-4 text-center hover-scale cursor-pointer" onClick={() => setCurrentView('search')}>
            <div className="w-12 h-12 mx-auto rounded-full bg-teal/20 flex items-center justify-center mb-3">
              <Icon name="Search" size={24} className="text-teal" />
            </div>
            <h3 className="font-semibold text-teal mb-1">Поиск</h3>
            <p className="text-sm text-gray-600">Найди по фильтрам</p>
          </Card>

          <Card className="p-4 text-center hover-scale cursor-pointer" onClick={() => setCurrentView('chat')}>
            <div className="w-12 h-12 mx-auto rounded-full bg-sky/20 flex items-center justify-center mb-3">
              <Icon name="MessageCircle" size={24} className="text-sky" />
            </div>
            <h3 className="font-semibold text-sky mb-1">Чаты</h3>
            <p className="text-sm text-gray-600">Общайся с match'ами</p>
          </Card>

          <Card className="p-4 text-center hover-scale cursor-pointer">
            <div className="w-12 h-12 mx-auto rounded-full bg-purple/20 flex items-center justify-center mb-3">
              <Icon name="Star" size={24} className="text-purple" />
            </div>
            <h3 className="font-semibold text-purple mb-1">Рейтинг</h3>
            <p className="text-sm text-gray-600">Топ пользователей</p>
          </Card>
        </div>

        <Card className="p-6 gradient-coral-teal text-white">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-xl font-heading font-bold mb-2">Premium подписка</h3>
              <p className="text-white/90 mb-4">Безлимитные лайки и супер-возможности</p>
              <Button variant="secondary" className="bg-white text-coral hover:bg-gray-100">
                Попробовать бесплатно
              </Button>
            </div>
            <Icon name="Crown" size={48} className="text-white/80" />
          </div>
        </Card>
      </div>
    </div>
  );

  const DiscoverView = () => {
    const currentProfile = profiles[currentProfileIndex];
    
    return (
      <div className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-50 to-blue-100 pb-20">
        <header className="bg-white/80 backdrop-blur-sm border-b border-border p-4">
          <div className="flex items-center justify-between">
            <h1 className="text-xl font-heading font-bold text-coral">Анкеты</h1>
            <div className="flex items-center gap-2">
              <Badge variant="secondary" className="bg-coral/20 text-coral">
                {profiles.length - currentProfileIndex} анкет
              </Badge>
              <Button variant="ghost" size="sm">
                <Icon name="Filter" size={18} />
              </Button>
            </div>
          </div>
        </header>

        <div className="p-4">
          <Card className={`max-w-sm mx-auto overflow-hidden ${swipeDirection ? `animate-${swipeDirection}` : ''}`}>
            <div className="relative">
              <img 
                src={currentProfile.photo} 
                alt={currentProfile.name}
                className="w-full h-96 object-cover"
              />
              <div className="absolute top-4 right-4 flex gap-2">
                {currentProfile.verified && (
                  <Badge className="bg-green-500 text-white">
                    <Icon name="CheckCircle" size={12} className="mr-1" />
                    Верифицирован
                  </Badge>
                )}
                {currentProfile.online && (
                  <Badge className="bg-coral text-white">
                    <Icon name="Circle" size={8} className="mr-1 fill-current" />
                    Онлайн
                  </Badge>
                )}
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                <div className="flex items-center gap-2 text-white mb-2">
                  <h2 className="text-2xl font-heading font-bold">{currentProfile.name}, {currentProfile.age}</h2>
                  <Icon name="MapPin" size={16} />
                  <span className="text-sm">{currentProfile.distance}</span>
                </div>
              </div>
            </div>
            
            <CardContent className="p-4">
              <p className="text-gray-700 mb-4">{currentProfile.bio}</p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {currentProfile.interests.map((interest, index) => (
                  <Badge key={index} variant="outline" className="text-xs">
                    {interest}
                  </Badge>
                ))}
              </div>

              <div className="flex justify-center gap-4">
                <Button
                  size="lg"
                  variant="outline"
                  className="w-16 h-16 rounded-full border-2 border-gray-300 hover:border-red-300 hover:bg-red-50"
                  onClick={() => handleSwipe('pass')}
                >
                  <Icon name="X" size={24} className="text-gray-600" />
                </Button>
                
                <Button
                  size="lg"
                  className="w-20 h-20 rounded-full bg-coral hover:bg-coral-dark text-white"
                  onClick={() => handleSwipe('like')}
                >
                  <Icon name="Heart" size={28} />
                </Button>
                
                <Button
                  size="lg"
                  variant="outline"
                  className="w-16 h-16 rounded-full border-2 border-sky-300 hover:border-sky-400 hover:bg-sky-50"
                >
                  <Icon name="Star" size={24} className="text-sky-600" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  };

  const SearchView = () => (
    <div className="min-h-screen bg-gray-50 pb-20">
      <header className="bg-white border-b border-border p-4">
        <h1 className="text-xl font-heading font-bold text-coral">Поиск</h1>
      </header>
      
      <div className="p-4 space-y-4">
        <Card className="p-4">
          <h3 className="font-semibold mb-4">Фильтры поиска</h3>
          
          <div className="space-y-4">
            <div>
              <Label>Возраст</Label>
              <div className="flex items-center gap-2 mt-1">
                <Input type="number" placeholder="18" className="w-20" />
                <span>—</span>
                <Input type="number" placeholder="35" className="w-20" />
              </div>
            </div>
            
            <div>
              <Label>Расстояние (км)</Label>
              <Input type="range" min="1" max="100" defaultValue="25" className="mt-1" />
            </div>
            
            <div>
              <Label>Интересы</Label>
              <div className="flex flex-wrap gap-2 mt-2">
                {["Спорт", "Путешествия", "Кино", "Музыка", "Кулинария", "IT"].map((interest) => (
                  <Badge key={interest} variant="outline" className="cursor-pointer hover:bg-coral hover:text-white">
                    {interest}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
          
          <Button className="w-full mt-4 bg-coral hover:bg-coral-dark text-white">
            Применить фильтры
          </Button>
        </Card>
        
        <div className="grid grid-cols-2 gap-4">
          {profiles.map((profile) => (
            <Card key={profile.id} className="overflow-hidden hover-scale cursor-pointer">
              <img src={profile.photo} alt={profile.name} className="w-full h-32 object-cover" />
              <CardContent className="p-3">
                <h3 className="font-semibold text-sm">{profile.name}, {profile.age}</h3>
                <p className="text-xs text-gray-600 flex items-center mt-1">
                  <Icon name="MapPin" size={12} className="mr-1" />
                  {profile.distance}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );

  if (!isAuthenticated) {
    return <LoginRegisterForm />;
  }

  return (
    <>
      {currentView === 'home' && <HomeView />}
      {currentView === 'discover' && <DiscoverView />}
      {currentView === 'search' && <SearchView />}
      {currentView === 'chat' && (
        <div className="min-h-screen bg-gray-50 pb-20 flex items-center justify-center">
          <div className="text-center">
            <Icon name="MessageCircle" size={64} className="text-gray-400 mx-auto mb-4" />
            <h2 className="text-xl font-heading font-bold text-gray-600 mb-2">Чаты</h2>
            <p className="text-gray-500">Здесь будут ваши диалоги с match'ами</p>
          </div>
        </div>
      )}
      {currentView === 'profile' && (
        <div className="min-h-screen bg-gray-50 pb-20 flex items-center justify-center">
          <div className="text-center">
            <Avatar className="w-24 h-24 mx-auto mb-4">
              <AvatarImage src="/img/49eeae12-4f17-4367-85f0-e08ac7dae5a9.jpg" />
              <AvatarFallback>Я</AvatarFallback>
            </Avatar>
            <h2 className="text-xl font-heading font-bold text-gray-600 mb-2">Мой профиль</h2>
            <p className="text-gray-500">Настройки и информация о вас</p>
          </div>
        </div>
      )}
      <Navigation />
    </>
  );
};

export default Index;