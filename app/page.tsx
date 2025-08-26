"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Header />
      <HeroSection />
      <SocialProof />
      <FeaturesOverview />
      <DetailedFeatures />
      <IntegrationsSection />
      <PricingSection />
      <TestimonialsSection />
      <FAQSection />
      <CTASection />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <motion.header
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-gray-100 z-50"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Image
            src="https://cdn-icons-png.flaticon.com/512/8637/8637099.png"
            alt="NeuralFlow AI Logo"
            width={32}
            height={32}
            className="rounded-lg"
          />
          <span className="text-xl font-bold text-gray-900">NeuralFlow AI</span>
        </div>

        <nav className="hidden md:flex items-center space-x-8">
          <a
            href="#features"
            className="text-gray-600 hover:text-indigo-600 transition-colors"
          >
            Features
          </a>
          <a
            href="#integrations"
            className="text-gray-600 hover:text-indigo-600 transition-colors"
          >
            Integrations
          </a>
          <a
            href="#pricing"
            className="text-gray-600 hover:text-indigo-600 transition-colors"
          >
            Pricing
          </a>
          <a
            href="#faq"
            className="text-gray-600 hover:text-indigo-600 transition-colors"
          >
            FAQ
          </a>
        </nav>

        <div className="flex items-center space-x-4">
          <button className="text-gray-600 hover:text-indigo-600 transition-colors">
            Sign In
          </button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition-colors"
          >
            Start Free Trial
          </motion.button>
        </div>
      </div>
    </motion.header>
  );
}

function HeroSection() {
  return (
    <section className="pt-24 pb-16 lg:pt-32 lg:pb-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-orange-50"></div>

      <div className="absolute top-20 right-10 w-32 h-32 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full opacity-20 blur-xl"></div>
      <div className="absolute bottom-20 left-10 w-24 h-24 bg-gradient-to-br from-indigo-400 to-purple-600 rounded-full opacity-20 blur-xl"></div>

      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:pr-8"
          >
            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6"
            >
              Transform Your Data Into
              <span className="bg-gradient-to-r from-indigo-600 to-purple-700 bg-clip-text text-transparent">
                {" "}
                AI-Powered Insights
              </span>
            </motion.h1>

            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl text-gray-600 mb-8 leading-relaxed"
            >
              Unlock the full potential of your business data with our advanced
              AI analytics platform. Get real-time insights, predictive
              analytics, and automated reporting in one seamless dashboard.
            </motion.p>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 mb-12"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-indigo-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-indigo-700 transition-all shadow-lg hover:shadow-xl"
              >
                Start Free 14-Day Trial
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border border-gray-300 text-gray-700 px-8 py-4 rounded-lg text-lg font-semibold hover:border-indigo-600 hover:text-indigo-600 transition-all"
              >
                Watch Demo
              </motion.button>
            </motion.div>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex items-center space-x-6 text-sm text-gray-500"
            >
              <div className="flex items-center">
                <svg
                  className="w-5 h-5 text-green-500 mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                No credit card required
              </div>
              <div className="flex items-center">
                <svg
                  className="w-5 h-5 text-green-500 mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                Setup in 5 minutes
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="lg:pl-8"
          >
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl p-6 transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <div className="bg-gray-50 rounded-xl p-4 mb-4">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold text-gray-900">
                      Revenue Analytics
                    </h3>
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div className="bg-white p-3 rounded-lg text-center">
                      <div className="text-2xl font-bold text-indigo-600">
                        $2.4M
                      </div>
                      <div className="text-xs text-gray-500">This Month</div>
                    </div>
                    <div className="bg-white p-3 rounded-lg text-center">
                      <div className="text-2xl font-bold text-green-600">
                        +24%
                      </div>
                      <div className="text-xs text-gray-500">Growth</div>
                    </div>
                    <div className="bg-white p-3 rounded-lg text-center">
                      <div className="text-2xl font-bold text-orange-600">
                        156K
                      </div>
                      <div className="text-xs text-gray-500">Users</div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-indigo-500 to-purple-600 h-32 rounded-lg relative overflow-hidden">
                    <div className="absolute inset-0 flex items-end justify-around p-4">
                      <div className="bg-white/20 w-8 h-16 rounded-t"></div>
                      <div className="bg-white/20 w-8 h-20 rounded-t"></div>
                      <div className="bg-white/20 w-8 h-24 rounded-t"></div>
                      <div className="bg-white/20 w-8 h-18 rounded-t"></div>
                      <div className="bg-white/20 w-8 h-28 rounded-t"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function SocialProof() {
  const companies = [
  {
    name: "Microsoft",
    logo: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/microsoft.svg",
  },
  {
    name: "Netflix",
    logo: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/netflix.svg",
  },
  {
    name: "Apple",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apple/apple-original.svg",
  },
  {
    name: "Google",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg",
  },
  {
    name: "Meta",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/facebook/facebook-original.svg",
  },
];


  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-gray-500 mb-8">
            Trusted by 50,000+ companies worldwide
          </p>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center opacity-60">
            {companies.map((company, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex justify-center"
              >
                <div className="w-24 h-12 rounded-lg flex items-center justify-center">
                  <Image 
                    src={company.logo}
                    alt={`${company.name} logo`}
                    width={96}
                    height={48}
                    className="h-8 w-auto object-contain opacity-60 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-300"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function FeaturesOverview() {
  const features = [
    {
      icon: "🧠",
      title: "AI-Powered Analytics",
      description:
        "Advanced machine learning algorithms automatically detect patterns and anomalies in your data.",
    },
    {
      icon: "📊",
      title: "Real-time Dashboards",
      description:
        "Beautiful, interactive dashboards that update in real-time with customizable widgets and metrics.",
    },
    {
      icon: "🔮",
      title: "Predictive Modeling",
      description:
        "Forecast future trends and outcomes with our sophisticated predictive analytics engine.",
    },
    {
      icon: "⚡",
      title: "Lightning Fast",
      description:
        "Process millions of data points in seconds with our optimized cloud infrastructure.",
    },
    {
      icon: "🔒",
      title: "Enterprise Security",
      description:
        "Bank-level security with end-to-end encryption and compliance certifications.",
    },
    {
      icon: "🔗",
      title: "Easy Integration",
      description:
        "Connect with 100+ data sources and tools through our comprehensive API ecosystem.",
    },
  ];

  return (
    <section id="features" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Everything You Need to Make
            <span className="bg-gradient-to-r from-indigo-600 to-purple-700 bg-clip-text text-transparent">
              {" "}
              Data-Driven Decisions
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our comprehensive AI platform provides all the tools and insights
            you need to transform raw data into actionable business
            intelligence.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-gray-50 p-8 rounded-xl hover:shadow-lg transition-all cursor-pointer"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function DetailedFeatures() {
  const detailedFeatures = [
    {
      title: "Advanced Analytics Engine",
      description:
        "Our proprietary AI engine processes complex data sets and delivers insights that would take human analysts weeks to uncover.",
      benefits: [
        "Automated pattern recognition",
        "Anomaly detection and alerts",
        "Custom ML model training",
        "Statistical significance testing",
      ],
      image: "https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg",
    },
    {
      title: "Interactive Data Visualization",
      description:
        "Create stunning, interactive visualizations that tell compelling stories with your data and engage stakeholders.",
      benefits: [
        "Drag-and-drop dashboard builder",
        "50+ chart types and widgets",
        "Real-time data streaming",
        "Mobile-optimized views",
      ],
      image: "https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg",
    },
    {
      title: "Collaborative Workspace",
      description:
        "Share insights, collaborate on analyses, and maintain data governance with powerful team collaboration features.",
      benefits: [
        "Team workspaces and permissions",
        "Comment and annotation system",
        "Version control for reports",
        "Audit trail and compliance",
      ],
      image:
        "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg",
    },
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {detailedFeatures.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className={`grid lg:grid-cols-2 gap-12 items-center mb-24 ${
              index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
            }`}
          >
            <div className={index % 2 === 1 ? "lg:col-start-2" : ""}>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                {feature.title}
              </h3>
              <p className="text-lg text-gray-600 mb-8">
                {feature.description}
              </p>

              <ul className="space-y-4 mb-8">
                {feature.benefits.map((benefit, benefitIndex) => (
                  <motion.li
                    key={benefitIndex}
                    initial={{ x: -20, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: benefitIndex * 0.1 }}
                    className="flex items-center"
                  >
                    <div className="w-2 h-2 bg-indigo-600 rounded-full mr-4"></div>
                    <span className="text-gray-700">{benefit}</span>
                  </motion.li>
                ))}
              </ul>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="text-indigo-600 font-semibold hover:text-indigo-700 transition-colors"
              >
                Learn more →
              </motion.button>
            </div>

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className={`relative ${index % 2 === 1 ? "lg:col-start-1" : ""}`}
            >
              <div className="bg-white p-6 rounded-2xl shadow-xl">
                <Image
                  src={feature.image}
                  alt={feature.title}
                  width={600}
                  height={400}
                  className="rounded-xl"
                />
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function IntegrationsSection() {
const integrations = [
  { name: "Salesforce", category: "CRM", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/salesforce/salesforce-original.svg" },
  { name: "HubSpot", category: "Marketing", logo: "https://www.hubspot.com/hubfs/HubSpot_Logos/HubSpot-Inversed-Favicon.png" },
  { name: "Slack", category: "Communication", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/slack/slack-original.svg" },
  { name: "Google Analytics", category: "Analytics", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg" },
  { name: "Shopify", category: "E-commerce", logo: "https://cdn.worldvectorlogo.com/logos/shopify.svg" },
  { name: "AWS", category: "Cloud", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" },
  { name: "Azure", category: "Cloud", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg" },
  { name: "PostgreSQL", category: "Database", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
  { name: "MongoDB", category: "Database", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
  { name: "Stripe", category: "Payments", logo: "https://images.ctfassets.net/fzn2n1nzq965/HTTOloNPhisV9P4hlMPNA/cacf1bb88b9fc492dfad34378d844280/Stripe_icon_-_square.svg" },
  { name: "Zendesk", category: "Support", logo: "https://cdn.worldvectorlogo.com/logos/zendesk-2.svg" }
];



  return (
    <section id="integrations" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Connect Your Entire
            <span className="bg-gradient-to-r from-indigo-600 to-purple-700 bg-clip-text text-transparent">
              {" "}
              Tech Stack
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Seamlessly integrate with 100+ popular tools and platforms. Set up
            takes minutes, not weeks.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 mb-12">
          {integrations.map((integration, index) => (
            <motion.div
              key={index}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              whileHover={{ scale: 1.05 }}
              className="bg-gray-50 p-6 rounded-xl text-center hover:shadow-md transition-all cursor-pointer"
            >
              <div className="w-12 h-12 rounded-lg mx-auto mb-3 flex items-center justify-center">
                <Image 
                  src={integration.logo}
                  alt={`${integration.name} logo`}
                  width={48}
                  height={48}
                  className="w-8 h-8 object-contain"
                />
              </div>
              <h4 className="font-semibold text-gray-900 text-sm">
                {integration.name}
              </h4>
              <p className="text-xs text-gray-500">{integration.category}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="border border-indigo-600 text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-indigo-600 hover:text-white transition-all"
          >
            View All Integrations
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}

function PricingSection() {
  const plans = [
    {
      name: "Starter",
      price: "$29",
      period: "/month",
      description: "Perfect for small teams getting started with AI analytics",
      features: [
        "Up to 5 data sources",
        "10GB data storage",
        "Basic AI insights",
        "Standard dashboards",
        "Email support",
        "API access",
      ],
      popular: false,
    },
    {
      name: "Professional",
      price: "$79",
      period: "/month",
      description: "Advanced features for growing businesses",
      features: [
        "Up to 25 data sources",
        "100GB data storage",
        "Advanced AI analytics",
        "Custom dashboards",
        "Priority support",
        "Advanced API access",
        "Custom integrations",
        "Team collaboration",
      ],
      popular: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      description: "Tailored solutions for large organizations",
      features: [
        "Unlimited data sources",
        "Unlimited data storage",
        "Enterprise AI models",
        "White-label dashboards",
        "Dedicated support",
        "On-premise deployment",
        "Custom ML models",
        "Advanced security",
        "SLA guarantee",
      ],
      popular: false,
    },
  ];

  return (
    <section id="pricing" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Choose Your
            <span className="bg-gradient-to-r from-indigo-600 to-purple-700 bg-clip-text text-transparent">
              {" "}
              Perfect Plan
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Start free, scale as you grow. All plans include our core AI
            analytics features.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative bg-white rounded-2xl shadow-lg p-8 ${
                plan.popular
                  ? "border-2 border-indigo-600 transform scale-105"
                  : "border border-gray-200"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-indigo-600 text-white px-6 py-2 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {plan.name}
                </h3>
                <p className="text-gray-600 mb-4">{plan.description}</p>
                <div className="flex items-baseline justify-center">
                  <span className="text-5xl font-bold text-gray-900">
                    {plan.price}
                  </span>
                  <span className="text-xl text-gray-500 ml-1">
                    {plan.period}
                  </span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <svg
                      className="w-5 h-5 text-green-500 mr-3 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`w-full py-4 rounded-lg font-semibold transition-all ${
                  plan.popular
                    ? "bg-indigo-600 text-white hover:bg-indigo-700"
                    : "border border-indigo-600 text-indigo-600 hover:bg-indigo-600 hover:text-white"
                }`}
              >
                {plan.name === "Enterprise" ? "Contact Sales" : "Get Started"}
              </motion.button>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <p className="text-gray-500 mb-4">
            All plans include 14-day free trial • No credit card required
          </p>
          <p className="text-sm text-gray-400">
            Need a custom solution?{" "}
            <a href="#" className="text-indigo-600 hover:text-indigo-700">
              Contact our sales team
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}

function TestimonialsSection() {
  const testimonials = [
    {
      quote:
        "NeuralFlow AI transformed how we understand our customers. The insights we get now would have taken our team months to uncover manually.",
      author: "Sarah Chen",
      position: "Head of Analytics",
      company: "TechCorp",
      avatar:
        "https://images.pexels.com/photos/3184460/pexels-photo-3184460.jpeg",
    },
    {
      quote:
        "The predictive analytics have been game-changing. We've increased our conversion rates by 40% since implementing NeuralFlow AI.",
      author: "Michael Rodriguez",
      position: "VP of Marketing",
      company: "GrowthLab",
      avatar:
        "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg",
    },
    {
      quote:
        "Finally, a platform that makes complex data accessible to everyone on our team. The visual dashboards are incredible.",
      author: "Emily Watson",
      position: "CEO",
      company: "DataFirst",
      avatar:
        "https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg",
    },
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Loved by Teams at
            <span className="bg-gradient-to-r from-indigo-600 to-purple-700 bg-clip-text text-transparent">
              {" "}
              Leading Companies
            </span>
          </h2>
          <p className="text-xl text-gray-600">
            See what our customers are saying about NeuralFlow AI
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white p-8 rounded-xl shadow-lg"
            >
              <div className="text-indigo-600 text-4xl mb-4">{`"`}</div>
              <p className="text-gray-600 mb-6 text-lg italic">
                {testimonial.quote}
              </p>

              <div className="flex items-center">
                <Image
                  src={testimonial.avatar}
                  alt={testimonial.author}
                  width={48}
                  height={48}
                  className="rounded-full mr-4"
                />
                <div>
                  <div className="font-semibold text-gray-900">
                    {testimonial.author}
                  </div>
                  <div className="text-sm text-gray-500">
                    {testimonial.position} at {testimonial.company}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQSection() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const faqs = [
    {
      question: "How quickly can I get started with NeuralFlow AI?",
      answer:
        "You can be up and running in under 5 minutes. Simply sign up, connect your data sources, and our AI will automatically start generating insights.",
    },
    {
      question: "What types of data sources can I connect?",
      answer:
        "NeuralFlow AI connects to 100+ data sources including databases, CRM systems, marketing platforms, analytics tools, and cloud storage services. We support both real-time and batch data ingestion.",
    },
    {
      question: "Is my data secure?",
      answer:
        "Absolutely. We use enterprise-grade security with end-to-end encryption, SOC 2 Type II compliance, and bank-level security measures. Your data is always encrypted in transit and at rest.",
    },
    {
      question: "Do I need technical expertise to use the platform?",
      answer:
        "Not at all! NeuralFlow AI is designed for business users. Our intuitive drag-and-drop interface and AI-powered insights make advanced analytics accessible to everyone.",
    },
    {
      question: "What support options are available?",
      answer:
        "We offer 24/7 email support, comprehensive documentation, video tutorials, and dedicated customer success managers for enterprise customers.",
    },
    {
      question: "Can I cancel my subscription anytime?",
      answer:
        "Yes, you can cancel your subscription at any time. We offer month-to-month plans with no long-term commitments required.",
    },
  ];

  return (
    <section id="faq" className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Frequently Asked
            <span className="bg-gradient-to-r from-indigo-600 to-purple-700 bg-clip-text text-transparent">
              {" "}
              Questions
            </span>
          </h2>
          <p className="text-xl text-gray-600">
            Everything you need to know about NeuralFlow AI
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="border border-gray-200 rounded-xl overflow-hidden"
            >
              <button
                onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                className="w-full px-6 py-6 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
              >
                <span className="font-semibold text-gray-900 text-lg">
                  {faq.question}
                </span>
                <motion.div
                  animate={{ rotate: openFAQ === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-gray-500"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </motion.div>
              </button>

              <motion.div
                initial={false}
                animate={{
                  height: openFAQ === index ? "auto" : 0,
                  opacity: openFAQ === index ? 1 : 0,
                }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="px-6 pb-6 text-gray-600 text-lg">
                  {faq.answer}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section className="py-24 bg-gradient-to-br from-indigo-600 to-purple-700 relative overflow-hidden">
      <div className="absolute inset-0 bg-black/10"></div>

      <div className="max-w-4xl mx-auto px-6 text-center relative">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Data Into Insights?
          </h2>
          <p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">
            Join thousands of companies already using NeuralFlow AI to make
            smarter, data-driven decisions.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-indigo-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-50 transition-all shadow-lg"
            >
              Start Free 14-Day Trial
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white/10 transition-all"
            >
              Schedule a Demo
            </motion.button>
          </div>

          <p className="text-indigo-100 text-sm">
            No credit card required • Setup in 5 minutes • Cancel anytime
          </p>
        </motion.div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Image
                src="https://cdn-icons-png.flaticon.com/512/8637/8637099.png"
                alt="NeuralFlow AI Logo"
                width={32}
                height={32}
                className="rounded-lg"
              />
              <span className="text-xl font-bold">NeuralFlow AI</span>
            </div>
            <p className="text-gray-400">
              Transform your data into AI-powered insights with our advanced
              analytics platform.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Product</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Features
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Integrations
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  API
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Security
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Documentation
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Status
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Privacy
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400">
            © 2024 NeuralFlow AI. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Twitter
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
