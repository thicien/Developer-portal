import { useState } from 'react';
import { Mail, MapPin, Send, AlertCircle, CheckCircle } from 'lucide-react';
import { GithubIcon, LinkedinIcon, TwitterIcon } from '../components/BrandIcons';
import confetti from 'canvas-confetti';
import { personalInfo } from '../data/portfolioData';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' | 'error'

  const validate = () => {
    const tempErrors = {};
    if (!formData.name.trim()) tempErrors.name = 'Full name is required.';
    
    if (!formData.email.trim()) {
      tempErrors.email = 'Email address is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      tempErrors.email = 'Please provide a valid email address.';
    }

    if (!formData.subject.trim()) tempErrors.subject = 'Subject is required.';
    if (!formData.message.trim()) tempErrors.message = 'Message content is required.';

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (errors[name]) {
      setErrors({ ...errors, [name]: '' });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validate()) return;

    setIsSubmitting(true);
    setSubmitStatus(null);

    // Mock API Submission trigger
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      
      // Trigger premium celebration confetti!
      confetti({
        particleCount: 150,
        spread: 80,
        origin: { y: 0.6 },
        colors: ['#3B82F6', '#8B5CF6', '#06B6D4'],
      });

      // Reset Form fields
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
    }, 1800);
  };

  return (
    <section id="contact" className="py-24 bg-[#0B0F19]/50 relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Title Header */}
        <div className="text-center mb-16">
          <h2 className="font-grotesk text-3xl md:text-5xl font-extrabold text-white mb-4">
            Get In Touch
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6] mx-auto rounded-full" />
          <p className="font-poppins text-gray-400 text-base mt-4 max-w-xl mx-auto">
            Ready to build something together? Send a transmission or connect via social networks.
          </p>
        </div>

        {/* Form + Contact details column wrap */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-5xl mx-auto">
          {/* Info Details Column */}
          <div className="lg:col-span-5 flex flex-col justify-between text-left space-y-8">
            <div className="space-y-6">
              <h3 className="font-grotesk text-2xl font-bold text-white">
                Contact Specifications
              </h3>
              <p className="font-poppins text-gray-400 text-sm leading-relaxed">
                Whether you have an open architectural role, a consulting project, or just want to say hi, feel free to reach out. I try my best to answer within 24 hours.
              </p>
            </div>

            {/* Icons list details */}
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="p-3.5 rounded-2xl bg-gray-900 border border-gray-800 text-[#3B82F6]">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="font-mono text-xs text-gray-400 block">Direct Mail</span>
                  <a href={`mailto:${personalInfo.email}`} className="font-poppins text-sm text-white hover:text-[#3B82F6] transition-colors">
                    {personalInfo.email}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="p-3.5 rounded-2xl bg-gray-900 border border-gray-800 text-[#8B5CF6]">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="font-mono text-xs text-gray-400 block">Location Base</span>
                  <span className="font-poppins text-sm text-white">
                    {personalInfo.location}
                  </span>
                </div>
              </div>
            </div>

            {/* Social icons connection */}
            <div className="space-y-4 pt-4">
              <span className="font-mono text-xs font-semibold text-gray-400 uppercase tracking-widest block">
                Secure Channels
              </span>
              <div className="flex items-center gap-3">
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-gray-900 hover:bg-[#3B82F6]/10 border border-gray-850 hover:border-[#3B82F6]/50 text-gray-300 hover:text-[#3B82F6] transition-all duration-350"
                  aria-label="GitHub Portal"
                >
                  <GithubIcon className="w-5 h-5" />
                </a>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-gray-900 hover:bg-[#8B5CF6]/10 border border-gray-850 hover:border-[#8B5CF6]/50 text-gray-300 hover:text-[#8B5CF6] transition-all duration-350"
                  aria-label="LinkedIn Profile"
                >
                  <LinkedinIcon className="w-5 h-5" />
                </a>
                <a
                  href={personalInfo.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-gray-900 hover:bg-[#06B6D4]/10 border border-gray-850 hover:border-[#06B6D4]/50 text-gray-300 hover:text-[#06B6D4] transition-all duration-350"
                  aria-label="Twitter Feed"
                >
                  <TwitterIcon className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Interactive Form Panel */}
          <div className="lg:col-span-7 bg-[#111827]/70 border border-gray-800 p-8 rounded-3xl shadow-2xl relative overflow-hidden">
            {submitStatus === 'success' ? (
              <div className="py-12 flex flex-col items-center text-center space-y-4">
                <div className="p-4 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">
                  <CheckCircle className="w-12 h-12" />
                </div>
                <h3 className="font-grotesk text-2xl font-bold text-white">Transmission Successful</h3>
                <p className="font-poppins text-gray-400 text-sm max-w-sm">
                  Thank you for reaching out! Your message was received securely. I'll get back to you shortly.
                </p>
                <button
                  onClick={() => setSubmitStatus(null)}
                  className="px-6 py-2.5 rounded-xl bg-gray-800 text-white font-poppins hover:bg-gray-700 transition-colors font-semibold cursor-pointer"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5 text-left">
                {/* Name */}
                <div className="space-y-2">
                  <label htmlFor="name" className="font-mono text-xs text-gray-400 block uppercase">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className={`w-full bg-[#0B0F19] border rounded-xl px-4 py-3 text-white font-poppins text-sm outline-none transition-all duration-300 ${
                      errors.name ? 'border-red-500/50 focus:border-red-500' : 'border-gray-850 focus:border-[#3B82F6]/50'
                    }`}
                    placeholder="Enter your name"
                  />
                  {errors.name && (
                    <div className="flex items-center gap-1 text-red-400 text-xs font-mono">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{errors.name}</span>
                    </div>
                  )}
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <label htmlFor="email" className="font-mono text-xs text-gray-400 block uppercase">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={`w-full bg-[#0B0F19] border rounded-xl px-4 py-3 text-white font-poppins text-sm outline-none transition-all duration-300 ${
                      errors.email ? 'border-red-500/50 focus:border-red-500' : 'border-gray-850 focus:border-[#3B82F6]/50'
                    }`}
                    placeholder="Enter your email"
                  />
                  {errors.email && (
                    <div className="flex items-center gap-1 text-red-400 text-xs font-mono">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{errors.email}</span>
                    </div>
                  )}
                </div>

                {/* Subject */}
                <div className="space-y-2">
                  <label htmlFor="subject" className="font-mono text-xs text-gray-400 block uppercase">
                    Subject Line
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className={`w-full bg-[#0B0F19] border rounded-xl px-4 py-3 text-white font-poppins text-sm outline-none transition-all duration-300 ${
                      errors.subject ? 'border-red-500/50 focus:border-red-500' : 'border-gray-850 focus:border-[#3B82F6]/50'
                    }`}
                    placeholder="Topic of conversation"
                  />
                  {errors.subject && (
                    <div className="flex items-center gap-1 text-red-400 text-xs font-mono">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{errors.subject}</span>
                    </div>
                  )}
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <label htmlFor="message" className="font-mono text-xs text-gray-400 block uppercase">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    className={`w-full bg-[#0B0F19] border rounded-xl px-4 py-3 text-white font-poppins text-sm outline-none transition-all duration-300 resize-none ${
                      errors.message ? 'border-red-500/50 focus:border-red-500' : 'border-gray-850 focus:border-[#3B82F6]/50'
                    }`}
                    placeholder="Write details of your request here..."
                  />
                  {errors.message && (
                    <div className="flex items-center gap-1 text-red-400 text-xs font-mono">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{errors.message}</span>
                    </div>
                  )}
                </div>

                {/* Submit Trigger */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 py-4 rounded-xl bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6] text-white font-poppins font-bold hover:opacity-90 disabled:opacity-50 transition-opacity active:scale-[0.99] transition-transform duration-100 cursor-pointer"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 rounded-full border-2 border-white/30 border-t-white animate-spin" />
                      <span>Transmitting...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Transmit Message</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
