import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Leaf, Truck, Award, MessageCircle, ArrowRight, CheckCircle, Package, Globe } from "lucide-react";
import cocopeatImage from "@/assets/cocopeat-product.jpg";
import freshCoconutsImage from "@/assets/fresh-coconuts.jpg";
import cocoPowerImage from "@/assets/coco-power-products.jpg";

const Products = () => {
  const products = [
    {
      id: "cocopeat",
      name: "Premium Cocopeat",
      subtitle: "Agriculture & Gardening Excellence",
      image: cocopeatImage,
      description: "High-quality coconut fiber perfect for agriculture, horticulture, and gardening applications. Our cocopeat provides excellent water retention and soil conditioning properties.",
      features: [
        "100% organic and eco-friendly",
        "Excellent water retention capacity",
        "pH neutral (6.0-7.5)",
        "Low EC (electrical conductivity)",
        "Pest and disease free",
        "Biodegradable and sustainable"
      ],
      applications: [
        "Soil conditioning and amendment",
        "Hydroponic growing medium",
        "Seed starting and propagation",
        "Mulching for water conservation",
        "Greenhouse cultivation",
        "Container gardening"
      ],
      packaging: ["5kg compressed blocks", "25kg compressed blocks", "50kg compressed blocks", "Bulk loose form"],
      category: "Agriculture"
    },
    {
      id: "coco-power",
      name: "Coco Power Products",
      subtitle: "Health & Nutrition Solutions",
      image: cocoPowerImage,
      description: "Premium coconut-based products including coconut oil, flour, and powder. Rich in nutrients and perfect for health-conscious consumers and food industry applications.",
      features: [
        "Virgin coconut oil - cold pressed",
        "Organic coconut flour - gluten-free",
        "Coconut milk powder - instant",
        "Desiccated coconut - various grades",
        "Coconut sugar - natural sweetener",
        "Export quality packaging"
      ],
      applications: [
        "Food and beverage industry",
        "Health and wellness products",
        "Bakery and confectionery",
        "Nutritional supplements",
        "Cosmetic industry",
        "Restaurant and hotel chains"
      ],
      packaging: ["250ml to 5L bottles (oil)", "500g to 25kg bags (flour/powder)", "Custom packaging available"],
      category: "Nutrition"
    },
    {
      id: "fresh-coconuts",
      name: "Thunder Fresh Coconuts",
      subtitle: "Premium Quality Fresh Coconuts",
      image: freshCoconutsImage,
      description: "Hand-selected fresh coconuts with high water content and sweet taste. Perfect for direct consumption, juice extraction, and commercial use in hotels and restaurants.",
      features: [
        "Hand-picked mature coconuts",
        "High water content (300-400ml)",
        "Sweet and fresh taste",
        "7-10 days shelf life",
        "Uniform size and quality",
        "Husked and semi-husked options"
      ],
      applications: [
        "Direct consumption (tender coconut)",
        "Coconut water extraction",
        "Hotel and restaurant supply",
        "Juice bars and cafes",
        "Festival and event catering",
        "Retail and wholesale markets"
      ],
      packaging: ["Individual wrapping", "Carton boxes (12-24 pieces)", "Bulk crates", "Temperature controlled transport"],
      category: "Fresh Produce"
    },
    {
      id: "bulk-trading",
      name: "Bulk Coconut Trading",
      subtitle: "Large Scale Commercial Solutions",
      image: freshCoconutsImage,
      description: "Comprehensive bulk coconut trading services for industries, exporters, and large-scale buyers. We handle everything from sourcing to logistics for your coconut requirements.",
      features: [
        "Direct farm sourcing network",
        "Quality assurance and grading",
        "Flexible quantity requirements",
        "Competitive bulk pricing",
        "Export documentation support",
        "Logistics and transportation"
      ],
      applications: [
        "Coconut oil mills and processors",
        "Food processing industries",
        "Export and trading companies",
        "Coconut product manufacturers",
        "Industrial applications",
        "International buyers"
      ],
      packaging: ["Truck loads (10-20 tons)", "Container loads (20-25 tons)", "Custom quantities", "FOB/CIF terms available"],
      category: "Bulk Trade"
    }
  ];

  const certifications = [
    "FSSAI Certified",
    "Export Quality Standards",
    "Organic Certification",
    "ISO 22000:2018",
    "HACCP Compliant",
    "Global GAP Certified"
  ];

  return (
    <div className="space-y-0">
      {/* Hero Section */}
      <section className="py-20 hero-gradient text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-white/20 text-white border-white/30 hover:bg-white/30">
              🥥 Premium Quality Products
            </Badge>
            <h1 className="text-5xl md:text-6xl font-playfair font-bold mb-6">
              Comprehensive Coconut<br />Product Solutions
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
              From agriculture to nutrition, we provide high-quality coconut products 
              that meet international standards and support sustainable development.
            </p>
          </div>
        </div>
      </section>

      {/* Products Overview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-primary mb-4">
              Our Product Range
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Carefully selected and processed coconut products for diverse applications
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {["Agriculture", "Nutrition", "Fresh Produce", "Bulk Trade"].map((category, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-all duration-300 border-primary/20">
                <CardContent className="space-y-4">
                  <div className="w-12 h-12 rounded-full nature-gradient flex items-center justify-center text-white mx-auto">
                    {index === 0 && <Leaf className="w-6 h-6" />}
                    {index === 1 && <Award className="w-6 h-6" />}
                    {index === 2 && <Package className="w-6 h-6" />}
                    {index === 3 && <Truck className="w-6 h-6" />}
                  </div>
                  <h3 className="font-playfair font-semibold text-primary">
                    {category}
                  </h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Products */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="space-y-20">
            {products.map((product, index) => (
              <div key={product.id} id={product.id} className="scroll-mt-20">
                <Card className="overflow-hidden bg-white shadow-lg">
                  <div className={`grid grid-cols-1 ${index % 2 === 0 ? 'lg:grid-cols-2' : 'lg:grid-cols-2'} gap-0`}>
                    {/* Product Image */}
                    <div className={`${index % 2 === 1 ? 'lg:order-2' : ''} aspect-video lg:aspect-auto overflow-hidden`}>
                      <img 
                        src={product.image} 
                        alt={product.name}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Product Details */}
                    <div className={`${index % 2 === 1 ? 'lg:order-1' : ''} p-8 lg:p-12`}>
                      <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
                        {product.category}
                      </Badge>
                      
                      <h3 className="text-3xl md:text-4xl font-playfair font-bold text-primary mb-2">
                        {product.name}
                      </h3>
                      
                      <p className="text-lg text-coconut-green font-medium mb-4">
                        {product.subtitle}
                      </p>
                      
                      <p className="text-muted-foreground mb-6 leading-relaxed">
                        {product.description}
                      </p>

                      {/* Key Features */}
                      <div className="mb-6">
                        <h4 className="font-playfair font-semibold text-primary mb-3 text-lg">
                          Key Features
                        </h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {product.features.slice(0, 4).map((feature, featureIndex) => (
                            <div key={featureIndex} className="flex items-center space-x-2">
                              <CheckCircle className="w-4 h-4 text-coconut-green flex-shrink-0" />
                              <span className="text-sm text-muted-foreground">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Applications */}
                      <div className="mb-8">
                        <h4 className="font-playfair font-semibold text-primary mb-3 text-lg">
                          Applications
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {product.applications.slice(0, 3).map((app, appIndex) => (
                            <Badge key={appIndex} variant="outline" className="text-xs border-coconut-green/30 text-coconut-green">
                              {app}
                            </Badge>
                          ))}
                          {product.applications.length > 3 && (
                            <Badge variant="outline" className="text-xs border-muted text-muted-foreground">
                              +{product.applications.length - 3} more
                            </Badge>
                          )}
                        </div>
                      </div>

                      {/* CTA Buttons */}
                      <div className="flex flex-col sm:flex-row gap-3">
                        <a href={`https://wa.me/916363784290?text=Hello%20Cocohub!%20I%27d%20like%20to%20get%20a%20quote%20for%20${encodeURIComponent(product.name)}.`} target="_blank" rel="noopener noreferrer" className="flex-1">
                          <Button variant="default" className="hero-gradient w-full">
                            <MessageCircle className="w-4 h-4 mr-2" />
                            Get Quote for {product.name.split(' ')[0]}
                          </Button>
                        </a>
                        <Link to="/contact">
                          <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                            View Details
                            <ArrowRight className="w-4 h-4 ml-2" />
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality & Certifications */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-playfair font-bold text-primary mb-6">
                Quality Assurance & Certifications
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Every product undergoes rigorous quality control processes to ensure 
                we meet international standards and exceed customer expectations.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-8">
                {certifications.map((cert, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <Award className="w-5 h-5 text-coconut-green" />
                    <span className="text-sm font-medium text-foreground">{cert}</span>
                  </div>
                ))}
              </div>

              <Link to="/contact">
                <Button size="lg" variant="default" className="nature-gradient">
                  Request Quality Certificate
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <Card className="p-6 text-center">
                <Globe className="w-8 h-8 text-primary mx-auto mb-4" />
                <div className="text-2xl font-playfair font-bold text-primary mb-2">100%</div>
                <div className="text-sm text-muted-foreground">Export Quality</div>
              </Card>
              <Card className="p-6 text-center">
                <Leaf className="w-8 h-8 text-coconut-green mx-auto mb-4" />
                <div className="text-2xl font-playfair font-bold text-coconut-green mb-2">Organic</div>
                <div className="text-sm text-muted-foreground">Eco-Friendly</div>
              </Card>
              <Card className="p-6 text-center">
                <Award className="w-8 h-8 text-coconut-brown mx-auto mb-4" />
                <div className="text-2xl font-playfair font-bold text-coconut-brown mb-2">15+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </Card>
              <Card className="p-6 text-center">
                <CheckCircle className="w-8 h-8 text-primary mx-auto mb-4" />
                <div className="text-2xl font-playfair font-bold text-primary mb-2">ISO</div>
                <div className="text-sm text-muted-foreground">Certified</div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Custom Solutions */}
      <section className="py-20 cream-gradient">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-primary mb-6">
            Custom Solutions Available
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Need specific packaging, processing, or delivery requirements? 
            We offer customized solutions for bulk orders and special applications.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" variant="default" className="hero-gradient px-8 py-6 text-lg">
                <MessageCircle className="w-5 h-5 mr-2" />
                Discuss Custom Requirements
              </Button>
            </Link>
            <Link to="/export">
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-6 text-lg">
                Export Solutions
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;