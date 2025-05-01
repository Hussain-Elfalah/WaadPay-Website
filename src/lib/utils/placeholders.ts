// This file contains placeholder utilities for development

export const placeholderDataUrl = (width: number, height: number, text: string = '', bgColor: string = '#3b82f6', textColor: string = 'white'): string => {
  // Check if we're in a browser environment
  if (typeof document === 'undefined') {
    // Return a fallback for server-side rendering
    return `https://placehold.co/${width}x${height}/${bgColor.replace('#', '')}/${textColor.replace('#', '')}?text=${encodeURIComponent(text || 'WaadPay')}`;
  }
  
  // Create a canvas element to generate the placeholder image
  const canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext('2d');
  
  if (!ctx) return '';
  
  // Fill the background
  ctx.fillStyle = bgColor;
  ctx.fillRect(0, 0, width, height);
  
  // Add text if provided
  if (text) {
    ctx.fillStyle = textColor;
    ctx.font = `bold ${Math.min(width, height) / 10}px Arial`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(text, width / 2, height / 2);
  }
  
  // Convert canvas to data URL
  return canvas.toDataURL('image/png');
};

// For server components where DOM isn't available, we provide a static data URL
export const staticPlaceholder = (size: string = '300x200', bgColor: string = '3b82f6'): string => {
  return `https://placehold.co/${size}/${bgColor}/FFFFFF?text=WaadPay`;
};

// Demo product cards for the hero section
export const demoProducts = [
  {
    title: "Secure Transfers",
    link: "#",
    thumbnail: "https://placehold.co/600x400/3b82f6/FFFFFF?text=Secure+Transfers",
  },
  {
    title: "Multi-Bank Integration",
    link: "#",
    thumbnail: "https://placehold.co/600x400/4f46e5/FFFFFF?text=Multi-Bank",
  },
  {
    title: "Escrow System",
    link: "#",
    thumbnail: "https://placehold.co/600x400/8b5cf6/FFFFFF?text=Escrow+System",
  },
  {
    title: "Offline Mode",
    link: "#",
    thumbnail: "https://placehold.co/600x400/6366f1/FFFFFF?text=Offline+Mode",
  },
  {
    title: "Merchant Dashboard",
    link: "#",
    thumbnail: "https://placehold.co/600x400/3b82f6/FFFFFF?text=Merchant+Dashboard",
  },
  {
    title: "Easy Payments",
    link: "#",
    thumbnail: "https://placehold.co/600x400/4f46e5/FFFFFF?text=Easy+Payments",
  },
  {
    title: "Bank Transfers",
    link: "#",
    thumbnail: "https://placehold.co/600x400/8b5cf6/FFFFFF?text=Bank+Transfers",
  },
  {
    title: "Mobile App",
    link: "#",
    thumbnail: "https://placehold.co/600x400/6366f1/FFFFFF?text=Mobile+App",
  },
  {
    title: "Security Features",
    link: "#",
    thumbnail: "https://placehold.co/600x400/3b82f6/FFFFFF?text=Security+Features",
  },
  {
    title: "Analytics Dashboard",
    link: "#",
    thumbnail: "https://placehold.co/600x400/4f46e5/FFFFFF?text=Analytics",
  },
  {
    title: "Payment Links",
    link: "#",
    thumbnail: "https://placehold.co/600x400/8b5cf6/FFFFFF?text=Payment+Links",
  },
  {
    title: "Mobile Wallet",
    link: "#",
    thumbnail: "https://placehold.co/600x400/6366f1/FFFFFF?text=Mobile+Wallet",
  },
]; 