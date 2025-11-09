import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Globe,
  Ship,
  FileCheck,
  Award,
  Truck,
  CheckCircle,
  Clock,
  Shield,
  MessageCircle,
  ArrowRight,
  Package,
  Users,
  MapPin,
  Container,
  ShieldCheck,
  Smile,
  Leaf,
  TrendingUp,
} from "lucide-react";

const Export = () => {
  const exportServices = [
    {
      icon: <Package className="w-8 h-8" />,
      title: "Premium Coconut Products",
      description:
        "Delivering high-quality coconut-based products sourced directly from trusted farms in India.",
      features: [
        "Fresh tender coconuts",
        "Semi-husked coconuts",
        "Cocopeat blocks & grow bags",
        "Coir fiber and related products",
      ],
    },
    {
      icon: <FileCheck className="w-8 h-8" />,
      title: "Reliable Documentation",
      description:
        "Ensuring smooth dispatch and delivery with transparent and accurate documentation.",
      features: [
        "Purchase invoices & packing lists",
        "Quality test reports",
        "Transport & dispatch documentation",
        "Custom-ready paperwork when required",
      ],
    },
    {
      icon: <Truck className="w-8 h-8" />,
      title: "Efficient Logistics",
      description:
        "Strong domestic logistics network ensuring timely delivery and safe product handling.",
      features: [
        "Partnership with reliable transporters",
        "Flexible dispatch options",
        "Real-time coordination updates",
        "Focus on product freshness & safety",
      ],
    },
    {
      icon: <ShieldCheck className="w-8 h-8" />,
      title: "Quality Commitment",
      description:
        "Each batch is carefully checked to ensure consistency, hygiene, and customer satisfaction.",
      features: [
        "Farm-level quality checks",
        "Moisture & weight control",
        "Clean and secure packaging",
        "Customer feedback-driven improvements",
      ],
    },
  ];

  const exportProducts = [
    {
      name: "Fresh Coconuts",
      description:
        "Carefully selected coconuts ideal for retail, juice shops, and local distribution.",
      specifications: [
        "Size: 1.0–1.4 kg",
        "Water content: 250–400ml",
        "Shelf life: 10–12 days",
        "Tender & semi-mature options",
      ],
      packaging: "Custom packaging available based on buyer needs",
      markets: ["Domestic & regional supply across India"],
    },
    {
      name: "Cocopeat Blocks",
      description:
        "Eco-friendly growing medium for nurseries, farms, and horticulture projects.",
      specifications: [
        "5:1 compression ratio",
        "pH 5.5–6.8",
        "Low EC (<0.7 mS/cm)",
        "Moisture < 20%",
      ],
      packaging: "Standard 5kg blocks | Custom labeling available",
      markets: ["Pan-India agriculture & nursery supply"],
    },
    {
      name: "Coir Fiber",
      description: "Natural coir fiber for industrial and agricultural use.",
      specifications: [
        "High tensile strength",
        "Low moisture content",
        "Golden brown fiber",
        "Bundled and baled neatly",
      ],
      packaging: "Baled fiber packs (90–120kg each)",
      markets: ["Domestic coir industries & local suppliers"],
    },
  ];

  const exportProcess = [
    {
      step: "01",
      title: "Inquiry & Requirement",
      description:
        "Customers share their needs and specifications through our simple inquiry process.",
    },
    {
      step: "02",
      title: "Quotation & Confirmation",
      description:
        "We provide detailed product quotations and confirm all requirements before dispatch.",
    },
    {
      step: "03",
      title: "Product Preparation",
      description:
        "Products are sourced, cleaned, and packed carefully according to customer specifications.",
    },
    {
      step: "04",
      title: "Quality Check",
      description:
        "Each order undergoes a thorough inspection before delivery to ensure quality and freshness.",
    },
    {
      step: "05",
      title: "Dispatch & Delivery",
      description:
        "Efficient logistics ensure your products reach safely and on time.",
    },
  ];

  const exportStats = [
    {
      number: "100%",
      label: "Customer Satisfaction",
      icon: <Smile className="w-6 h-6" />,
    },
    {
      number: "Trusted",
      label: "Farm Partnerships",
      icon: <Leaf className="w-6 h-6" />,
    },
    {
      number: "Expanding",
      label: "Market Presence",
      icon: <TrendingUp className="w-6 h-6" />,
    },
    {
      number: "Fresh",
      label: "Quality Guarantee",
      icon: <CheckCircle className="w-6 h-6" />,
    },
  ];

  return (
    <div className="space-y-0">
      {/* Hero Section */}
      <section className="py-20 hero-gradient text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-white/20 text-white border-white/30 hover:bg-white/30">
              🌴 Fresh from Indian Farms
            </Badge>
            <h1 className="text-5xl md:text-6xl font-playfair font-bold mb-6">
              Premium Coconut
              <br />
              Supply & Distribution
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
              Delivering farm-fresh coconuts and related products with a focus
              on quality, reliability, and customer satisfaction. Proudly
              connecting local farmers to growing markets across India and
              beyond.
            </p>
          </div>
        </div>
      </section>

      {/* Export Stats */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {exportStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 rounded-full nature-gradient flex items-center justify-center text-white mx-auto mb-4">
                  {stat.icon}
                </div>
                <div className="text-3xl md:text-4xl font-playfair font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-muted-foreground text-sm md:text-base">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Export Services */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-primary mb-4">
              Comprehensive Export Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              End-to-end export solutions designed for international success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {exportServices.map((service, index) => (
              <Card
                key={index}
                className="p-8 hover:shadow-lg transition-all duration-300"
              >
                <CardContent className="space-y-6">
                  <div className="w-16 h-16 rounded-full coconut-gradient flex items-center justify-center text-white">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-playfair font-bold text-primary">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                  <div className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <div
                        key={featureIndex}
                        className="flex items-start space-x-3"
                      >
                        <CheckCircle className="w-5 h-5 text-coconut-green mt-0.5 flex-shrink-0" />
                        <span className="text-foreground text-sm">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Export Products */}
      <section className="py-20 cream-gradient">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-primary mb-4">
              Export Product Portfolio
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Premium coconut products tailored for international markets
            </p>
          </div>

          <div className="space-y-8">
            {exportProducts.map((product, index) => (
              <Card key={index} className="overflow-hidden bg-white">
                <CardContent className="p-8">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2">
                      <h3 className="text-2xl font-playfair font-bold text-primary mb-3">
                        {product.name}
                      </h3>
                      <p className="text-muted-foreground mb-6 leading-relaxed">
                        {product.description}
                      </p>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-semibold text-primary mb-3">
                            Specifications
                          </h4>
                          <ul className="space-y-2">
                            {product.specifications.map((spec, specIndex) => (
                              <li
                                key={specIndex}
                                className="flex items-start space-x-2"
                              >
                                <CheckCircle className="w-4 h-4 text-coconut-green mt-0.5 flex-shrink-0" />
                                <span className="text-sm text-muted-foreground">
                                  {spec}
                                </span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <h4 className="font-semibold text-primary mb-3">
                            Export Markets
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {product.markets.map((market, marketIndex) => (
                              <Badge
                                key={marketIndex}
                                variant="outline"
                                className="border-coconut-green/30 text-coconut-green"
                              >
                                {market}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-secondary/30 rounded-lg p-6">
                      <h4 className="font-semibold text-primary mb-3 flex items-center">
                        <Package className="w-5 h-5 mr-2" />
                        Packaging Options
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {product.packaging}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Export Process */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-primary mb-4">
              Our Export Process
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Streamlined process ensuring smooth international transactions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {exportProcess.map((process, index) => (
              <Card
                key={index}
                className="relative p-6 text-center hover:shadow-lg transition-all duration-300 group"
              >
                <CardContent className="space-y-4">
                  <div className="w-16 h-16 rounded-full hero-gradient flex items-center justify-center text-white mx-auto text-xl font-bold group-hover:scale-110 transition-transform duration-300">
                    {process.step}
                  </div>
                  <h3 className="text-lg font-playfair font-semibold text-primary">
                    {process.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {process.description}
                  </p>
                </CardContent>
                {index < exportProcess.length - 1 && (
                  <div className="hidden lg:block absolute top-8 -right-4 w-8 h-0.5 bg-gradient-to-r from-primary to-coconut-green"></div>
                )}
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications & Compliance */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-playfair font-bold text-primary mb-6">
                Commitment to Quality
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                We follow strict quality and hygiene standards at every stage —
                from sourcing to packaging — ensuring our customers receive only
                the best coconuts and by-products.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-8">
                {[
                  "FSSAI Registered",
                  "Locally Sourced from Verified Farms",
                  "Clean & Hygienic Processing",
                  "Strict Quality Inspection",
                  "Freshness & Weight Check",
                  "Transparent Supply Process",
                ].map((cert, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <Shield className="w-5 h-5 text-coconut-green" />
                    <span className="text-sm font-medium text-foreground">
                      {cert}
                    </span>
                  </div>
                ))}
              </div>

              <Link to="/contact">
                <Button size="lg" variant="default" className="nature-gradient">
                  Request Product Details
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <Card className="p-6 text-center">
                <FileCheck className="w-8 h-8 text-primary mx-auto mb-4" />
                <div className="text-2xl font-playfair font-bold text-primary mb-2">
                  100%
                </div>
                <div className="text-sm text-muted-foreground">
                  Document Compliance
                </div>
              </Card>
              <Card className="p-6 text-center">
                <Ship className="w-8 h-8 text-coconut-green mx-auto mb-4" />
                <div className="text-2xl font-playfair font-bold text-coconut-green mb-2">
                  0%
                </div>
                <div className="text-sm text-muted-foreground">
                  Customs Rejection
                </div>
              </Card>
              <Card className="p-6 text-center">
                <Clock className="w-8 h-8 text-coconut-brown mx-auto mb-4" />
                <div className="text-2xl font-playfair font-bold text-coconut-brown mb-2">
                  24h
                </div>
                <div className="text-sm text-muted-foreground">
                  Document Processing
                </div>
              </Card>
              <Card className="p-6 text-center">
                <Users className="w-8 h-8 text-primary mx-auto mb-4" />
                <div className="text-2xl font-playfair font-bold text-primary mb-2">
                  24/7
                </div>
                <div className="text-sm text-muted-foreground">
                  Support Available
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 hero-gradient">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-white mb-6">
            Ready to Export with Confidence?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Let our export expertise help you access global markets. From
            documentation to delivery, we handle everything for your success.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button
                size="lg"
                variant="secondary"
                className="bg-white text-primary hover:bg-white/90 px-8 py-6 text-lg"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Get Export Quotation
              </Button>
            </Link>
            <a href="mailto:contact.cocohub@gmail.com">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-primary hover:bg-white hover:text-primary px-8 py-6 text-lg"
              >
                Email Export Team
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Export;
