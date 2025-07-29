import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const Index = () => {
  const [activeService, setActiveService] = useState(0);

  const services = [
    {
      title: "Креативные решения",
      description: "Разрабатываем уникальные и инновационные подходы для вашего бизнеса",
      icon: "Lightbulb",
      features: ["Брендинг", "Дизайн", "Стратегия"]
    },
    {
      title: "Корпоративные услуги", 
      description: "Комплексная поддержка и развитие корпоративной культуры",
      icon: "Building2",
      features: ["Консалтинг", "Обучение", "Развитие"]
    },
    {
      title: "Техническая поддержка",
      description: "Профессиональная техническая поддержка и сопровождение проектов",
      icon: "Settings",
      features: ["24/7 поддержка", "Консультации", "Сопровождение"]
    }
  ];

  const reviews = [
    {
      name: "Алексей Иванов",
      company: "TechCorp",
      rating: 5,
      text: "Отличная работа команды! Проект выполнен в срок и превзошел все ожидания.",
      avatar: "АИ"
    },
    {
      name: "Мария Петрова", 
      company: "Creative Agency",
      rating: 5,
      text: "Профессиональный подход и креативные решения. Рекомендую всем!",
      avatar: "МП"
    },
    {
      name: "Дмитрий Сидоров",
      company: "StartupX",
      rating: 4,
      text: "Качественные услуги по разумной цене. Будем продолжать сотрудничество.",
      avatar: "ДС"
    }
  ];

  const team = [
    { name: "Анна Козлова", role: "Креативный директор", avatar: "АК" },
    { name: "Михаил Новиков", role: "Ведущий разработчик", avatar: "МН" },
    { name: "Елена Смирнова", role: "Менеджер проектов", avatar: "ЕС" },
    { name: "Игорь Волков", role: "Дизайнер", avatar: "ИВ" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex justify-between items-center">
            <div className="text-2xl font-bold text-primary">APEX26</div>
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="story-link text-gray-700 hover:text-primary">Главная</a>
              <a href="#services" className="story-link text-gray-700 hover:text-primary">Услуги</a>
              <a href="#about" className="story-link text-gray-700 hover:text-primary">О нас</a>
              <a href="#reviews" className="story-link text-gray-700 hover:text-primary">Отзывы</a>
              <a href="#contact" className="story-link text-gray-700 hover:text-primary">Контакты</a>
            </div>
            <Button variant="outline">
              <Icon name="Menu" size={20} />
            </Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in">
              <Badge className="w-fit bg-primary/10 text-primary border-primary/20">
                Профессиональные решения
              </Badge>
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                Креативные 
                <span className="text-primary"> решения</span> для вашего бизнеса
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Мы создаем уникальные проекты, которые помогают компаниям 
                достигать новых высот в своей деятельности
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="hover-scale">
                  <Icon name="Phone" size={20} className="mr-2" />
                  Связаться с нами
                </Button>
                <Button variant="outline" size="lg" className="hover-scale">
                  <Icon name="Play" size={20} className="mr-2" />
                  Смотреть портфолио
                </Button>
              </div>
            </div>
            <div className="relative animate-scale-in">
              <img 
                src="/img/28cf4cba-6823-47b9-a3f2-1228f6fab56a.jpg" 
                alt="Корпоративное здание"
                className="rounded-2xl shadow-2xl w-full h-[500px] object-cover"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                    <Icon name="Star" size={24} className="text-white" />
                  </div>
                  <div>
                    <div className="font-bold">4.9/5</div>
                    <div className="text-sm text-gray-600">Рейтинг клиентов</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
              Наши услуги
            </Badge>
            <h2 className="text-4xl font-bold mb-4">Что мы предлагаем</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Полный спектр услуг для развития вашего бизнеса
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card 
                key={index}
                className={`cursor-pointer transition-all duration-300 hover-scale ${
                  activeService === index ? 'border-primary shadow-lg' : ''
                }`}
                onClick={() => setActiveService(index)}
              >
                <CardHeader>
                  <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                    <Icon name={service.icon} size={32} className="text-primary" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {service.features.map((feature, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs">
                        {feature}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
                О компании
              </Badge>
              <h2 className="text-4xl font-bold mb-6">
                Команда профессионалов
              </h2>
              <p className="text-gray-600 mb-8">
                APEX26 - это команда экспертов с многолетним опытом в различных областях бизнеса. 
                Мы объединяем креативность и профессионализм для создания уникальных решений.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">50+</div>
                  <div className="text-gray-600">Завершенных проектов</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">5+</div>
                  <div className="text-gray-600">Лет опыта</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="/img/9d288dcc-6def-4829-b3bd-513ef4abe4e8.jpg"
                alt="Команда"
                className="rounded-2xl shadow-xl w-full h-[400px] object-cover"
              />
            </div>
          </div>

          {/* Team */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-center mb-8">Наша команда</h3>
            <div className="grid md:grid-cols-4 gap-6">
              {team.map((member, index) => (
                <Card key={index} className="text-center hover-scale">
                  <CardContent className="p-6">
                    <Avatar className="w-20 h-20 mx-auto mb-4">
                      <AvatarFallback className="bg-primary text-white text-lg">
                        {member.avatar}
                      </AvatarFallback>
                    </Avatar>
                    <h4 className="font-semibold">{member.name}</h4>
                    <p className="text-gray-600 text-sm">{member.role}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
              Отзывы клиентов
            </Badge>
            <h2 className="text-4xl font-bold mb-4">Что говорят о нас</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Мнения наших клиентов - лучшая реклама нашей работы
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <Card key={index} className="hover-scale">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Avatar className="mr-3">
                      <AvatarFallback className="bg-primary text-white">
                        {review.avatar}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-semibold">{review.name}</div>
                      <div className="text-sm text-gray-600">{review.company}</div>
                    </div>
                  </div>
                  <div className="flex mb-3">
                    {[...Array(review.rating)].map((_, i) => (
                      <Icon key={i} name="Star" size={16} className="text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600">"{review.text}"</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Rating Summary */}
          <div className="mt-12 text-center">
            <Card className="max-w-md mx-auto">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-primary mb-2">4.8/5</div>
                <div className="text-gray-600 mb-4">Средний рейтинг</div>
                <div className="flex justify-center space-x-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Icon key={i} name="Star" size={20} className="text-yellow-400 fill-current" />
                  ))}
                </div>
                <div className="text-sm text-gray-500">На основе 127 оценок</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-gradient-to-br from-primary/5 to-purple-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
              Контакты
            </Badge>
            <h2 className="text-4xl font-bold mb-4">Свяжитесь с нами</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Готовы обсудить ваш проект? Мы всегда рады новым возможностям
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="text-center hover-scale">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Phone" size={24} className="text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Телефон</h3>
                <p className="text-gray-600">+7 (495) 123-45-67</p>
              </CardContent>
            </Card>

            <Card className="text-center hover-scale">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Mail" size={24} className="text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Email</h3>
                <p className="text-gray-600">info@apex26.ru</p>
              </CardContent>
            </Card>

            <Card className="text-center hover-scale">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="MapPin" size={24} className="text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Адрес</h3>
                <p className="text-gray-600">Москва, ул. Примерная, 26</p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button size="lg" className="hover-scale">
              <Icon name="MessageCircle" size={20} className="mr-2" />
              Написать нам
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="text-2xl font-bold mb-4">APEX26</div>
              <p className="text-gray-400">
                Креативные решения для вашего бизнеса
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Услуги</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Брендинг</a></li>
                <li><a href="#" className="hover:text-white">Дизайн</a></li>
                <li><a href="#" className="hover:text-white">Консалтинг</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Компания</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">О нас</a></li>
                <li><a href="#" className="hover:text-white">Команда</a></li>
                <li><a href="#" className="hover:text-white">Карьера</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Социальные сети</h4>
              <div className="flex space-x-4">
                <Button variant="ghost" size="sm">
                  <Icon name="Twitter" size={20} />
                </Button>
                <Button variant="ghost" size="sm">
                  <Icon name="Linkedin" size={20} />
                </Button>
                <Button variant="ghost" size="sm">
                  <Icon name="Instagram" size={20} />
                </Button>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 APEX26. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;