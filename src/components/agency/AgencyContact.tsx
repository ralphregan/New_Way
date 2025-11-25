import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Label } from "../ui/label";
import { Mail, Phone, MapPin, Send, MessageSquare } from "lucide-react";
import { Card, CardContent } from "../ui/card";

export function AgencyContact() {
  return (
    <section id="contact" className="py-24 bg-linear-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-linear-to-r from-[#5EBEAF] to-[#3B9B8E] bg-clip-text text-transparent mb-4">
            Get In Touch
          </div>
          <h2 className="text-4xl md:text-5xl text-gray-900 mb-4">
            Ready to <span className="bg-linear-to-r from-[#5EBEAF] to-[#3B9B8E] bg-clip-text text-transparent">Grow Your Business?</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Let's discuss how we can help you achieve your digital marketing goals
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Info Cards */}
          <div className="space-y-6">
            <Card className="border-2 border-gray-100 hover:border-teal-200 transition-colors">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-linear-to-r from-teal-100 to-emerald-100 rounded-xl flex items-center justify-center mb-4">
                  <Mail className="w-6 h-6 text-[#3B9B8E]" />
                </div>
                <h3 className="text-gray-900 mb-2">Email Us</h3>
                <p className="text-gray-600">Neuewege.agency@gmail.com</p>
                <p className="text-gray-600">Neuewege.agency@gmail.com</p>
              </CardContent>
            </Card>

            <Card className="border-2 border-gray-100 hover:border-teal-200 transition-colors">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-linear-to-r from-teal-100 to-emerald-100 rounded-xl flex items-center justify-center mb-4">
                  <Phone className="w-6 h-6 text-[#3B9B8E]" />
                </div>
                <h3 className="text-gray-900 mb-2">Call Us</h3>
                <p className="text-gray-600">+49 160 3893673</p>
                <p className="text-gray-600">Mon-Fri, 9AM-6PM</p>
              </CardContent>
            </Card>

            <Card className="border-2 border-gray-100 hover:border-teal-200 transition-colors">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-linear-to-r from-teal-100 to-emerald-100 rounded-xl flex items-center justify-center mb-4">
                  <MapPin className="w-6 h-6 text-[#3B9B8E]" />
                </div>
                <h3 className="text-gray-900 mb-2">Visit Us</h3>
                <p className="text-gray-600">Freiligrathstraße 9, Magdeburg, Germany</p>
                <p className="text-gray-600">Innovation City, MG 36104</p>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="border-2 border-gray-100 shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-linear-to-r from-[#5EBEAF] to-[#3B9B8E] rounded-lg flex items-center justify-center">
                    <MessageSquare className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-2xl text-gray-900">Send us a message</h3>
                </div>

                <form className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName" className="text-gray-700">First Name</Label>
                      <Input
                        id="firstName"
                        placeholder="John"
                        className="border-gray-300 focus:border-[#3B9B8E] focus:ring-[#3B9B8E]"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName" className="text-gray-700">Last Name</Label>
                      <Input
                        id="lastName"
                        placeholder="Doe"
                        className="border-gray-300 focus:border-[#3B9B8E] focus:ring-[#3B9B8E]"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-gray-700">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="john.doe@example.com"
                      className="border-gray-300 focus:border-[#3B9B8E] focus:ring-[#3B9B8E]"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="company" className="text-gray-700">Company Name</Label>
                    <Input
                      id="company"
                      placeholder="Your Company"
                      className="border-gray-300 focus:border-[#3B9B8E] focus:ring-[#3B9B8E]"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-gray-700">Message</Label>
                    <Textarea
                      id="message"
                      placeholder="Tell us about your project..."
                      rows={5}
                      className="border-gray-300 focus:border-[#3B9B8E] focus:ring-[#3B9B8E] resize-none"
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full bg-linear-to-r from-[#5EBEAF] to-[#3B9B8E] hover:from-[#4AADA0] hover:to-[#2A8A7D] text-white py-6"
                  >
                    Send Message
                    <Send className="w-4 h-4 ml-2" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}