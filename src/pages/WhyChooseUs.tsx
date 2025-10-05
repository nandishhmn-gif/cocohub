import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Award, 
  Leaf, 
  Globe, 
  Truck, 
  Users, 
  CheckCircle, 
  Star, 
  Shield, 
  Clock, 
  MessageCircle,
  ArrowRight,
  MapPin,
  Handshake,
  Target
} from "lucide-react";

const WhyChooseUs = () => {
  const advantages = [
    {
      icon: <Award className="w-8 h-8" />,
      title: "Premium Quality Assurance",
      description: "Every coconut and product undergoes rigorous quality checks to ensure only the finest reaches our customers.",
      details: [
        "Hand-selected coconuts from premium farms",
        "Multi-stage quality control process",
        "International quality standards compliance",
        "Regular third-party quality audits"
      ]
    },
    {
      icon: <Leaf className="w-8 h-8" />,
      title: "100% Eco-Friendly Practices",
      description: "Committed to sustainable agriculture and environmentally responsible processing methods.",
      details: [
        "Organic farming partnerships",
        "Zero-waste processing techniques",
        "Biodegradable packaging options",
        "Carbon-neutral transportation initiatives"
      ]
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Export Excellence",
      description: "Proven track record of successful international exports with comprehensive documentation support.",
      details: [
        "50+ countries served globally",
        "Complete export documentation",
        "International logistics expertise",
        "Multi-language customer support"
      ]
    },
    {
      icon: <Truck className="w-8 h-8" />,
      title: "Reliable Bulk Supply",
      description: "Consistent large-scale supply capacity to meet industrial and commercial requirements.",
      details: [
        "10-1000+ ton order capacity",
        "Just-in-time delivery options",
        "Flexible packaging solutions",
        "Temperature-controlled logistics"
      ]
    }
  ];

  const serviceRegions = [
    { state: "Karnataka", cities: ["Bangalore", "Mysore", "Mangalore"], icon: "🏛️" },
    { state: "Tamil Nadu", cities: ["Chennai", "Coimbatore", "Madurai"], icon: "🏛️" },
    { state: "Goa", cities: ["Panaji", "Margao", "Vasco"], icon: "🏖️" },
    { state: "Andhra Pradesh", cities: ["Hyderabad", "Vijayawada", "Visakhapatnam"], icon: "🏛️" },
    { state: "Telangana", cities: ["Hyderabad", "Warangal", "Nizamabad"], icon: "🏛️" }
  ];

  const testimonials = [
    {
      name: "Rajesh Farms",
      location: "Karnataka",
      rating: 5,
      text: "Outstanding quality cocopeat! Our crop yields have improved significantly since switching to their products."
    },
    {
      name: "Green Earth Industries",
      location: "Tamil Nadu", 
      rating: 5,
      text: "Reliable partner for our coconut oil production. Consistent quality and timely deliveries every time."
    },
    {
      name: "Tropical Foods Ltd",
      location: "International",
      rating: 5,
      text: "Best coconut exporter we've worked with. Professional service and export documentation support is excellent."
    }
  ];

  const competitiveEdge = [
    {
      icon: <Clock className="w-6 h-6" />,
      title: "15+ Years Experience",
      description: "Deep industry knowledge and established relationships"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Quality Guarantee",
      description: "100% satisfaction guarantee on all products"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Expert Team",
      description: "Skilled professionals in agriculture and export"
    },
    {
      icon: <Handshake className="w-6 h-6" />,
      title: "Long-term Partnerships",
      description: "Building lasting relationships with clients"
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Custom Solutions",
      description: "Tailored products for specific requirements"
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Global Reach",
      description: "Serving clients in 50+ countries worldwide"
    }
  ];

  return (
    <div className="space-y-0">
      {/* Hero Section */}
      <section className="py-20 hero-gradient text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-white/20 text-white border-white/30 hover:bg-white/30">
              🌟 Trusted by 500+ Clients
            </Badge>
            <h1 className="text-5xl md:text-6xl font-playfair font-bold mb-6">
              Why Choose Our<br />Coconut Excellence?
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
              Experience the difference with premium quality, sustainable practices, 
              and reliable service that has made us the preferred coconut exporter across South India.
            </p>
          </div>
        </div>
      </section>

      {/* Main Advantages */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-primary mb-4">
              Our Competitive Advantages
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              What sets us apart in the coconut industry
            </p>
          </div>

          <div className="space-y-16">
            {advantages.map((advantage, index) => (
              <div key={index} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <Card className="p-8 h-full">
                    <CardContent className="space-y-6">
                      <div className="w-16 h-16 rounded-full nature-gradient flex items-center justify-center text-white">
                        {advantage.icon}
                      </div>
                      <h3 className="text-2xl md:text-3xl font-playfair font-bold text-primary">
                        {advantage.title}
                      </h3>
                      <p className="text-muted-foreground text-lg leading-relaxed">
                        {advantage.description}
                      </p>
                      <div className="space-y-3">
                        {advantage.details.map((detail, detailIndex) => (
                          <div key={detailIndex} className="flex items-start space-x-3">
                            <CheckCircle className="w-5 h-5 text-coconut-green mt-0.5 flex-shrink-0" />
                            <span className="text-foreground">{detail}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
                
                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                  <div className="grid grid-cols-2 gap-6">
                    <Card className="p-6 text-center bg-gradient-to-br from-primary/10 to-coconut-green/10">
                      <Star className="w-8 h-8 text-primary mx-auto mb-4" />
                      <div className="text-3xl font-playfair font-bold text-primary mb-2">4.9★</div>
                      <div className="text-sm text-muted-foreground">Customer Rating</div>
                    </Card>
                    <Card className="p-6 text-center bg-gradient-to-br from-coconut-green/10 to-primary/10">
                      <Award className="w-8 h-8 text-coconut-green mx-auto mb-4" />
                      <div className="text-3xl font-playfair font-bold text-coconut-green mb-2">ISO</div>
                      <div className="text-sm text-muted-foreground">Certified</div>
                    </Card>
                    <Card className="p-6 text-center bg-gradient-to-br from-coconut-brown/10 to-primary/10">
                      <Globe className="w-8 h-8 text-coconut-brown mx-auto mb-4" />
                      <div className="text-3xl font-playfair font-bold text-coconut-brown mb-2">50+</div>
                      <div className="text-sm text-muted-foreground">Countries</div>
                    </Card>
                    <Card className="p-6 text-center bg-gradient-to-br from-primary/10 to-coconut-green/10">
                      <Truck className="w-8 h-8 text-primary mx-auto mb-4" />
                      <div className="text-3xl font-playfair font-bold text-primary mb-2">1000+</div>
                      <div className="text-sm text-muted-foreground">Tons/Month</div>
                    </Card>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Regions */}
      <section className="py-20 cream-gradient">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-primary mb-4">
              Comprehensive Service Coverage
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Strategic presence across South India with dedicated service centers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceRegions.map((region, index) => (
              <Card key={index} className="p-6 text-center bg-white hover:shadow-lg transition-all duration-300">
                <CardContent className="space-y-4">
                  <div className="text-4xl mb-4">{region.icon}</div>
                  <h3 className="text-xl font-playfair font-semibold text-primary">
                    {region.state}
                  </h3>
                  <div className="space-y-2">
                    {region.cities.map((city, cityIndex) => (
                      <div key={cityIndex} className="flex items-center justify-center space-x-2">
                        <MapPin className="w-4 h-4 text-coconut-green" />
                        <span className="text-muted-foreground">{city}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
            
            {/* International */}
            <Card className="p-6 text-center bg-gradient-to-br from-primary/10 to-coconut-green/10 md:col-span-2 lg:col-span-3">
              <CardContent className="space-y-4">
                <Globe className="w-12 h-12 text-primary mx-auto" />
                <h3 className="text-2xl font-playfair font-semibold text-primary">
                  International Export
                </h3>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Serving clients in Southeast Asia, Middle East, Europe, and North America 
                  with comprehensive export documentation and logistics support.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Competitive Edge */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-primary mb-4">
              Our Competitive Edge
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Six key factors that make us the preferred choice
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {competitiveEdge.map((edge, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-lg transition-all duration-300 group">
                <CardContent className="space-y-4">
                  <div className="w-12 h-12 rounded-full coconut-gradient flex items-center justify-center text-white mx-auto group-hover:scale-110 transition-transform duration-300">
                    {edge.icon}
                  </div>
                  <h3 className="text-lg font-playfair font-semibold text-primary">
                    {edge.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {edge.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Testimonials */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-primary mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Trusted by businesses across India and internationally
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-6 bg-white">
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, starIndex) => (
                      <Star key={starIndex} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-muted-foreground italic leading-relaxed">
                    "{testimonial.text}"
                  </p>
                  <div className="border-t pt-4">
                    <h4 className="font-playfair font-semibold text-primary">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.location}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 hero-gradient">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-white mb-6">
            Experience the Difference
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join hundreds of satisfied clients who trust us for their coconut product needs. 
            Let us show you why we're the preferred choice.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90 px-8 py-6 text-lg">
                <MessageCircle className="w-5 h-5 mr-2" />
                Start Your Partnership
              </Button>
            </Link>
            <Link to="/products">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary px-8 py-6 text-lg">
                View Our Products
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhyChooseUs;