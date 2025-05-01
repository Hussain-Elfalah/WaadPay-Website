"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";

// Region data for Libya
const regionData = {
  LYNL: {
    name: "Nalut",
    population: "~93,000",
    info: "Northwestern region bordering Tunisia",
    waadpayServices: ["Money Transfer", "Bill Payment", "Mobile Recharge"],
    coverage: "78%"
  },
  LYNQ: {
    name: "An Nuqat al Khams",
    population: "~287,000",
    info: "Northwestern coastal region",
    waadpayServices: ["Money Transfer", "Bill Payment", "Mobile Recharge", "Merchant Services"],
    coverage: "93%"
  },
  LYKF: {
    name: "Al Kufrah",
    population: "~50,000",
    info: "Southeastern region - Libya's largest district by area",
    waadpayServices: ["Money Transfer", "Bill Payment"],
    coverage: "65%"
  },
  LYMB: {
    name: "Al Marqab",
    population: "~157,000",
    info: "Northern coastal region around Khoms",
    waadpayServices: ["Money Transfer", "Bill Payment", "Mobile Recharge", "Merchant Services"],
    coverage: "92%"
  },
  LYTB: {
    name: "Tripoli",
    population: "~1,165,000",
    info: "Capital city and most populous region in Libya",
    waadpayServices: ["Money Transfer", "Bill Payment", "Mobile Recharge", "Merchant Services", "Government Payments"],
    coverage: "95%"
  },
  LYBA: {
    name: "Benghazi",
    population: "~650,000",
    info: "Second largest city and major economic center",
    waadpayServices: ["Money Transfer", "Bill Payment", "Mobile Recharge", "Merchant Services"],
    coverage: "90%"
  },
  LYSR: {
    name: "Surt",
    population: "~185,000",
    info: "Central coastal region - strategic location on the Gulf of Sidra",
    waadpayServices: ["Money Transfer", "Bill Payment", "Mobile Recharge", "Merchant Services"],
    coverage: "87%"
  },
  LYSB: {
    name: "Sabha",
    population: "~130,000",
    info: "Southern region and major center for the Sahara trade routes",
    waadpayServices: ["Money Transfer", "Bill Payment", "Mobile Recharge"],
    coverage: "72%"
  }
};

// City data with rollout phase information
const cityData = [
  { 
    name: "Tripoli", 
    coordinates: { x: 255, y: 93 }, 
    isCapital: true, 
    phase: 1, 
    phaseLabel: "Launch Phase"
  },
  { 
    name: "Benghazi", 
    coordinates: { x: 694, y: 173 }, 
    isCapital: false, 
    phase: 1, 
    phaseLabel: "Launch Phase"
  },
  { 
    name: "Misrata", 
    coordinates: { x: 378, y: 190 }, 
    isCapital: false, 
    phase: 2, 
    phaseLabel: "Expansion Phase" 
  },
  { 
    name: "Tobruk", 
    coordinates: { x: 850, y: 125 }, 
    isCapital: false, 
    phase: 2, 
    phaseLabel: "Expansion Phase" 
  },
  { 
    name: "Sabha", 
    coordinates: { x: 380, y: 440 }, 
    isCapital: false, 
    phase: 3, 
    phaseLabel: "Final Phase" 
  }
];

export default function LibyaMap() {
  // State to track highlighted and selected regions
  const [highlightedRegion, setHighlightedRegion] = useState<string | null>(null);
  const [selectedRegion, setSelectedRegion] = useState<string | null>(null);
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);
  const mapRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement | null>(null);

  // Handle window resize for responsive behavior
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Load SVG and add interactivity
  useEffect(() => {
    const loadSvg = async () => {
      try {
        // Fetch the SVG file
        const response = await fetch('/Map_Libya.svg');
        const svgText = await response.text();
        
        // Insert the SVG into the DOM
        if (mapRef.current) {
          mapRef.current.innerHTML = svgText;
          
          // Get the SVG element
          const svg = mapRef.current.querySelector('svg');
          if (svg) {
            svgRef.current = svg;
            
            // Apply styles to the SVG
            svg.setAttribute('class', 'w-full h-full');
            svg.setAttribute('fill', '#3b82f6'); // blue-500
            
            // Add filter definitions for Aceternity-like effects
            const defs = document.createElementNS('http://www.w3.org/2000/svg', 'defs');
            
            // Glow filter for markers
            const glowFilter = document.createElementNS('http://www.w3.org/2000/svg', 'filter');
            glowFilter.setAttribute('id', 'glow');
            glowFilter.setAttribute('x', '-50%');
            glowFilter.setAttribute('y', '-50%');
            glowFilter.setAttribute('width', '200%');
            glowFilter.setAttribute('height', '200%');
            
            const feGaussianBlur = document.createElementNS('http://www.w3.org/2000/svg', 'feGaussianBlur');
            feGaussianBlur.setAttribute('stdDeviation', '3');
            feGaussianBlur.setAttribute('result', 'blur');
            glowFilter.appendChild(feGaussianBlur);
            
            const feComposite = document.createElementNS('http://www.w3.org/2000/svg', 'feComposite');
            feComposite.setAttribute('in', 'SourceGraphic');
            feComposite.setAttribute('in2', 'blur');
            feComposite.setAttribute('operator', 'over');
            glowFilter.appendChild(feComposite);
            
            defs.appendChild(glowFilter);
            
            // Glass morphism filter
            const glassFilter = document.createElementNS('http://www.w3.org/2000/svg', 'filter');
            glassFilter.setAttribute('id', 'glass');
            
            const feGaussianBlurGlass = document.createElementNS('http://www.w3.org/2000/svg', 'feGaussianBlur');
            feGaussianBlurGlass.setAttribute('in', 'SourceGraphic');
            feGaussianBlurGlass.setAttribute('stdDeviation', '10');
            feGaussianBlurGlass.setAttribute('result', 'blur');
            glassFilter.appendChild(feGaussianBlurGlass);
            
            const feColorMatrix = document.createElementNS('http://www.w3.org/2000/svg', 'feColorMatrix');
            feColorMatrix.setAttribute('in', 'blur');
            feColorMatrix.setAttribute('type', 'matrix');
            feColorMatrix.setAttribute('values', '1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 18 -7');
            feColorMatrix.setAttribute('result', 'glass');
            glassFilter.appendChild(feColorMatrix);
            
            const feCompositeGlass = document.createElementNS('http://www.w3.org/2000/svg', 'feComposite');
            feCompositeGlass.setAttribute('in', 'SourceGraphic');
            feCompositeGlass.setAttribute('in2', 'glass');
            feCompositeGlass.setAttribute('operator', 'atop');
            glassFilter.appendChild(feCompositeGlass);
            
            defs.appendChild(glassFilter);
            
            svg.prepend(defs);
            
            // Add interaction to regions
            const regions = svg.querySelectorAll('#features path');
            regions.forEach((region) => {
              // Get the region ID
              const regionId = region.getAttribute('id');
              if (!regionId) return;
              
              // Remove the fill attribute to use CSS
              region.removeAttribute('fill');
              
              // Add the class for styling
              region.setAttribute('class', `fill-blue-500 dark:fill-blue-700 stroke-white stroke-[0.75] hover:fill-blue-600 dark:hover:fill-blue-600 transition-colors cursor-pointer ${highlightedRegion === regionId ? 'fill-blue-600 dark:fill-blue-500' : ''} ${selectedRegion === regionId ? 'fill-blue-700 dark:fill-blue-400' : ''}`);
              
              // Add event listeners
              region.addEventListener('mouseenter', () => {
                setHighlightedRegion(regionId);
              });
              
              region.addEventListener('mouseleave', () => {
                setHighlightedRegion(null);
              });
              
              region.addEventListener('click', () => {
                setSelectedRegion(prevRegion => prevRegion === regionId ? null : regionId);
              });
              
              region.addEventListener('mousemove', (e) => {
                const mouseEvent = e as MouseEvent;
                if (!mapRef.current) return;
                
                const rect = mapRef.current.getBoundingClientRect();
                setTooltipPosition({
                  x: mouseEvent.clientX - rect.left,
                  y: mouseEvent.clientY - rect.top
                });
              });
            });
            
            // Add markers with Aceternity UI style
            const markersGroup = document.createElementNS('http://www.w3.org/2000/svg', 'g');
            markersGroup.setAttribute('id', 'city-markers');
            svg.appendChild(markersGroup);
            
            cityData.forEach(city => {
              const { name, coordinates, isCapital, phase, phaseLabel } = city;
              
              // Create marker group
              const markerGroup = document.createElementNS('http://www.w3.org/2000/svg', 'g');
              markerGroup.setAttribute('class', 'city-marker');
              
              // Phase colors with gradients for Aceternity look
              const phaseGradients = {
                1: {
                  start: '#4ade80', // green-400
                  end: '#16a34a'    // green-600
                },
                2: {
                  start: '#fbbf24', // amber-400
                  end: '#d97706'    // amber-600
                },
                3: {
                  start: '#60a5fa', // blue-400
                  end: '#2563eb'    // blue-600
                }
              };
              
              // Capital gets red gradient
              const markerGradient = isCapital 
                ? { start: '#f87171', end: '#dc2626' } // red-400 to red-600
                : phaseGradients[phase as keyof typeof phaseGradients];
              
              // Create radial gradient for each marker
              const gradientId = `gradient-${name.toLowerCase().replace(/\s+/g, '')}`;
              const gradient = document.createElementNS('http://www.w3.org/2000/svg', 'radialGradient');
              gradient.setAttribute('id', gradientId);
              gradient.setAttribute('cx', '0.5');
              gradient.setAttribute('cy', '0.5');
              gradient.setAttribute('r', '0.5');
              gradient.setAttribute('fx', '0.45');
              gradient.setAttribute('fy', '0.45');
              
              const stop1 = document.createElementNS('http://www.w3.org/2000/svg', 'stop');
              stop1.setAttribute('offset', '0%');
              stop1.setAttribute('stop-color', markerGradient.start);
              
              const stop2 = document.createElementNS('http://www.w3.org/2000/svg', 'stop');
              stop2.setAttribute('offset', '100%');
              stop2.setAttribute('stop-color', markerGradient.end);
              
              gradient.appendChild(stop1);
              gradient.appendChild(stop2);
              defs.appendChild(gradient);
              
              // Expanding ring animation (Aceternity style)
              for (let i = 0; i < 2; i++) {
                const expandingRing = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
                expandingRing.setAttribute('cx', coordinates.x.toString());
                expandingRing.setAttribute('cy', coordinates.y.toString());
                expandingRing.setAttribute('r', '12');
                expandingRing.setAttribute('stroke', `url(#${gradientId})`);
                expandingRing.setAttribute('stroke-width', '2');
                expandingRing.setAttribute('fill', 'none');
                expandingRing.setAttribute('opacity', '0');
                
                // Create animation for expanding
                const animateRadius = document.createElementNS('http://www.w3.org/2000/svg', 'animate');
                animateRadius.setAttribute('attributeName', 'r');
                animateRadius.setAttribute('from', '12');
                animateRadius.setAttribute('to', '35');
                animateRadius.setAttribute('dur', '3s');
                animateRadius.setAttribute('begin', `${i * 1.5}s`);
                animateRadius.setAttribute('repeatCount', 'indefinite');
                expandingRing.appendChild(animateRadius);
                
                // Create animation for opacity
                const animateOpacity = document.createElementNS('http://www.w3.org/2000/svg', 'animate');
                animateOpacity.setAttribute('attributeName', 'opacity');
                animateOpacity.setAttribute('from', '0.8');
                animateOpacity.setAttribute('to', '0');
                animateOpacity.setAttribute('dur', '3s');
                animateOpacity.setAttribute('begin', `${i * 1.5}s`);
                animateOpacity.setAttribute('repeatCount', 'indefinite');
                expandingRing.appendChild(animateOpacity);
                
                // Create animation for stroke-width
                const animateStrokeWidth = document.createElementNS('http://www.w3.org/2000/svg', 'animate');
                animateStrokeWidth.setAttribute('attributeName', 'stroke-width');
                animateStrokeWidth.setAttribute('from', '2');
                animateStrokeWidth.setAttribute('to', '0.8');
                animateStrokeWidth.setAttribute('dur', '3s');
                animateStrokeWidth.setAttribute('begin', `${i * 1.5}s`);
                animateStrokeWidth.setAttribute('repeatCount', 'indefinite');
                expandingRing.appendChild(animateStrokeWidth);
                
                markerGroup.appendChild(expandingRing);
              }
              
              // Glow effect (outer)
              const glowCircle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
              glowCircle.setAttribute('cx', coordinates.x.toString());
              glowCircle.setAttribute('cy', coordinates.y.toString());
              glowCircle.setAttribute('r', '16');
              glowCircle.setAttribute('fill', `url(#${gradientId})`);
              glowCircle.setAttribute('opacity', '0.4');
              glowCircle.setAttribute('filter', 'url(#glow)');
              markerGroup.appendChild(glowCircle);
              
              // Main marker with glass morphism effect
              const markerOuter = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
              markerOuter.setAttribute('cx', coordinates.x.toString());
              markerOuter.setAttribute('cy', coordinates.y.toString());
              markerOuter.setAttribute('r', '16');
              markerOuter.setAttribute('fill', 'rgba(255, 255, 255, 0.15)');
              markerOuter.setAttribute('stroke', 'rgba(255, 255, 255, 0.5)');
              markerOuter.setAttribute('stroke-width', '1.5');
              markerOuter.setAttribute('filter', 'url(#glass)');
              markerGroup.appendChild(markerOuter);
              
              // Inner colored circle
              const markerInner = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
              markerInner.setAttribute('cx', coordinates.x.toString());
              markerInner.setAttribute('cy', coordinates.y.toString());
              markerInner.setAttribute('r', '12');
              markerInner.setAttribute('fill', `url(#${gradientId})`);
              markerInner.setAttribute('filter', 'url(#glow)');
              
              // Pulsing animation for inner circle
              const pulseAnimation = document.createElementNS('http://www.w3.org/2000/svg', 'animate');
              pulseAnimation.setAttribute('attributeName', 'r');
              pulseAnimation.setAttribute('values', '12;13;12');
              pulseAnimation.setAttribute('dur', '2s');
              pulseAnimation.setAttribute('repeatCount', 'indefinite');
              markerInner.appendChild(pulseAnimation);
              
              markerGroup.appendChild(markerInner);
              
              // Phase number with modern typography
              const phaseText = document.createElementNS('http://www.w3.org/2000/svg', 'text');
              phaseText.setAttribute('x', coordinates.x.toString());
              phaseText.setAttribute('y', (coordinates.y + 4).toString());
              phaseText.setAttribute('text-anchor', 'middle');
              phaseText.setAttribute('font-size', '14');
              phaseText.setAttribute('font-weight', 'bold');
              phaseText.setAttribute('fill', 'white');
              phaseText.setAttribute('style', 'text-shadow: 0px 1px 2px rgba(0,0,0,0.3);');
              phaseText.textContent = phase.toString();
              markerGroup.appendChild(phaseText);
              
              // Modern tooltip with Aceternity styling
              const tooltip = document.createElementNS('http://www.w3.org/2000/svg', 'g');
              tooltip.setAttribute('class', 'marker-tooltip');
              tooltip.setAttribute('opacity', '0');
              tooltip.setAttribute('transform', 'translate(0, 10)');
              
              // Create a tooltip container with glass morphism
              const tooltipWidth = 140;
              const tooltipHeight = 75;
              const tooltipX = coordinates.x - tooltipWidth/2;
              const tooltipY = coordinates.y + 25;
              
              // Tooltip background with rounded corners
              const tooltipBg = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
              tooltipBg.setAttribute('x', tooltipX.toString());
              tooltipBg.setAttribute('y', tooltipY.toString());
              tooltipBg.setAttribute('width', tooltipWidth.toString());
              tooltipBg.setAttribute('height', tooltipHeight.toString());
              tooltipBg.setAttribute('rx', '14');
              tooltipBg.setAttribute('fill', 'rgba(0, 0, 0, 0.75)');
              tooltipBg.setAttribute('filter', 'url(#glass)');
              tooltip.appendChild(tooltipBg);
              
              // Arrow pointing to marker
              const tooltipArrow = document.createElementNS('http://www.w3.org/2000/svg', 'path');
              const arrowPath = `M${coordinates.x - 10},${tooltipY} L${coordinates.x},${tooltipY - 10} L${coordinates.x + 10},${tooltipY} Z`;
              tooltipArrow.setAttribute('d', arrowPath);
              tooltipArrow.setAttribute('fill', 'rgba(0, 0, 0, 0.75)');
              tooltip.appendChild(tooltipArrow);
              
              // Gradient border for tooltip
              const tooltipBorder = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
              tooltipBorder.setAttribute('x', tooltipX.toString());
              tooltipBorder.setAttribute('y', tooltipY.toString());
              tooltipBorder.setAttribute('width', tooltipWidth.toString());
              tooltipBorder.setAttribute('height', tooltipHeight.toString());
              tooltipBorder.setAttribute('rx', '14');
              tooltipBorder.setAttribute('fill', 'none');
              tooltipBorder.setAttribute('stroke', `url(#${gradientId})`);
              tooltipBorder.setAttribute('stroke-width', '2');
              tooltip.appendChild(tooltipBorder);
              
              // City name text (now in tooltip)
              const cityNameText = document.createElementNS('http://www.w3.org/2000/svg', 'text');
              cityNameText.setAttribute('x', (tooltipX + tooltipWidth/2).toString());
              cityNameText.setAttribute('y', (tooltipY + 25).toString());
              cityNameText.setAttribute('text-anchor', 'middle');
              cityNameText.setAttribute('font-size', '16');
              cityNameText.setAttribute('font-weight', 'bold');
              cityNameText.setAttribute('fill', 'white');
              cityNameText.textContent = name;
              tooltip.appendChild(cityNameText);
              
              // Divider line
              const divider = document.createElementNS('http://www.w3.org/2000/svg', 'line');
              divider.setAttribute('x1', (tooltipX + 20).toString());
              divider.setAttribute('y1', (tooltipY + 37).toString());
              divider.setAttribute('x2', (tooltipX + tooltipWidth - 20).toString());
              divider.setAttribute('y2', (tooltipY + 37).toString());
              divider.setAttribute('stroke', `url(#${gradientId})`);
              divider.setAttribute('stroke-width', '1.5');
              divider.setAttribute('opacity', '0.5');
              tooltip.appendChild(divider);
              
              // Phase label title (moved down)
              const phaseTitle = document.createElementNS('http://www.w3.org/2000/svg', 'text');
              phaseTitle.setAttribute('x', (tooltipX + tooltipWidth/2).toString());
              phaseTitle.setAttribute('y', (tooltipY + 55).toString());
              phaseTitle.setAttribute('text-anchor', 'middle');
              phaseTitle.setAttribute('font-size', '15');
              phaseTitle.setAttribute('font-weight', 'bold');
              phaseTitle.setAttribute('fill', 'white');
              phaseTitle.textContent = phaseLabel;
              tooltip.appendChild(phaseTitle);
              
              // Timeline label
              const timelineText = document.createElementNS('http://www.w3.org/2000/svg', 'text');
              timelineText.setAttribute('x', (tooltipX + tooltipWidth/2).toString());
              timelineText.setAttribute('y', (tooltipY + 75).toString());
              timelineText.setAttribute('text-anchor', 'middle');
              timelineText.setAttribute('font-size', '14');
              timelineText.setAttribute('fill', 'white');
              timelineText.setAttribute('fill-opacity', '0.8');
              
              // Set timeline based on phase
              let timeline = '';
              // if (phase === 1) timeline = 'Q4 2024';
              // if (phase === 2) timeline = 'Q2 2025';
              // if (phase === 3) timeline = 'Q4 2025';
              
              timelineText.textContent = timeline;
              tooltip.appendChild(timelineText);
              
              markerGroup.appendChild(tooltip);
              
              // Add hover interactions with smooth transitions
              markerGroup.addEventListener('mouseenter', () => {
                tooltip.setAttribute('opacity', '1');
                tooltip.setAttribute('transform', 'translate(0, 0)');
                
                // Scale up marker smoothly
                markerInner.setAttribute('r', '14');
                
                // Add transition
                markerInner.style.transition = 'r 0.3s ease';
              });
              
              markerGroup.addEventListener('mouseleave', () => {
                tooltip.setAttribute('opacity', '0');
                tooltip.setAttribute('transform', 'translate(0, 10)');
                
                // Scale back to normal
                markerInner.setAttribute('r', '12');
              });
              
              // Add to markers group
              markersGroup.appendChild(markerGroup);
            });
          }
        }
      } catch (error) {
        console.error('Error loading SVG:', error);
      }
    };
    
    loadSvg();
    
    // Cleanup
    return () => {
      if (svgRef.current) {
        const regions = svgRef.current.querySelectorAll('#features path');
        regions.forEach((region) => {
          region.removeEventListener('mouseenter', () => {});
          region.removeEventListener('mouseleave', () => {});
          region.removeEventListener('click', () => {});
          region.removeEventListener('mousemove', () => {});
        });
      }
    };
  }, [highlightedRegion, selectedRegion]);

  return (
    <div className="w-full h-[400px] md:h-[500px] relative overflow-hidden rounded-lg shadow-lg">
      {/* Background color that changes with theme */}
      <div className="absolute inset-0 bg-blue-50 dark:bg-blue-950 z-0"></div>
      
      {/* SVG Map container */}
      <div 
        ref={mapRef}
        className="relative w-full h-full z-10"
      >
        {/* SVG will be loaded here dynamically */}
      </div>
      
      {/* Tooltip for region hover */}
      {highlightedRegion && regionData[highlightedRegion as keyof typeof regionData] && !selectedRegion && (
        <div 
          className="absolute pointer-events-none bg-white dark:bg-gray-800 text-black dark:text-white px-3 py-2 rounded shadow-lg z-30 text-xs"
          style={{ 
            left: `${tooltipPosition.x + 10}px`, 
            top: `${tooltipPosition.y + 10}px`,
            maxWidth: '200px'
          }}
        >
          <div className="font-bold">{regionData[highlightedRegion as keyof typeof regionData].name}</div>
          <div>Population: {regionData[highlightedRegion as keyof typeof regionData].population}</div>
        </div>
      )}
      
      {/* Information overlay */}
      <div className="absolute bottom-4 left-4 bg-black/40 backdrop-blur-md text-white px-5 py-3 text-sm rounded-xl border border-white/10 shadow-xl z-20">
        WaadPay is available in all major cities across Libya
      </div>
      
      {/* Legend */}
      <div className="absolute bottom-4 right-4 bg-white/30 backdrop-blur-lg dark:bg-gray-800/40 p-4 rounded-xl shadow-lg border border-white/20 dark:border-gray-700/30 z-20 text-xs">
        <div className="font-medium text-sm mb-3">Legend</div>
        <div className="space-y-2">
          <div className="flex items-center">
            <div className="w-5 h-5 rounded-full bg-gradient-to-br from-red-400 to-red-600 mr-3 shadow-sm shadow-red-500/30"></div>
            <span>Capital City (Phase 1)</span>
          </div>
          <div className="flex items-center">
            <div className="w-5 h-5 rounded-full bg-gradient-to-br from-green-400 to-green-600 mr-3 shadow-sm shadow-green-500/30"></div>
            <span>Phase 1 (Launch - Q4 2024)</span>
          </div>
          <div className="flex items-center">
            <div className="w-5 h-5 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 mr-3 shadow-sm shadow-amber-500/30"></div>
            <span>Phase 2 (Expansion - Q2 2025)</span>
          </div>
          <div className="flex items-center">
            <div className="w-5 h-5 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 mr-3 shadow-sm shadow-blue-500/30"></div>
            <span>Phase 3 (Final - Q4 2025)</span>
          </div>
        </div>
      </div>
      
      {/* Selected Region Info Panel */}
      {selectedRegion && regionData[selectedRegion as keyof typeof regionData] && (
        <div className={`absolute ${isMobile ? 'inset-x-4 top-4 bottom-auto' : 'top-4 right-4 w-64'} bg-white/90 dark:bg-gray-800/90 text-black dark:text-white p-4 rounded-lg shadow-lg z-30 text-sm`}>
          <div className="flex justify-between items-center mb-2">
            <h3 className="font-bold text-lg">{regionData[selectedRegion as keyof typeof regionData].name}</h3>
            <button 
              className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200" 
              onClick={() => setSelectedRegion(null)}
            >
              ✕
            </button>
          </div>
          
          <div className="space-y-2">
            <p><span className="font-medium">Population:</span> {regionData[selectedRegion as keyof typeof regionData].population}</p>
            <p><span className="font-medium">Info:</span> {regionData[selectedRegion as keyof typeof regionData].info}</p>
            <p><span className="font-medium">WaadPay Coverage:</span> {regionData[selectedRegion as keyof typeof regionData].coverage}</p>
            
            <div>
              <p className="font-medium">WaadPay Services:</p>
              <ul className="list-disc list-inside ml-2 text-xs">
                {regionData[selectedRegion as keyof typeof regionData].waadpayServices.map((service, i) => (
                  <li key={i}>{service}</li>
                ))}
              </ul>
            </div>
            
            <div className="mt-3 pt-2 border-t border-gray-200 dark:border-gray-700">
              <button 
                className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded text-xs w-full"
                onClick={() => {/* Navigate to region details page */}}
              >
                Explore WaadPay in {regionData[selectedRegion as keyof typeof regionData].name}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
} 