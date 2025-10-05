import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { ArrowRight, Leaf, Globe, Award, MessageCircle, Phone, Star, MapPin, Users, Truck } from "lucide-react";
import heroImage from "@/assets/hero-coconuts.jpg";
import cocopeatImage from "@/assets/cocopeat-product.jpg";
import freshCoconutsImage from "@/assets/fresh-coconuts.jpg";
import cocoPowerImage from "@/assets/coco-power-products.jpg";

const Home = () => {
  const features = [
    {
      icon: <Leaf className="w-6 h-6" />,
      title: "100% Eco-Friendly",
      description: "Sustainable coconut products that respect nature"
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Export Ready",
      description: "International quality standards for global markets"
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Premium Quality",
      description: "Hand-selected coconuts and products"
    },
    {
      icon: <Truck className="w-6 h-6" />,
      title: "Bulk Supply",
      description: "Large-scale orders for industries and farms"
    }
  ];

  const products = [
    {
      name: "Cocopeat",
      description: "Premium coconut fiber for agriculture and gardening",
      image: cocopeatImage,
      link: "/products#cocopeat"
    },
    {
      name: "Fresh Coconuts",
      description: "Thunder Coconut - Premium fresh coconuts",
      image: freshCoconutsImage,
      link: "/products#fresh-coconuts"
    },
    {
      name: "Coco Power",
      description: "Coconut-based products for health and nutrition",
      image: cocoPowerImage,
      link: "/products#coco-power"
    }
  ];

  const stats = [
    { number: "500+", label: "Happy Clients" },
    { number: "7", label: "States Served" },
    { number: "50+", label: "Export Countries" },
    { number: "15+", label: "Years Experience" }
  ];

  return (
    <div className="space-y-0">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 hero-gradient opacity-80"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <Badge className="mb-6 bg-white/20 text-white border-white/30 hover:bg-white/30">
            🌿 Premium Coconut Exporter Since 2009
          </Badge>
          
          <h1 className="text-5xl md:text-7xl font-playfair font-bold mb-6 animate-float">
            From Nature<br />to Nurture
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-white/90">
            Fresh Coconuts, Pure Products. Your trusted partner for premium 
            coconut exports across Karnataka, Tamil Nadu, Goa, and beyond.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="https://wa.me/916363784290?text=Hello%20Cocohub!%20I%27d%20like%20to%20get%20a%20quote%20for%20your%20coconut%20products." target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90 px-8 py-6 text-lg">
                <MessageCircle className="w-5 h-5 mr-2" />
                Get a Quote
              </Button>
            </a>
            <a href="tel:+916363784290">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary px-8 py-6 text-lg">
                <Phone className="w-5 h-5 mr-2" />
                Call +91 6363 784290
              </Button>
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-playfair font-bold text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-white/80 text-sm md:text-base">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
          <ArrowRight className="w-6 h-6 rotate-90" />
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-primary mb-4">
              Why Choose Our Coconut Products?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We deliver premium quality coconut products with a commitment to sustainability and excellence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-all duration-300 border-0 bg-white">
                <CardContent className="space-y-4">
                  <div className="w-16 h-16 rounded-full nature-gradient flex items-center justify-center text-white mx-auto">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-playfair font-semibold text-primary">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Products Showcase */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-primary mb-4">
              Our Premium Products
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              From agriculture to nutrition, we provide comprehensive coconut solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-all duration-300 group">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-playfair font-semibold text-primary mb-3">
                    {product.name}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {product.description}
                  </p>
                  <Link to={product.link}>
                    <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground group">
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/products">
              <Button size="lg" variant="default" className="hero-gradient px-8 py-6 text-lg">
                View All Products
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-20 cream-gradient">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-playfair font-bold text-primary mb-6">
                Serving Across South India
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                We provide premium coconut products and export services across major states in South India, 
                with special focus on Karnataka, Tamil Nadu, and Goa.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mb-8">
                {["Karnataka", "Tamil Nadu", "Goa", "Andhra Pradesh", "Telangana", "Chennai", "Hyderabad", "International"].map((location, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <MapPin className="w-4 h-4 text-primary" />
                    <span className="text-foreground">{location}</span>
                  </div>
                ))}
              </div>

              <Link to="/export">
                <Button size="lg" variant="default" className="nature-gradient">
                  Export Solutions
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <Card className="p-6 text-center bg-white/80">
                <Users className="w-8 h-8 text-primary mx-auto mb-4" />
                <h3 className="font-playfair font-semibold text-lg mb-2">500+ Clients</h3>
                <p className="text-muted-foreground text-sm">Trusted by farms, hotels, and industries</p>
              </Card>
              <Card className="p-6 text-center bg-white/80">
                <Globe className="w-8 h-8 text-primary mx-auto mb-4" />
                <h3 className="font-playfair font-semibold text-lg mb-2">Export Ready</h3>
                <p className="text-muted-foreground text-sm">International quality standards</p>
              </Card>
              <Card className="p-6 text-center bg-white/80">
                <Truck className="w-8 h-8 text-primary mx-auto mb-4" />
                <h3 className="font-playfair font-semibold text-lg mb-2">Bulk Supply</h3>
                <p className="text-muted-foreground text-sm">Large-scale order capacity</p>
              </Card>
              <Card className="p-6 text-center bg-white/80">
                <Award className="w-8 h-8 text-primary mx-auto mb-4" />
                <h3 className="font-playfair font-semibold text-lg mb-2">Premium Quality</h3>
                <p className="text-muted-foreground text-sm">Hand-selected products</p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 hero-gradient">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-white mb-6">
            Ready to Partner with Us?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Get premium coconut products delivered to your location. 
            Contact us for bulk orders, export solutions, and custom requirements.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://wa.me/916363784290?text=Hello%20Cocohub!%20I%27d%20like%20to%20get%20a%20quote%20for%20your%20coconut%20products." target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90 px-8 py-6 text-lg">
                <MessageCircle className="w-5 h-5 mr-2" />
                Get Your Quote Today
              </Button>
            </a>
            <a href="https://wa.me/916363784290" target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary px-8 py-6 text-lg">
                <MessageCircle className="w-5 h-5 mr-2" />
                WhatsApp Now
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;