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
  Target,
} from "lucide-react";

const WhyChooseUs = () => {
  const advantages = [
    {
      icon: <Award className="w-8 h-8" />,
      title: "Quality You Can Trust",
      description:
        "Every coconut and product is carefully checked to ensure freshness and consistency before reaching our customers.",
      details: [
        "Hand-selected coconuts from local farms",
        "Step-by-step quality inspection process",
        "Locally managed sourcing and handling",
        "Focus on freshness and authenticity",
      ],
    },
    {
      icon: <Leaf className="w-8 h-8" />,
      title: "Eco-Friendly Practices",
      description:
        "We’re committed to sustainable farming and environmentally responsible production methods.",
      details: [
        "Supporting local organic farming",
        "Minimizing processing waste",
        "Encouraging reusable and eco-safe packaging",
        "Environment-first business approach",
      ],
    },
    {
      icon: <Truck className="w-8 h-8" />,
      title: "Reliable Delivery",
      description:
        "We aim to provide smooth, dependable deliveries — though as a growing business, some orders may take a bit of extra time.",
      details: [
        "Timely deliveries within service regions",
        "Flexible order handling for small and bulk needs",
        "Careful packaging for product safety",
        "Direct coordination for logistics and updates",
      ],
    },
    {
      icon: <Handshake className="w-8 h-8" />,
      title: "Customer Commitment",
      description:
        "We believe in honest communication, fair pricing, and long-term relationships built on trust.",
      details: [
        "Transparent service and pricing",
        "Customer-first support approach",
        "Continuous improvement based on feedback",
        "Building long-term local partnerships",
      ],
    },
  ];

  const serviceRegions = [
    {
      state: "Karnataka",
      cities: ["Bangalore", "Mysore", "Mangalore"],
      icon: "🌴",
    },
    {
      state: "Tamil Nadu",
      cities: ["Chennai", "Coimbatore", "Madurai"],
      icon: "🌴",
    },
  ];

  const testimonials = [
    {
      name: "Lakshmi Kanth",
      location: "Karnataka",
      rating: 5,
      text: "Excellent product quality and friendly communication. Great to work with a local, passionate team.",
    },
    {
      name: "Hemanth MM",
      location: "Tamil Nadu",
      rating: 5,
      text: "Fresh products and smooth coordination. Looking forward to long-term business together.",
    },
  ];

  const competitiveEdge = [
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Freshly Started, Fully Focused",
      description:
        "A new brand driven by dedication, energy, and a strong vision for quality.",
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Quality Commitment",
      description:
        "Every product reflects our care, consistency, and local expertise.",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Passionate Team",
      description: "Young, energetic, and determined to deliver excellence.",
    },
    {
      icon: <Handshake className="w-6 h-6" />,
      title: "Growing Partnerships",
      description:
        "Working closely with customers and farmers to build lasting trust.",
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Flexible Solutions",
      description:
        "We tailor products and services to meet customer-specific needs.",
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Expanding Reach",
      description:
        "Currently serving Karnataka and Tamil Nadu, with plans to grow across India soon.",
    },
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
              Why Choose Our
              <br />
              Coconut Excellence?
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
              Experience the difference with premium quality, sustainable
              practices, and reliable service that has made us the preferred
              coconut exporter across South India.
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
              <div
                key={index}
                className="grid grid-cols-1 lg:grid-cols-1 gap-12 items-center"
              >
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
                          <div
                            key={detailIndex}
                            className="flex items-start space-x-3"
                          >
                            <CheckCircle className="w-5 h-5 text-coconut-green mt-0.5 flex-shrink-0" />
                            <span className="text-foreground">{detail}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                  <div className="grid grid-cols-2 gap-6">
                    <Card className="p-6 text-center bg-gradient-to-br from-primary/10 to-coconut-green/10">
                      <Star className="w-8 h-8 text-primary mx-auto mb-4" />
                      <div className="text-3xl font-playfair font-bold text-primary mb-2">
                        4.9★
                      </div>
                      <div className="text-sm text-muted-foreground">
                        Customer Satisfaction
                      </div>
                    </Card>

                    <Card className="p-6 text-center bg-gradient-to-br from-coconut-green/10 to-primary/10">
                      <Award className="w-8 h-8 text-coconut-green mx-auto mb-4" />
                      <div className="text-3xl font-playfair font-bold text-coconut-green mb-2">
                        100%
                      </div>
                      <div className="text-sm text-muted-foreground">
                        Quality Commitment
                      </div>
                    </Card>

                    <Card className="p-6 text-center bg-gradient-to-br from-coconut-brown/10 to-primary/10">
                      <Globe className="w-8 h-8 text-coconut-brown mx-auto mb-4" />
                      <div className="text-3xl font-playfair font-bold text-coconut-brown mb-2">
                        2
                      </div>
                      <div className="text-sm text-muted-foreground">
                        States Served
                      </div>
                    </Card>

                    <Card className="p-6 text-center bg-gradient-to-br from-primary/10 to-coconut-green/10">
                      <Truck className="w-8 h-8 text-primary mx-auto mb-4" />
                      <div className="text-3xl font-playfair font-bold text-primary mb-2">
                        Growing
                      </div>
                      <div className="text-sm text-muted-foreground">
                        Expanding Production Capacity
                      </div>
                    </Card>
                  </div>
                </div> */}
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
              Strategic presence across South India with dedicated service
              centers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {serviceRegions.map((region, index) => (
              <Card
                key={index}
                className="p-6 text-center bg-white hover:shadow-lg transition-all duration-300"
              >
                <CardContent className="space-y-4">
                  <div className="text-4xl mb-4">{region.icon}</div>
                  <h3 className="text-xl font-playfair font-semibold text-primary">
                    {region.state}
                  </h3>
                  <div className="space-y-2">
                    {region.cities.map((city, cityIndex) => (
                      <div
                        key={cityIndex}
                        className="flex items-center justify-center space-x-2"
                      >
                        <MapPin className="w-4 h-4 text-coconut-green" />
                        <span className="text-muted-foreground">{city}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}

            {/* International */}
            {/* <Card className="p-6 text-center bg-gradient-to-br from-primary/10 to-coconut-green/10 md:col-span-2 lg:col-span-3">
              <CardContent className="space-y-4">
                <Globe className="w-12 h-12 text-primary mx-auto" />
                <h3 className="text-2xl font-playfair font-semibold text-primary">
                  International Export
                </h3>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Serving clients in Southeast Asia, Middle East, Europe, and
                  North America with comprehensive export documentation and
                  logistics support.
                </p>
              </CardContent>
            </Card> */}
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
              <Card
                key={index}
                className="p-6 text-center hover:shadow-lg transition-all duration-300 group"
              >
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-6 bg-white">
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, starIndex) => (
                      <Star
                        key={starIndex}
                        className="w-5 h-5 text-yellow-400 fill-current"
                      />
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
            Join hundreds of satisfied clients who trust us for their coconut
            product needs. Let us show you why we're the preferred choice.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button
                size="lg"
                variant="secondary"
                className="bg-white text-primary hover:bg-white/90 px-8 py-6 text-lg"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Start Your Partnership
              </Button>
            </Link>
            <Link to="/products">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-primary hover:bg-white hover:text-primary px-8 py-6 text-lg"
              >
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
