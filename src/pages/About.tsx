import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Users,
  Award,
  Leaf,
  Target,
  ArrowRight,
  Globe,
  Heart,
  Star,
} from "lucide-react";

const About = () => {
  const values = [
    {
      icon: <Leaf className="w-6 h-6" />,
      title: "Sustainability",
      description:
        "We're committed to eco-friendly practices that preserve our environment for future generations.",
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Quality Excellence",
      description:
        "Every coconut and product is carefully selected and processed to meet the highest standards.",
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Customer Care",
      description:
        "Building lasting relationships through exceptional service and reliable delivery.",
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Expanding Horizons",
      description:
        "Starting from India with a vision to gradually connect with customers beyond borders.",
    },
  ];

  const timeline = [
    {
      year: "2025",
      title: "Our Beginning",
      description:
        "Started our journey in Karnataka with a vision to deliver fresh, high-quality coconut products to customers and businesses.",
    },
    {
      year: "2025",
      title: "Building the Brand",
      description:
        "Introduced our first range of eco-friendly coconut products and established strong partnerships with local farmers.",
    },
    {
      year: "2025",
      title: "Growing Connections",
      description:
        "Started expanding our customer base across nearby regions while building trust and recognition for our quality.",
    },
    {
      year: "Future",
      title: "Expanding Horizons",
      description:
        "Aiming to grow our reach across India and explore opportunities to share our products with global markets.",
    },
  ];

  return (
    <div className="space-y-0">
      {/* Hero Section */}
      <section className="py-20 hero-gradient text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-white/20 text-white border-white/30 hover:bg-white/30">
              🌴 Our Story Fresh 2025
            </Badge>
            <h1 className="text-5xl md:text-6xl font-playfair font-bold mb-6">
              From Humble Beginnings
              <br />
              to Export Excellence
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
              Founded with a vision to share the natural goodness of Indian
              coconuts with Clients, we've grown into a trusted name in
              sustainable coconut trading.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-playfair font-bold text-primary mb-8">
                Our Mission & Vision
              </h2>

              <Card className="mb-8 border-l-4 border-l-primary">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <Target className="w-8 h-8 text-primary mt-1" />
                    <div>
                      <h3 className="text-xl font-playfair font-semibold text-primary mb-3">
                        Mission
                      </h3>
                      <p className="text-muted-foreground">
                        To provide premium quality coconut products that nurture
                        agriculture, health, and sustainable development while
                        maintaining the highest standards of environmental
                        responsibility and customer satisfaction.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-coconut-green">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <Globe className="w-8 h-8 text-coconut-green mt-1" />
                    <div>
                      <h3 className="text-xl font-playfair font-semibold text-coconut-green mb-3">
                        Vision
                      </h3>
                      <p className="text-muted-foreground">
                        To become the leading global exporter of eco-friendly
                        coconut products, connecting farms to international
                        markets while promoting sustainable agriculture and
                        supporting local communities.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="relative">
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-6">
                  <Card className="p-6 text-center bg-gradient-to-br from-primary/10 to-coconut-green/10">
                    <Users className="w-8 h-8 text-primary mx-auto mb-4" />
                    <div className="text-3xl font-playfair font-bold text-primary mb-2">
                      100+
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Satisfied Clients
                    </div>
                  </Card>
                  <Card className="p-6 text-center bg-gradient-to-br from-coconut-brown/10 to-primary/10">
                    <Globe className="w-8 h-8 text-coconut-brown mx-auto mb-4" />
                    <div className="text-3xl font-playfair font-bold text-coconut-brown mb-2">
                      2
                    </div>
                    <div className="text-sm text-muted-foreground">
                      State Served
                    </div>
                  </Card>
                </div>
                <div className="space-y-6 mt-8">
                  <Card className="p-6 text-center bg-gradient-to-br from-coconut-green/10 to-primary/10">
                    <Award className="w-8 h-8 text-coconut-green mx-auto mb-4" />
                    <div className="text-3xl font-playfair font-bold text-coconut-green mb-2">
                      2025
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Fresh Start, Bright Future
                    </div>
                  </Card>
                  <Card className="p-6 text-center bg-gradient-to-br from-primary/10 to-coconut-green/10">
                    <Star className="w-8 h-8 text-primary mx-auto mb-4" />
                    <div className="text-3xl font-playfair font-bold text-primary mb-2">
                      4.9★
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Customer Rating
                    </div>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 cream-gradient">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-primary mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do, from sourcing to
              delivery
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card
                key={index}
                className="text-center p-6 bg-white hover:shadow-lg transition-all duration-300 group"
              >
                <CardContent className="space-y-4">
                  <div className="w-16 h-16 rounded-full nature-gradient flex items-center justify-center text-white mx-auto group-hover:scale-110 transition-transform duration-300">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-playfair font-semibold text-primary">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Company Timeline */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-primary mb-4">
              Our Journey
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A young brand with a clear vision — growing step by step toward a
              sustainable coconut future.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {timeline.map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-8"
                >
                  <div className="flex-shrink-0">
                    <div className="w-24 h-24 rounded-full nature-gradient flex items-center justify-center text-white">
                      <span className="text-lg font-playfair font-bold">
                        {item.year}
                      </span>
                    </div>
                  </div>
                  <Card className="flex-grow">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-playfair font-semibold text-primary mb-2">
                        {item.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {item.description}
                      </p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team & Leadership */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-primary mb-4">
              Leadership & Expertise
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Guided by experienced professionals with deep knowledge of coconut
              agriculture and international trade
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="text-center p-6 bg-white">
              <CardContent className="space-y-4">
                <div className="w-20 h-20 rounded-full coconut-gradient mx-auto flex items-center justify-center text-white text-2xl font-bold">
                  H.M
                </div>
                <h3 className="text-xl font-playfair font-semibold text-primary">
                  Nandish HM
                </h3>
                <p className="text-muted-foreground font-medium">
                  Founder & CEO
                </p>
                <p className="text-sm text-muted-foreground">
                  Deeply connected to coconuts since childhood, driven by a
                  passion to bring authentic and sustainable coconut products to
                  people everywhere.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 bg-white">
              <CardContent className="space-y-4">
                <div className="w-20 h-20 rounded-full nature-gradient mx-auto flex items-center justify-center text-white text-2xl font-bold">
                  S.V
                </div>
                <h3 className="text-xl font-playfair font-semibold text-primary">
                  Srinivas S V
                </h3>
                <p className="text-muted-foreground font-medium">
                  Head of Operations
                </p>
                <p className="text-sm text-muted-foreground">
                  Expert in quality control and export logistics
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 hero-gradient">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-white mb-6">
            Partner with Experience
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join hundreds of satisfied clients who trust us for their coconut
            product needs. Let's grow together.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button
                size="lg"
                variant="secondary"
                className="bg-white text-primary hover:bg-white/90 px-8 py-6 text-lg"
              >
                Start Partnership
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <Link to="/products">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-primary hover:bg-white hover:text-primary px-8 py-6 text-lg"
              >
                View Our Products
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
