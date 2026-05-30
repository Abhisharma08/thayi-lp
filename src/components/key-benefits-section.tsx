"use client";

import { useState } from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const galleryProducts = [
  {
    name: 'SCREW ON SKIRTING',
    description: 'Secure and durable skirting for heavy-duty applications.',
    image: 'https://aluempire.gyanouspro.com/media/product/Screw_Skirting.jpg',
  },
  {
    name: 'STICK ON SKIRTING',
    description: 'Easy peel-and-stick installation for quick upgrades.',
    image: 'https://aluempire.gyanouspro.com/media/product/Line_Skirting_Front_Image.jpg',
  },
  {
    name: 'LINE SKIRTING',
    description: 'Sleek and minimalist design for modern interiors.',
    image: 'https://aluempire.gyanouspro.com/media/product/Line_Skirting.jpg',
  },
  {
    name: 'LED SKIRTING',
    description: 'Integrated lighting for ambiance and pathway illumination.',
    image: 'https://aluempire.gyanouspro.com/media/product/LED_Skirting_Front_Image.jpg',
  },
  {
    name: 'T PROFILE',
    description: 'Ideal transition profile for joining different floor types.',
    image: 'https://aluempire.gyanouspro.com/media/product/T_Profile_Front_Image.jpg',
  },
  {
    name: 'Z PROFILE',
    description: 'Versatile edge protection for varying floor heights.',
    image: 'https://aluempire.gyanouspro.com/media/product/Z_Profile_Front_Image.jpg',
  },
  {
    name: 'FLEXI PROFILE',
    description: 'Bendable profile for curved walls and unique architectural shapes.',
    image: 'https://aluempire.gyanouspro.com/media/product/Flexi_Front_Image.jpg',
  },
  {
    name: 'ALUMINUM STEP EDGE PROFILE',
    description: 'Slip-resistant edge protection for stairs.',
    image: 'https://aluempire.gyanouspro.com/media/product/Step_Edge_Profile_Front_Image.jpg',
  },
];

export default function SkirtingSolutionsSection() {
  const [showAll, setShowAll] = useState(false);
  const visibleProducts = showAll ? galleryProducts : galleryProducts.slice(0, 4);

  return (
    <section id="solutions" className="py-20 sm:py-32 bg-muted/30">
      <div className="site-container">
        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold font-body text-primary">
            Explore Our Skirting Solutions
          </h2>
          <p className="mt-4 text-muted-foreground text-base">
            Discover our wide range of premium skirting solutions tailored for every space.
          </p>
        </div>

        {/* Product Gallery */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {visibleProducts.map((product, index) => (
            <Card
              key={index}
              className="group overflow-hidden border-border/20 hover:shadow-xl transition-all duration-300 flex flex-col h-full bg-background"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <CardHeader className="p-6 flex-grow">
                <CardTitle className="text-lg font-bold font-body tracking-tight text-center sm:text-left">
                  {product.name}
                </CardTitle>
                <CardDescription className="mt-2 text-sm text-muted-foreground text-center sm:text-left">
                  {product.description}
                </CardDescription>
              </CardHeader>
              <CardFooter className="p-6 pt-0 mt-auto">
                <Button asChild variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <a href="#lead-form">Enquire Now</a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* Show More / Show Less Button */}
        <div className="mt-12 flex justify-center">
          <Button 
            onClick={() => setShowAll(!showAll)}
            size="lg"
            className="rounded-full px-8 text-base font-medium shadow-md hover:shadow-lg transition-all hover:-translate-y-0.5"
          >
            {showAll ? 'Show Less' : 'Show More'}
          </Button>
        </div>
      </div>
    </section>
  );
}
