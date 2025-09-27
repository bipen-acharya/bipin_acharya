import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { Mail, Phone, MapPin, Linkedin, Github, Send, MessageCircle } from "lucide-react";
import { useState } from "react";

export function Contact() {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const data = new FormData(form);

    try {
      const res = await fetch("https://formspree.io/f/mleanbqa", {
        method: "POST",
        body: data,
        headers: {
          Accept: "application/json",
        },
      });

      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "bipinacharya9191@gmail.com",
      href: "mailto:bipinacharya9191@gmail.com",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+61 434 998 549",
      href: "tel:+61434998549",
      gradient: "from-green-500 to-teal-500",
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Adelaide, Australia",
      href: "#",
      gradient: "from-purple-500 to-pink-500",
    },
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      title: "LinkedIn",
      href: "https://www.linkedin.com/in/bipin-acharya-a9912618b/",
      gradient: "from-blue-600 to-blue-700",
    },
    {
      icon: Github,
      title: "GitHub",
      href: "https://github.com/bipen-acharya",
      gradient: "from-gray-700 to-gray-900",
    },
  ];

  return (
    <section id="contact" className="py-20 bg-white font-body">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4 font-heading">
            Get In Touch
          </h2>
          <div className="w-24 h-1 gradient-primary mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Ready to start your next project? Let's discuss how we can work
            together.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6 font-heading">
                Contact Information
              </h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => {
                  const IconComponent = info.icon;
                  return (
                    <div key={index} className="group">
                      <div className="flex items-center space-x-4 p-4 rounded-2xl bg-gray-50 hover:bg-white hover:shadow-lg transition-all duration-300">
                        <div
                          className={`w-14 h-14 bg-gradient-to-br ${info.gradient} rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}
                        >
                          <IconComponent className="h-7 w-7 text-white" />
                        </div>
                        <div className="flex-1">
                          <div className="font-bold text-gray-900 font-heading">
                            {info.title}
                          </div>
                          {info.href !== "#" ? (
                            <a
                              href={info.href}
                              className="text-gray-600 hover:text-blue-600 transition-colors font-medium"
                            >
                              {info.value}
                            </a>
                          ) : (
                            <div className="text-gray-600 font-medium">
                              {info.value}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6 font-heading">
                Follow Me
              </h3>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-14 h-14 bg-gradient-to-br ${social.gradient} rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg shadow-md`}
                      title={social.title}
                    >
                      <IconComponent className="h-6 w-6 text-white" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3">
            <Card className="border-0 shadow-2xl bg-white rounded-3xl overflow-hidden">
              <CardHeader className="bg-gradient-to-r from-blue-50 to-purple-50 p-8">
                <CardTitle className="text-2xl font-bold text-gray-900 font-heading flex items-center gap-3">
                  <MessageCircle className="h-7 w-7 text-blue-600" />
                  Send Me a Message
                </CardTitle>
                <p className="text-gray-600 mt-2">
                  I'd love to hear about your project and discuss how we can
                  work together.
                </p>
              </CardHeader>
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label
                        htmlFor="name"
                        className="font-heading font-semibold text-gray-900"
                      >
                        Name
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="Your full name"
                        required
                        className="border-2 border-gray-200 focus:border-blue-500 rounded-xl h-12 text-base"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label
                        htmlFor="email"
                        className="font-heading font-semibold text-gray-900"
                      >
                        Email
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="your.email@example.com"
                        required
                        className="border-2 border-gray-200 focus:border-blue-500 rounded-xl h-12 text-base"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label
                      htmlFor="subject"
                      className="font-heading font-semibold text-gray-900"
                    >
                      Subject
                    </Label>
                    <Input
                      id="subject"
                      name="subject"
                      placeholder="What's this about?"
                      required
                      className="border-2 border-gray-200 focus:border-blue-500 rounded-xl h-12 text-base"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label
                      htmlFor="message"
                      className="font-heading font-semibold text-gray-900"
                    >
                      Message
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell me about your project and how I can help..."
                      required
                      rows={6}
                      className="border-2 border-gray-200 focus:border-blue-500 resize-none rounded-xl text-base"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full btn-gradient py-4 text-lg font-heading font-bold rounded-xl"
                    size="lg"
                  >
                    <Send className="mr-3 h-5 w-5" />
                    Send Message
                  </Button>
                </form>

                {status === "success" && (
                  <p className="mt-4 text-green-600 font-semibold">
                    ✅ Thank you! Your message has been sent.
                  </p>
                )}
                {status === "error" && (
                  <p className="mt-4 text-red-600 font-semibold">
                    ❌ Oops! Something went wrong. Please try again.
                  </p>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
