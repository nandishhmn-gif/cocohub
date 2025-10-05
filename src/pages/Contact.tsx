import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { 
  Phone, 
  Mail, 
  MapPin, 
  MessageCircle, 
  Clock, 
  Send,
  CheckCircle,
  Globe,
  Truck,
  Users,
  ArrowRight
} from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    productInterest: "",
    orderType: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Here you would typically send the form data to your backend
    console.log("Form submitted:", formData);
    
    toast({
      title: "Message Sent Successfully!",
      description: "We'll get back to you within 24 hours with a detailed quotation.",
    });

    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      company: "",
      productInterest: "",
      orderType: "",
      message: ""
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone Number",
      details: ["+91 6363 784290", "Owner: Nandish HM"],
      action: "Call Now",
      link: "tel:+916363784290"
    },
    {
      icon: <MessageCircle className="w-6 h-6" />,
      title: "WhatsApp",
      details: ["+91 6363 784290"],
      action: "Chat on WhatsApp",
      link: "https://wa.me/916363784290?text=Hello%20Cocohub!%20I%27d%20like%20to%20get%20a%20quote%20for%20your%20coconut%20products."
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email Address",
      details: ["contact.cocohub@gmail.com"],
      action: "Send Email",
      link: "mailto:contact.cocohub@gmail.com"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Head Office",
      details: ["Pattanagere Main Road", "Rajarajeshwari Nagar", "Bengaluru - 560098"],
      action: "Get Directions",
      link: "https://maps.google.com/?q=Pattanagere+Main+Road+Rajarajeshwari+Nagar+Bengaluru+560098"
    }
  ];

  const officeHours = [
    { day: "Monday - Friday", hours: "9:00 AM - 6:00 PM" },
    { day: "Saturday", hours: "9:00 AM - 4:00 PM" },
    { day: "Sunday", hours: "Emergency Only" }
  ];

  const quickStats = [
    { icon: <Clock className="w-6 h-6" />, label: "Response Time", value: "< 24 Hours" },
    { icon: <Users className="w-6 h-6" />, label: "Expert Team", value: "Available 24/7" },
    { icon: <Globe className="w-6 h-6" />, label: "Global Reach", value: "50+ Countries" },
    { icon: <Truck className="w-6 h-6" />, label: "Delivery", value: "Worldwide" }
  ];

  return (
    <div className="space-y-0">
      {/* Hero Section */}
      <section className="py-20 hero-gradient text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-white/20 text-white border-white/30 hover:bg-white/30">
              📞 24/7 Available for Export Inquiries
            </Badge>
            <h1 className="text-5xl md:text-6xl font-playfair font-bold mb-6">
              Get Your Coconut<br />Products Quote Today
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
              Ready to partner with India's leading coconut exporter? 
              Contact us for premium products, competitive pricing, and reliable delivery worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {quickStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 rounded-full nature-gradient flex items-center justify-center text-white mx-auto mb-4">
                  {stat.icon}
                </div>
                <div className="text-2xl font-playfair font-bold text-primary mb-1">
                  {stat.value}
                </div>
                <div className="text-muted-foreground text-sm">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-4xl font-playfair font-bold text-primary mb-6">
                Get Your Quote
              </h2>
              <p className="text-muted-foreground mb-8 text-lg">
                Fill out the form below and our export team will provide you with 
                a detailed quotation within 24 hours.
              </p>

              <Card className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        placeholder="Enter your full name"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleInputChange("phone", e.target.value)}
                        placeholder="+91 12345 67890"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        placeholder="your@email.com"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="company">Company Name</Label>
                      <Input
                        id="company"
                        value={formData.company}
                        onChange={(e) => handleInputChange("company", e.target.value)}
                        placeholder="Your company name"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="product">Product Interest *</Label>
                      <Select onValueChange={(value) => handleInputChange("productInterest", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select product" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="cocopeat">Cocopeat</SelectItem>
                          <SelectItem value="fresh-coconuts">Fresh Coconuts</SelectItem>
                          <SelectItem value="coco-power">Coco Power Products</SelectItem>
                          <SelectItem value="bulk-trading">Bulk Trading</SelectItem>
                          <SelectItem value="all-products">All Products</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="orderType">Order Type</Label>
                      <Select onValueChange={(value) => handleInputChange("orderType", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select order type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="domestic">Domestic Supply</SelectItem>
                          <SelectItem value="export">Export Order</SelectItem>
                          <SelectItem value="bulk">Bulk Trading</SelectItem>
                          <SelectItem value="sample">Sample Request</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message / Requirements *</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => handleInputChange("message", e.target.value)}
                      placeholder="Please describe your requirements including quantity, destination, timeline, etc."
                      rows={5}
                      required
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full hero-gradient">
                    <Send className="w-5 h-5 mr-2" />
                    Send Quote Request
                  </Button>

                  <p className="text-sm text-muted-foreground text-center">
                    By submitting this form, you agree to receive communications from us. 
                    We respect your privacy and will never share your information.
                  </p>
                </form>
              </Card>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-4xl font-playfair font-bold text-primary mb-6">
                Contact Information
              </h2>
              <p className="text-muted-foreground mb-8 text-lg">
                Multiple ways to connect with our coconut export specialists. 
                Choose your preferred method of communication.
              </p>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <Card key={index} className="p-6 hover:shadow-lg transition-all duration-300">
                    <CardContent className="flex items-start space-x-4">
                      <div className="w-12 h-12 rounded-full coconut-gradient flex items-center justify-center text-white flex-shrink-0">
                        {info.icon}
                      </div>
                      <div className="flex-grow">
                        <h3 className="font-playfair font-semibold text-primary mb-2">
                          {info.title}
                        </h3>
                        <div className="space-y-1 mb-3">
                          {info.details.map((detail, detailIndex) => (
                            <p key={detailIndex} className="text-muted-foreground">
                              {detail}
                            </p>
                          ))}
                        </div>
                        <a
                          href={info.link}
                          target={info.link.startsWith("http") ? "_blank" : "_self"}
                          rel={info.link.startsWith("http") ? "noopener noreferrer" : ""}
                        >
                          <Button variant="outline" size="sm" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                            {info.action}
                            <ArrowRight className="w-4 h-4 ml-2" />
                          </Button>
                        </a>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Office Hours */}
              <Card className="mt-8 p-6">
                <CardContent>
                  <h3 className="font-playfair font-semibold text-primary mb-4 flex items-center">
                    <Clock className="w-5 h-5 mr-2" />
                    Office Hours
                  </h3>
                  <div className="space-y-2">
                    {officeHours.map((schedule, index) => (
                      <div key={index} className="flex justify-between items-center">
                        <span className="text-muted-foreground">{schedule.day}</span>
                        <span className="font-medium text-foreground">{schedule.hours}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 p-3 bg-coconut-green/10 rounded-md">
                    <p className="text-sm text-coconut-green font-medium">
                      🌍 Export inquiries are handled 24/7 via WhatsApp and email
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 cream-gradient">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-primary mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Quick answers to common questions about our coconut products and services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {[
              {
                question: "What is your minimum order quantity?",
                answer: "Our MOQ varies by product: Cocopeat (5 tons), Fresh Coconuts (1 ton), Coco Power products (500kg). For export orders, we can customize based on container loads."
              },
              {
                question: "How long does delivery take?",
                answer: "Domestic delivery: 5-7 days. Export delivery: 15-30 days depending on destination. Express shipping available for samples and urgent orders."
              },
              {
                question: "Do you provide export documentation?",
                answer: "Yes, we handle all export documentation including certificates of origin, phytosanitary certificates, quality reports, and commercial invoices."
              },
              {
                question: "Can you provide product samples?",
                answer: "Absolutely! We provide free samples for serious buyers. Sample shipping charges apply for international destinations."
              },
              {
                question: "What payment methods do you accept?",
                answer: "We accept bank transfers, Letters of Credit (L/C), and for established clients, we offer flexible payment terms. All major currencies accepted."
              },
              {
                question: "Do you offer private labeling?",
                answer: "Yes, we offer private labeling and custom packaging for bulk orders. Our team can help design packaging that meets your brand requirements."
              }
            ].map((faq, index) => (
              <Card key={index} className="p-6 bg-white">
                <CardContent>
                  <h3 className="font-playfair font-semibold text-primary mb-3">
                    {faq.question}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {faq.answer}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="py-20 hero-gradient">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-white mb-6">
            Need Urgent Assistance?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            For urgent export inquiries or time-sensitive orders, 
            contact our emergency response team available 24/7.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://wa.me/916363784290?text=Hello%20Cocohub!%20I%20need%20urgent%20assistance%20with%20coconut%20products." target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90 px-8 py-6 text-lg">
                <MessageCircle className="w-5 h-5 mr-2" />
                WhatsApp Emergency
              </Button>
            </a>
            <a href="tel:+916363784290">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary px-8 py-6 text-lg">
                <Phone className="w-5 h-5 mr-2" />
                Call Emergency Hotline
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;